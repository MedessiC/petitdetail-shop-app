//#region node_modules/.nitro/vite/services/ssr/assets/format-Dyzmdlju.js
/** Formate un montant en FCFA, ex. 15000 -> "15 000 FCFA". */
function formatFCFA(montant) {
	return `${Math.round(montant).toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ")} FCFA`;
}
function prixPromotion(montant, remise = 20) {
	return Math.round(montant * (1 - remise / 100));
}
/** Formate une date ISO en date française courte. */
function formatDate(iso) {
	return new Date(iso).toLocaleDateString("fr-FR", {
		day: "2-digit",
		month: "long",
		year: "numeric"
	});
}
//#endregion
export { formatFCFA as n, prixPromotion as r, formatDate as t };
