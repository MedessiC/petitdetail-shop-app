import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/produit._id-vQfDGnSk.js
var $$splitComponentImporter = () => import("./produit._id-CEE8ER3l.mjs");
var Route = createFileRoute("/produit/$id")({
	head: () => ({ meta: [
		{ title: "Fiche produit — petitdétail." },
		{
			name: "description",
			content: "Détail d'un bijou petitdétail : description, prix en FCFA et ajout au panier."
		},
		{
			property: "og:title",
			content: "Fiche produit — petitdétail."
		},
		{
			property: "og:description",
			content: "Un bijou petitdétail, à Cotonou."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
