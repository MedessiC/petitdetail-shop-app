import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import { ProductCard } from "@/components/ProductCard";
import { useDb } from "@/data/db";
import type { Genre as ProductGenre } from "@/data/types";

type Tri = "recent" | "prix-asc" | "prix-desc";
type Genre = "tous" | ProductGenre;

interface CatalogueSearch {
  categorie?: string;
  tri?: Tri;
  q?: string;
  genre?: Genre;
  prixMin?: number;
  prixMax?: number;
}

function parsePrix(value: unknown) {
  const prix = typeof value === "number" ? value : Number(value);
  return Number.isFinite(prix) && prix >= 0 ? prix : undefined;
}

export const Route = createFileRoute("/catalogue")({
  validateSearch: (search: Record<string, unknown>): CatalogueSearch => ({
    categorie: typeof search["categorie"] === "string" ? (search["categorie"] as string) : "tous",
    tri: (["recent", "prix-asc", "prix-desc"] as const).includes(search["tri"] as Tri)
      ? (search["tri"] as Tri)
      : "recent",
    q: typeof search["q"] === "string" ? (search["q"] as string) : "",
    genre: (["tous", "homme", "femme", "mixte"] as const).includes(search["genre"] as Genre)
      ? (search["genre"] as Genre)
      : "tous",
    prixMin: parsePrix(search["prixMin"]),
    prixMax: parsePrix(search["prixMax"]),
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
  const {
    categorie = "tous",
    tri = "recent",
    q = "",
    genre = "tous",
    prixMin,
    prixMax,
  } = Route.useSearch();
  const navigate = useNavigate({ from: "/catalogue" });
  const { products, categories } = useDb();
  const [recherche, setRecherche] = useState(q);

  useEffect(() => {
    setRecherche(q);
  }, [q]);

  useEffect(() => {
    const terme = recherche.trim();
    if (terme === q) return;

    const timeout = window.setTimeout(() => {
      navigate({ search: { categorie, tri, q: terme, genre, prixMin, prixMax } });
    }, 350);

    return () => window.clearTimeout(timeout);
  }, [categorie, genre, navigate, prixMax, prixMin, q, recherche, tri]);

  function lancerRecherche(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate({ search: { categorie, tri, q: recherche.trim(), genre, prixMin, prixMax } });
  }

  const filtres = [{ slug: "tous", nom: "Tous" }, ...categories.map((c) => ({ slug: c.slug, nom: c.nom }))];
  const genres: { slug: Genre; nom: string }[] = [
    { slug: "tous", nom: "Tous" },
    { slug: "femme", nom: "Femme" },
    { slug: "homme", nom: "Homme" },
    { slug: "mixte", nom: "Mixte" },
  ];
  const filtresActifs =
    (categorie !== "tous" ? 1 : 0) +
    (genre !== "tous" ? 1 : 0) +
    (prixMin !== undefined ? 1 : 0) +
    (prixMax !== undefined ? 1 : 0) +
    (q.trim() ? 1 : 0);
  const categoryId = categories.find((c) => c.slug === categorie)?.id;

  let liste = products.filter((p) => p.actif);
  const rechercheNormalisee = q.trim().toLocaleLowerCase();
  if (rechercheNormalisee) {
    liste = liste.filter(
      (p) =>
        p.nom.toLocaleLowerCase().includes(rechercheNormalisee) ||
        p.description.toLocaleLowerCase().includes(rechercheNormalisee),
    );
  }
  if (categoryId) liste = liste.filter((p) => p.category_id === categoryId);
  if (genre !== "tous") liste = liste.filter((p) => p.genre === genre);
  if (prixMin !== undefined) liste = liste.filter((p) => p.prix >= prixMin);
  if (prixMax !== undefined) liste = liste.filter((p) => p.prix <= prixMax);
  if (tri === "prix-asc") liste = [...liste].sort((a, b) => a.prix - b.prix);
  if (tri === "prix-desc") liste = [...liste].sort((a, b) => b.prix - a.prix);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl">Catalogue</h1>

      <form onSubmit={lancerRecherche} className="mt-6 max-w-2xl">
        <label className="flex min-h-12 items-center rounded-lg border border-border px-4 shadow-sm transition focus-within:border-foreground focus-within:ring-2 focus-within:ring-foreground/10">
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            value={recherche}
            onChange={(event) => setRecherche(event.target.value)}
            placeholder="Rechercher un collier, une bague..."
            aria-label="Rechercher dans le catalogue"
            className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>
      </form>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{liste.length}</span> article
            {liste.length === 1 ? "" : "s"}
            {filtresActifs > 0 ? " correspondant à vos filtres" : " disponibles"}
          </p>
          {filtresActifs > 0 && (
            <button
              type="button"
              onClick={() => navigate({ search: {} })}
              className="text-xs uppercase tracking-[0.16em] underline underline-offset-4 transition hover:opacity-60"
            >
              Réinitialiser
            </button>
          )}
        </div>

      </div>

      <div className="mt-4 flex flex-wrap items-end gap-2 border-b border-border pb-5">
        <label className="flex flex-1 flex-col gap-1 text-[10px] uppercase tracking-[0.14em] sm:min-w-36">
          Catégorie
          <select
            value={categorie}
            onChange={(event) => navigate({ search: { categorie: event.target.value, tri, q, genre, prixMin, prixMax } })}
            className="min-h-10 rounded-md border border-border bg-background px-3 text-sm normal-case tracking-normal"
          >
            {filtres.map((filter) => (
              <option key={filter.slug} value={filter.slug}>
                {filter.nom}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-1 flex-col gap-1 text-[10px] uppercase tracking-[0.14em] sm:min-w-32">
          Public
          <select
            value={genre}
            onChange={(event) => navigate({ search: { categorie, tri, q, genre: event.target.value as Genre, prixMin, prixMax } })}
            className="min-h-10 rounded-md border border-border bg-background px-3 text-sm normal-case tracking-normal"
          >
            {genres.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.nom}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-1 flex-col gap-1 text-[10px] uppercase tracking-[0.14em] sm:min-w-36">
          Trier
          <select
            value={tri}
            onChange={(event) => navigate({ search: { categorie, tri: event.target.value as Tri, q, genre, prixMin, prixMax } })}
            className="min-h-10 rounded-md border border-border bg-background px-3 text-sm normal-case tracking-normal"
          >
            <option value="recent">Nouveautés</option>
            <option value="prix-asc">Prix croissant</option>
            <option value="prix-desc">Prix décroissant</option>
          </select>
        </label>

        <details className="relative flex-1 sm:min-w-40">
          <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between rounded-md border border-border px-3 text-[10px] uppercase tracking-[0.14em]">
            Prix
            <span className="text-muted-foreground">{prixMin ?? 0} – {prixMax ?? "∞"}</span>
          </summary>
          <div className="absolute left-0 top-12 z-10 grid w-64 gap-3 rounded-md border border-border bg-background p-4 shadow-lg">
            <label className="text-[10px] uppercase tracking-[0.14em]">
              Prix minimum
              <input
                type="number"
                min="0"
                value={prixMin ?? ""}
                onChange={(event) => {
                  const value = event.target.value ? Number(event.target.value) : undefined;
                  navigate({ search: { categorie, tri, q, genre, prixMin: value, prixMax } });
                }}
                className="mt-1 block min-h-10 w-full rounded-md border border-border bg-background px-3 text-sm normal-case tracking-normal"
                placeholder="0"
              />
            </label>
            <label className="text-[10px] uppercase tracking-[0.14em]">
              Prix maximum
              <input
                type="number"
                min="0"
                value={prixMax ?? ""}
                onChange={(event) => {
                  const value = event.target.value ? Number(event.target.value) : undefined;
                  navigate({ search: { categorie, tri, q, genre, prixMin, prixMax: value } });
                }}
                className="mt-1 block min-h-10 w-full rounded-md border border-border bg-background px-3 text-sm normal-case tracking-normal"
                placeholder="∞"
              />
            </label>
          </div>
        </details>
      </div>

      {liste.length === 0 ? (
        <div className="mt-16 border border-dashed border-border px-6 py-12 text-center">
          <p className="font-display text-2xl">Aucun article trouvé</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Modifiez vos filtres ou essayez une autre recherche.
          </p>
          <button
            type="button"
            onClick={() => navigate({ search: {} })}
            className="mt-6 rounded-full border border-foreground px-5 py-2 text-xs uppercase tracking-[0.16em] transition hover:bg-foreground hover:text-background"
          >
            Voir tout le catalogue
          </button>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
          {liste.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
