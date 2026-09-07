import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { useCart } from "@/context/CartContext";
import { createOrder } from "@/data/db";
import { formatFCFA } from "@/lib/format";

export const Route = createFileRoute("/commander")({
  head: () => ({
    meta: [
      { title: "Commander — petitdétail." },
      {
        name: "description",
        content:
          "Renseignez votre livraison à Cotonou et validez votre commande petitdétail. Paiement hors ligne.",
      },
      { property: "og:title", content: "Commander — petitdétail." },
      { property: "og:description", content: "Livraison à Cotonou, paiement à la réception." },
    ],
  }),
  component: Commander,
});

function Commander() {
  const { items, total, vider } = useCart();
  const [form, setForm] = useState({ nom: "", telephone: "", adresse: "" });
  const [erreur, setErreur] = useState("");
  const [numeroCommande, setNumeroCommande] = useState<string | null>(null);

  if (numeroCommande) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Merci !</h1>
        <p className="mt-4 text-muted-foreground">
          Votre commande <span className="text-foreground">{numeroCommande}</span> est enregistrée
          avec le statut « en attente ». Nous vous appelons pour confirmer la livraison et le
          paiement.
        </p>
        <Link
          to="/catalogue"
          className="mt-8 inline-flex min-h-11 items-center border border-foreground px-8 text-sm uppercase tracking-[0.18em]"
        >
          Continuer mes achats
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl">Votre panier est vide</h1>
        <Link to="/catalogue" className="mt-6 inline-block underline">
          Voir le catalogue
        </Link>
      </div>
    );
  }

  function valider(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nom.trim() || !form.telephone.trim() || !form.adresse.trim()) {
      setErreur("Merci de remplir tous les champs.");
      return;
    }
    // NOTE : la commande est écrite dans la base mockup (mémoire + localStorage).
    // À remplacer par un insert Supabase lors de la migration.
    const order = createOrder({
      client_nom: form.nom.trim(),
      client_telephone: form.telephone.trim(),
      adresse: form.adresse.trim(),
      items: items.map((i) => ({
        product_id: i.product_id,
        quantite: i.quantite,
        prix_unitaire: i.prix_unitaire,
      })),
    });
    vider();
    setNumeroCommande(order.id);
  }

  const champ =
    "mt-2 min-h-11 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display text-4xl">Livraison</h1>

      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_320px]">
        <form onSubmit={valider} className="space-y-5">
          <label className="block text-sm">
            Nom complet
            <input
              className={champ}
              value={form.nom}
              onChange={(e) => setForm({ ...form, nom: e.target.value })}
              autoComplete="name"
            />
          </label>
          <label className="block text-sm">
            Téléphone
            <input
              className={champ}
              value={form.telephone}
              onChange={(e) => setForm({ ...form, telephone: e.target.value })}
              inputMode="tel"
              placeholder="+229 ..."
              autoComplete="tel"
            />
          </label>
          <label className="block text-sm">
            Adresse de livraison (Cotonou / Bénin)
            <textarea
              className={`${champ} min-h-24`}
              value={form.adresse}
              onChange={(e) => setForm({ ...form, adresse: e.target.value })}
              placeholder="Quartier, rue, repère..."
            />
          </label>

          {erreur && <p className="text-sm text-destructive">{erreur}</p>}

          <button
            type="submit"
            className="min-h-12 w-full bg-foreground text-sm uppercase tracking-[0.18em] text-background"
          >
            Valider la commande
          </button>
          <p className="text-xs text-muted-foreground">
            Aucun paiement en ligne : vous réglez à la livraison ou par contact direct.
          </p>
        </form>

        <aside className="h-fit border border-border p-5">
          <h2 className="font-display text-xl">Récapitulatif</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map((i) => (
              <li key={i.product_id} className="flex justify-between gap-3">
                <span>
                  {i.nom} × {i.quantite}
                </span>
                <span className="whitespace-nowrap">{formatFCFA(i.prix_unitaire * i.quantite)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex justify-between border-t border-border pt-4">
            <span className="text-sm uppercase tracking-[0.18em]">Total</span>
            <span className="font-display text-2xl">{formatFCFA(total)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
