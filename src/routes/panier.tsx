import { Link, createFileRoute } from "@tanstack/react-router";

import { useCart } from "@/context/CartContext";
import { formatFCFA } from "@/lib/format";

export const Route = createFileRoute("/panier")({
  head: () => ({
    meta: [
      { title: "Panier — petitdétail." },
      {
        name: "description",
        content: "Vérifiez vos articles petitdétail avant de passer commande à Cotonou.",
      },
      { property: "og:title", content: "Panier — petitdétail." },
      { property: "og:description", content: "Vos bijoux sélectionnés chez petitdétail." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Panier,
});

function Panier() {
  const { items, total, changerQuantite, retirer } = useCart();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display text-4xl">Votre panier</h1>

      {items.length === 0 ? (
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Votre panier est vide.</p>
          <Link
            to="/catalogue"
            className="mt-6 inline-flex min-h-11 items-center rounded-md border border-foreground px-8 text-sm uppercase tracking-[0.18em]"
          >
            Voir le catalogue
          </Link>
        </div>
      ) : (
        <>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {items.map((i) => (
              <li key={i.product_id} className="flex gap-4 py-5">
                <img
                  src={i.image}
                  alt={i.nom}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="h-24 w-24 shrink-0 object-cover"
                />
                <div className="flex-1">
                  <p className="font-display text-lg">{i.nom}</p>
                  <p className="text-sm text-muted-foreground">{formatFCFA(i.prix_unitaire)}</p>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="flex items-center rounded-md border border-border">
                      <button
                        type="button"
                        aria-label="Diminuer la quantité"
                        onClick={() => changerQuantite(i.product_id, i.quantite - 1)}
                        className="h-11 w-11"
                      >
                        −
                      </button>
                      <span className="w-8 text-center">{i.quantite}</span>
                      <button
                        type="button"
                        aria-label="Augmenter la quantité"
                        onClick={() => changerQuantite(i.product_id, i.quantite + 1)}
                        className="h-11 w-11"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => retirer(i.product_id)}
                      className="min-h-11 text-sm text-muted-foreground underline"
                    >
                      Retirer
                    </button>
                  </div>
                </div>
                <p className="whitespace-nowrap">{formatFCFA(i.prix_unitaire * i.quantite)}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.18em]">Total</span>
            <span className="font-display text-3xl">{formatFCFA(total)}</span>
          </div>

          <Link
            to="/commander"
            className="mt-8 flex min-h-12 w-full items-center justify-center rounded-md bg-foreground text-sm uppercase tracking-[0.18em] text-background"
          >
            Commander
          </Link>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Paiement à la livraison ou par contact direct — aucun paiement en ligne.
          </p>
        </>
      )}
    </div>
  );
}
