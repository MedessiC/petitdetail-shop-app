/** Formate un montant en FCFA, ex. 15000 -> "15 000 FCFA". */
export function formatFCFA(montant: number): string {
  return `${Math.round(montant).toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ")} FCFA`;
}

export function prixPromotion(montant: number, remise = 20): number {
  return Math.round(montant * (1 - remise / 100));
}

/** Formate une date ISO en date française courte. */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
