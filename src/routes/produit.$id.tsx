import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { useDb } from "@/data/db";
import { formatFCFA } from "@/lib/format";

export const Route = createFileRoute("/produit/$id")({
  head: () => ({
    meta: [
      { title: "Fiche produit — petitdétail." },
      {
        name: "description",
        content: "Détail d'un bijou petitdétail : description, prix en FCFA et ajout au panier.",
      },
      { property: "og:title", content: "Fiche produit — petitdétail." },
      { property: "og:description", content: "Un bijou petitdétail, à Cotonou." },
    ],
  }),
  component: FicheProduit,
});

function FicheProduit() {
  const { id } = Route.useParams();
  const { products, categories } = useDb();
  const { ajouter } = useCart();
  const [quantite, setQuantite] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl">Produit introuvable</h1>
        <Link to="/catalogue" className="mt-6 inline-block underline">
          Retour au catalogue
        </Link>
      </div>
    );
  }

  const categorie = categories.find((c) => c.id === product.category_id);
  const similaires = products
    .filter((p) => p.actif && p.category_id === product.category_id && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="grid gap-4">
          {product.images.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-muted">
              <img
                src={src}
                alt={`${product.nom} — visuel ${i + 1}`}
                width={1024}
                height={1024}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="md:pt-6">
          {categorie && (
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              {categorie.nom}
            </p>
          )}
          <h1 className="mt-3 font-display text-4xl">{product.nom}</h1>
          <p className="mt-4 text-2xl">{formatFCFA(product.prix)}</p>
          <p className="mt-6 leading-relaxed text-muted-foreground">{product.description}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            {product.stock > 0 ? `En stock (${product.stock} pièces)` : "Rupture de stock"}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-border">
              <button
                type="button"
                aria-label="Diminuer la quantité"
                onClick={() => setQuantite((q) => Math.max(1, q - 1))}
                className="h-11 w-11 text-lg"
              >
                −
              </button>
              <span className="w-10 text-center">{quantite}</span>
              <button
                type="button"
                aria-label="Augmenter la quantité"
                onClick={() => setQuantite((q) => q + 1)}
                className="h-11 w-11 text-lg"
              >
                +
              </button>
            </div>

            <button
              type="button"
              disabled={product.stock === 0}
              onClick={() => {
                ajouter(
                  {
                    product_id: product.id,
                    nom: product.nom,
                    prix_unitaire: product.prix,
                    image: product.images[0],
                  },
                  quantite,
                );
                toast.success("Ajouté au panier");
              }}
              className="min-h-11 flex-1 bg-foreground px-6 text-sm uppercase tracking-[0.18em] text-background transition hover:opacity-85 disabled:opacity-40"
            >
              Ajouter au panier
            </button>
          </div>

          <Link to="/panier" className="mt-4 inline-block text-sm underline">
            Voir le panier
          </Link>
        </div>
      </div>

      {similaires.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl">Vous aimerez aussi</h2>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {similaires.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
