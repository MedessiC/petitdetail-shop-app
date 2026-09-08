import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalogue-Cnhkt-sX.js
var $$splitComponentImporter = () => import("./catalogue-C-lV-In4.mjs");
function parsePrix(value) {
	const prix = typeof value === "number" ? value : Number(value);
	return Number.isFinite(prix) && prix >= 0 ? prix : void 0;
}
var Route = createFileRoute("/catalogue")({
	validateSearch: (search) => ({
		categorie: typeof search["categorie"] === "string" ? search["categorie"] : "tous",
		tri: [
			"recent",
			"prix-asc",
			"prix-desc"
		].includes(search["tri"]) ? search["tri"] : "recent",
		q: typeof search["q"] === "string" ? search["q"] : "",
		genre: [
			"tous",
			"homme",
			"femme",
			"mixte"
		].includes(search["genre"]) ? search["genre"] : "tous",
		prixMin: parsePrix(search["prixMin"]),
		prixMax: parsePrix(search["prixMax"])
	}),
	head: () => ({ meta: [
		{ title: "Catalogue — petitdétail." },
		{
			name: "description",
			content: "Découvrez tous les colliers, bracelets et bagues petitdétail. Filtrez par catégorie et triez par prix."
		},
		{
			property: "og:title",
			content: "Catalogue — petitdétail."
		},
		{
			property: "og:description",
			content: "Colliers, bracelets et bagues petitdétail à Cotonou."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
