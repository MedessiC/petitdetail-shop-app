import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { ProductCard } from "@/components/ProductCard";
import { useDb } from "@/data/db";

type Tri = "recent" | "prix-asc" | "prix-desc";

interface CatalogueSearch {
  categorie: string;
  tri: Tri;
}

export const Route = createFileRoute("/catalogue")({
  validateSearch: (search: Record<string, unknown>): CatalogueSearch => ({
    categorie: typeof search.categorie === "string" ? search.categorie : "tous",
    tri: (["recent", "prix-asc", "prix-desc"] as const).includes(search.tri as Tri)
      ? (search.tri as Tri)
      : "recent",
  }),
  head: () => ({
    meta: [
      { title: "Catalogue — petitdétail." },
      {
        name: "description",
        content:
          "Découvrez tous les colliers, bracelets et bagues petitdétail. Filtrez par catégorie et triez par prix.",
      },
      { property: "og:title", content: "Catalogue — petitdétail." },
      {
        property: "og:description",
        content: "Colliers, bracelets et bagues petitdétail à Cotonou.",
      },
    ],
  }),
  component: Catalogue,
});

function Catalogue() {
  const { categorie, tri } = Route.useSearch();
  const navigate = useNavigate({ from: "/catalogue" });
  const { products, categories } = useDb();

  const filtres = [{ slug: "tous", nom: "Tous" }, ...categories.map((c) => ({ slug: c.slug, nom: c.nom }))];
  const categoryId = categories.find((c) => c.slug === categorie)?.id;

  let liste = products.filter((p) => p.actif);
  if (categoryId) liste = liste.filter((p) => p.category_id === categoryId);
  if (tri === "prix-asc") liste = [...liste].sort((a, b) => a.prix - b.prix);
  if (tri === "prix-desc") liste = [...liste].sort((a, b) => b.prix - a.prix);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl">Catalogue</h1>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {filtres.map((f) => (
            <button
              key={f.slug}
              type="button"
              onClick={() => navigate({ search: { categorie: f.slug, tri } })}
              className={`min-h-11 border px-4 text-xs uppercase tracking-[0.18em] transition ${
                categorie === f.slug
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:border-foreground"
              }`}
            >
              {f.nom}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-xs uppercase tracking-[0.18em]">
          Trier
          <select
            value={tri}
            onChange={(e) => navigate({ search: { categorie, tri: e.target.value as Tri } })}
            className="min-h-11 border border-border bg-background px-3 text-xs"
          >
            <option value="recent">Nouveautés</option>
            <option value="prix-asc">Prix croissant</option>
            <option value="prix-desc">Prix décroissant</option>
          </select>
        </label>
      </div>

      {liste.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">Aucun produit dans cette catégorie.</p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {liste.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
