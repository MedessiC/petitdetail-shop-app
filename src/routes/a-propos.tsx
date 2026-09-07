import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — petitdétail." },
      {
        name: "description",
        content:
          "petitdétail. est une marque béninoise d'accessoires : bracelets, colliers et bagues choisis avec soin à Cotonou.",
      },
      { property: "og:title", content: "À propos — petitdétail." },
      { property: "og:description", content: "Une marque d'accessoires née à Cotonou, Bénin." },
    ],
  }),
  component: APropos,
});

function APropos() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl">À propos</h1>
      <p className="mt-8 leading-relaxed text-muted-foreground">
        petitdétail. est née à Cotonou d'une conviction simple : un accessoire bien choisi change
        toute une tenue. Nous sélectionnons des bracelets, colliers et bagues à la finition soignée,
        pensés pour se porter tous les jours.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Chaque pièce est vérifiée à la main avant l'envoi. Les commandes sont livrées à Cotonou et
        dans tout le Bénin, avec un paiement à la livraison ou par contact direct.
      </p>
      <p className="mt-10 text-[11px] uppercase tracking-[0.28em]">
        qualité – originalité – charme
      </p>
    </div>
  );
}
