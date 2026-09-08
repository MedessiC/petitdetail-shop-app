import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as formatFCFA } from "./format-Dyzmdlju.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useCart } from "./CartContext-CFUtX5TJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/panier-BnYIEBiE.js
var import_jsx_runtime = require_jsx_runtime();
function Panier() {
	const { items, total, changerQuantite, retirer } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Votre panier"
		}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Votre panier est vide."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/catalogue",
				className: "mt-6 inline-flex min-h-11 items-center rounded-md border border-foreground px-8 text-sm uppercase tracking-[0.18em]",
				children: "Voir le catalogue"
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 divide-y divide-border border-y border-border",
				children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: i.image,
							alt: i.nom,
							width: 200,
							height: 200,
							loading: "lazy",
							className: "h-24 w-24 shrink-0 object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg",
									children: i.nom
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: formatFCFA(i.prix_unitaire)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center rounded-md border border-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "Diminuer la quantité",
												onClick: () => changerQuantite(i.product_id, i.quantite - 1),
												className: "h-11 w-11",
												children: "−"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-8 text-center",
												children: i.quantite
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "Augmenter la quantité",
												onClick: () => changerQuantite(i.product_id, i.quantite + 1),
												className: "h-11 w-11",
												children: "+"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => retirer(i.product_id),
										className: "min-h-11 text-sm text-muted-foreground underline",
										children: "Retirer"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-nowrap",
							children: formatFCFA(i.prix_unitaire * i.quantite)
						})
					]
				}, i.product_id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm uppercase tracking-[0.18em]",
					children: "Total"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-3xl",
					children: formatFCFA(total)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/commander",
				className: "mt-8 flex min-h-12 w-full items-center justify-center rounded-md bg-foreground text-sm uppercase tracking-[0.18em] text-background",
				children: "Commander"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-xs text-muted-foreground",
				children: "Paiement à la livraison ou par contact direct — aucun paiement en ligne."
			})
		] })]
	});
}
//#endregion
export { Panier as component };
