import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/db-BXxV0JWZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var colliers_default = "/assets/colliers-DnltI9zB.jpg";
var bracelets_default = "/assets/bracelets-C40To8vs.jpg";
var bagues_default = "/assets/bagues-B7kOHYoE.jpg";
/**
* Données mockup initiales (équivalent d'un "seed" de base de données).
* Ces enregistrements ne persistent pas côté serveur : ils sont chargés en
* mémoire puis, si disponible, conservés dans le localStorage du navigateur.
*/
var IMAGES = {
	colliers: colliers_default,
	bracelets: bracelets_default,
	bagues: bagues_default
};
var seedCategories = [
	{
		id: "cat-1",
		nom: "Colliers",
		slug: "colliers"
	},
	{
		id: "cat-2",
		nom: "Bracelets",
		slug: "bracelets"
	},
	{
		id: "cat-3",
		nom: "Bagues",
		slug: "bagues"
	}
];
var seedProducts = [
	{
		id: "prod-1",
		nom: "Collier Perle Douce",
		description: "Une chaîne fine dorée rehaussée d'une perle unique. Le détail discret qui illumine une tenue du quotidien comme une soirée à Cotonou.",
		prix: 15e3,
		category_id: "cat-1",
		genre: "femme",
		images: [colliers_default],
		stock: 12,
		actif: true
	},
	{
		id: "prod-2",
		nom: "Collier Chaîne Maille",
		description: "Maille ovale dorée, longueur ajustable. Se porte seul ou superposé avec un collier plus court.",
		prix: 18500,
		category_id: "cat-1",
		genre: "homme",
		images: [colliers_default],
		stock: 8,
		actif: true
	},
	{
		id: "prod-3",
		nom: "Bracelet Perles Nacrées",
		description: "Perles nacrées et intercalaires dorés montés sur fil élastique. Confort parfait au poignet.",
		prix: 9500,
		category_id: "cat-2",
		genre: "mixte",
		images: [bracelets_default],
		stock: 20,
		actif: true
	},
	{
		id: "prod-4",
		nom: "Duo Bracelets Charme",
		description: "Deux bracelets à porter ensemble : perles claires et fermoir aimanté doré. Idéal en cadeau.",
		prix: 17e3,
		category_id: "cat-2",
		genre: "femme",
		images: [bracelets_default],
		stock: 10,
		actif: true
	},
	{
		id: "prod-5",
		nom: "Bague Anneau Fin",
		description: "Anneau lisse doré, silhouette minimale. Se superpose facilement avec d'autres bagues.",
		prix: 7500,
		category_id: "cat-3",
		genre: "femme",
		images: [bagues_default],
		stock: 25,
		actif: true
	},
	{
		id: "prod-6",
		nom: "Duo Bagues Superposées",
		description: "Deux anneaux fins dorés pensés pour être portés ensemble. L'élégance sans effort.",
		prix: 12e3,
		category_id: "cat-3",
		genre: "mixte",
		images: [bagues_default],
		stock: 15,
		actif: true
	}
];
var seedOrders = [{
	id: "ord-1",
	client_nom: "Aïcha Dossou",
	client_telephone: "+229 97 12 34 56",
	adresse: "Quartier Fidjrossè, Cotonou",
	statut: "en attente",
	total: 24500,
	cree_le: "2026-08-28T10:15:00.000Z"
}, {
	id: "ord-2",
	client_nom: "Marc Agbodjan",
	client_telephone: "+229 96 88 22 10",
	adresse: "Haie Vive, rue 12, Cotonou",
	statut: "livrée",
	total: 12e3,
	cree_le: "2026-08-30T16:40:00.000Z"
}];
var seedOrderItems = [
	{
		id: "oi-1",
		order_id: "ord-1",
		product_id: "prod-1",
		quantite: 1,
		prix_unitaire: 15e3
	},
	{
		id: "oi-2",
		order_id: "ord-1",
		product_id: "prod-3",
		quantite: 1,
		prix_unitaire: 9500
	},
	{
		id: "oi-3",
		order_id: "ord-2",
		product_id: "prod-6",
		quantite: 1,
		prix_unitaire: 12e3
	}
];
/**
* COUCHE DONNÉES (MOCK).
*
* ⚠️ Aucune de ces opérations n'écrit dans une vraie base de données.
* L'état vit en mémoire et est copié dans le localStorage du navigateur pour
* survivre aux rechargements. Les modifications faites depuis /admin sont donc
* locales à l'appareil.
*
* Migration Supabase : garder exactement les mêmes fonctions exportées et
* remplacer leur corps par des requêtes `supabase.from(...)`.
*/
var STORAGE_KEY = "petitdetail.db.v1";
function initialDb() {
	return {
		products: seedProducts,
		categories: seedCategories,
		orders: seedOrders,
		order_items: seedOrderItems,
		cart_adds: {}
	};
}
var db = initialDb();
var hydrated = false;
var listeners = /* @__PURE__ */ new Set();
function load() {
	if (hydrated || typeof window === "undefined") return;
	hydrated = true;
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (raw) db = {
			...initialDb(),
			...JSON.parse(raw)
		};
	} catch {}
}
function commit(next) {
	db = next;
	if (typeof window !== "undefined") try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
	} catch {}
	listeners.forEach((l) => l());
}
function subscribe(listener) {
	load();
	listeners.add(listener);
	return () => listeners.delete(listener);
}
var emptyDb = initialDb();
/** Hook de lecture réactive de la base mockup. */
function useDb() {
	return (0, import_react.useSyncExternalStore)(subscribe, () => {
		load();
		return db;
	}, () => emptyDb);
}
function getDb() {
	load();
	return db;
}
var uid = (prefix) => `${prefix}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
function createProduct(input) {
	const product = {
		...input,
		id: uid("prod")
	};
	commit({
		...getDb(),
		products: [...getDb().products, product]
	});
	return product;
}
function updateProduct(id, patch) {
	commit({
		...getDb(),
		products: getDb().products.map((p) => p.id === id ? {
			...p,
			...patch
		} : p)
	});
}
function deleteProduct(id) {
	commit({
		...getDb(),
		products: getDb().products.filter((p) => p.id !== id)
	});
}
function createCategory(input) {
	const category = {
		...input,
		id: uid("cat")
	};
	commit({
		...getDb(),
		categories: [...getDb().categories, category]
	});
	return category;
}
function updateCategory(id, patch) {
	commit({
		...getDb(),
		categories: getDb().categories.map((c) => c.id === id ? {
			...c,
			...patch
		} : c)
	});
}
function deleteCategory(id) {
	commit({
		...getDb(),
		categories: getDb().categories.filter((c) => c.id !== id)
	});
}
function createOrder(input) {
	const total = input.items.reduce((s, i) => s + i.prix_unitaire * i.quantite, 0);
	const order = {
		id: uid("ord"),
		client_nom: input.client_nom,
		client_telephone: input.client_telephone,
		adresse: input.adresse,
		statut: "en attente",
		total,
		cree_le: (/* @__PURE__ */ new Date()).toISOString()
	};
	const items = input.items.map((i) => ({
		...i,
		id: uid("oi"),
		order_id: order.id
	}));
	const current = getDb();
	commit({
		...current,
		orders: [order, ...current.orders],
		order_items: [...current.order_items, ...items]
	});
	return order;
}
function updateOrderStatus(id, statut) {
	commit({
		...getDb(),
		orders: getDb().orders.map((o) => o.id === id ? {
			...o,
			statut
		} : o)
	});
}
function trackCartAdd(product_id, quantite = 1) {
	const current = getDb();
	commit({
		...current,
		cart_adds: {
			...current.cart_adds,
			[product_id]: (current.cart_adds[product_id] ?? 0) + quantite
		}
	});
}
//#endregion
export { deleteCategory as a, updateCategory as c, useDb as d, createProduct as i, updateOrderStatus as l, createCategory as n, deleteProduct as o, createOrder as r, trackCartAdd as s, IMAGES as t, updateProduct as u };
