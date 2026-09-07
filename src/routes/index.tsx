import { Link, createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { useDb } from "@/data/db";
import { IMAGES } from "@/data/seed";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "petitdétail. — bijoux et accessoires à Cotonou" },
      {
        name: "description",
        content:
          "Bracelets, colliers et bagues sélectionnés à Cotonou. Le petit détail qui compte pour votre look. Livraison au Bénin, paiement à la livraison.",
      },
      { property: "og:title", content: "petitdétail. — bijoux et accessoires à Cotonou" },
      {
        property: "og:description",
        content: "Bracelets, colliers et bagues sélectionnés à Cotonou, Bénin.",
      },
    ],
  }),
  component: Accueil,
});

const VISUELS: Record<string, string> = {
  colliers: IMAGES.colliers,
  bracelets: IMAGES.bracelets,
  bagues: IMAGES.bagues,
};

function Accueil() {
  const { products, categories } = useDb();
  const enAvant = products.filter((p) => p.actif).slice(0, 4);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center font-display text-3xl">Nos catégories</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/catalogue"
              search={{ categorie: c.slug, tri: "recent" as const }}
              className="group block"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={VISUELS[c.slug] ?? IMAGES.colliers}
                  alt={c.nom}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-center text-sm uppercase tracking-[0.18em]">{c.nom}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <h2 className="text-center font-display text-3xl">Coups de cœur</h2>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
          {enAvant.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/catalogue"
            className="inline-flex min-h-11 items-center border border-foreground px-8 text-sm uppercase tracking-[0.18em] transition hover:bg-foreground hover:text-background"
          >
            Voir tout le catalogue
          </Link>
        </div>
      </section>
    </>
  );
}
