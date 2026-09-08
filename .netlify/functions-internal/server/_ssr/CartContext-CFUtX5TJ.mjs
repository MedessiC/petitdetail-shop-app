import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as trackCartAdd } from "./db-BXxV0JWZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CartContext-CFUtX5TJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Panier géré entièrement côté client (React Context + localStorage).
* Aucune persistance serveur : à brancher plus tard sur Supabase si besoin.
*/
var CartContext = (0, import_react.createContext)(null);
var STORAGE_KEY = "petitdetail.cart.v1";
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			if (raw) setItems(JSON.parse(raw));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
		} catch {}
	}, [items]);
	const ajouter = (0, import_react.useCallback)((item, quantite = 1) => {
		setItems((prev) => {
			if (prev.find((i) => i.product_id === item.product_id)) return prev.map((i) => i.product_id === item.product_id ? {
				...i,
				quantite: i.quantite + quantite
			} : i);
			return [...prev, {
				...item,
				quantite
			}];
		});
		trackCartAdd(item.product_id, quantite);
	}, []);
	const changerQuantite = (0, import_react.useCallback)((product_id, quantite) => {
		setItems((prev) => quantite <= 0 ? prev.filter((i) => i.product_id !== product_id) : prev.map((i) => i.product_id === product_id ? {
			...i,
			quantite
		} : i));
	}, []);
	const retirer = (0, import_react.useCallback)((product_id) => {
		setItems((prev) => prev.filter((i) => i.product_id !== product_id));
	}, []);
	const vider = (0, import_react.useCallback)(() => setItems([]), []);
	const value = (0, import_react.useMemo)(() => ({
		items,
		total: items.reduce((s, i) => s + i.prix_unitaire * i.quantite, 0),
		nombreArticles: items.reduce((s, i) => s + i.quantite, 0),
		ajouter,
		changerQuantite,
		retirer,
		vider
	}), [
		items,
		ajouter,
		changerQuantite,
		retirer,
		vider
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value,
		children
	});
}
function useCart() {
	const ctx = (0, import_react.useContext)(CartContext);
	if (!ctx) throw new Error("useCart doit être utilisé dans un CartProvider");
	return ctx;
}
//#endregion
export { useCart as n, CartProvider as t };
