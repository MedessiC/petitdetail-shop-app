import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as useDb } from "./db-BXxV0JWZ.mjs";
import { n as formatFCFA, r as prixPromotion } from "./format-Dyzmdlju.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ProductCard } from "./ProductCard-5yRXa_fv.mjs";
import { n as useCart } from "./CartContext-CFUtX5TJ.mjs";
import { t as Route } from "./produit._id-vQfDGnSk.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/produit._id-CEE8ER3l.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FicheProduit() {
	const { id } = Route.useParams();
	const { products, categories } = useDb();
	const { ajouter } = useCart();
	const [quantite, setQuantite] = (0, import_react.useState)(1);
	const product = products.find((p) => p.id === id);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Produit introuvable"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/catalogue",
			className: "mt-6 inline-block underline",
			children: "Retour au catalogue"
		})]
	});
	const categorie = categories.find((c) => c.id === product.category_id);
	const similaires = products.filter((p) => p.actif && p.category_id === product.category_id && p.id !== product.id).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4",
				children: product.images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-square overflow-hidden bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: `${product.nom} — visuel ${i + 1}`,
						width: 1024,
						height: 1024,
						loading: i === 0 ? "eager" : "lazy",
						decoding: "async",
						sizes: "(max-width: 768px) 100vw, 50vw",
						className: "h-full w-full object-cover"
					})
				}, i))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:pt-6",
				children: [
					categorie && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.28em] text-muted-foreground",
						children: categorie.nom
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl",
						children: product.nom
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl font-semibold",
								children: formatFCFA(prixPromotion(product.prix))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground line-through",
								children: formatFCFA(product.prix)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-foreground px-2 py-1 text-[10px] font-medium text-background",
								children: "-20%"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 leading-relaxed text-muted-foreground",
						children: product.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: product.stock > 0 ? `En stock (${product.stock} pièces)` : "Rupture de stock"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center rounded-md border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Diminuer la quantité",
									onClick: () => setQuantite((q) => Math.max(1, q - 1)),
									className: "h-11 w-11 text-lg",
									children: "−"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-10 text-center",
									children: quantite
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Augmenter la quantité",
									onClick: () => setQuantite((q) => q + 1),
									className: "h-11 w-11 text-lg",
									children: "+"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: product.stock === 0,
							onClick: () => {
								ajouter({
									product_id: product.id,
									nom: product.nom,
									prix_unitaire: prixPromotion(product.prix),
									image: product.images[0] ?? ""
								}, quantite);
								toast.success("Ajouté au panier");
							},
							className: "min-h-11 flex-1 rounded-md bg-foreground px-6 text-sm uppercase tracking-[0.18em] text-background transition hover:opacity-85 disabled:opacity-40",
							children: "Ajouter au panier"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/panier",
						className: "mt-4 inline-block text-sm underline",
						children: "Voir le panier"
					})
				]
			})]
		}), similaires.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Vous aimerez aussi"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4",
				children: similaires.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})]
		})]
	});
}
//#endregion
export { FicheProduit as component };
