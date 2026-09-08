import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as createOrder } from "./db-BXxV0JWZ.mjs";
import { n as formatFCFA } from "./format-Dyzmdlju.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useCart } from "./CartContext-CFUtX5TJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/commander-DeIkt82R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Commander() {
	const { items, total, vider } = useCart();
	const [form, setForm] = (0, import_react.useState)({
		nom: "",
		telephone: "",
		adresse: ""
	});
	const [erreur, setErreur] = (0, import_react.useState)("");
	const [numeroCommande, setNumeroCommande] = (0, import_react.useState)(null);
	if (numeroCommande) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Merci !"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted-foreground",
				children: [
					"Votre commande ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: numeroCommande
					}),
					" est enregistrée avec le statut « en attente ». Nous vous appelons pour confirmer la livraison et le paiement."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/catalogue",
				className: "mt-8 inline-flex min-h-11 items-center rounded-md border border-foreground px-8 text-sm uppercase tracking-[0.18em]",
				children: "Continuer mes achats"
			})
		]
	});
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Votre panier est vide"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/catalogue",
			className: "mt-6 inline-block underline",
			children: "Voir le catalogue"
		})]
	});
	function valider(e) {
		e.preventDefault();
		if (!form.nom.trim() || !form.telephone.trim() || !form.adresse.trim()) {
			setErreur("Merci de remplir tous les champs.");
			return;
		}
		const order = createOrder({
			client_nom: form.nom.trim(),
			client_telephone: form.telephone.trim(),
			adresse: form.adresse.trim(),
			items: items.map((i) => ({
				product_id: i.product_id,
				quantite: i.quantite,
				prix_unitaire: i.prix_unitaire
			}))
		});
		vider();
		setNumeroCommande(order.id);
	}
	const champ = "mt-2 min-h-11 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Livraison"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-10 md:grid-cols-[1fr_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: valider,
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm",
						children: ["Nom complet", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: champ,
							value: form.nom,
							onChange: (e) => setForm({
								...form,
								nom: e.target.value
							}),
							autoComplete: "name"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm",
						children: ["Téléphone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: champ,
							value: form.telephone,
							onChange: (e) => setForm({
								...form,
								telephone: e.target.value
							}),
							inputMode: "tel",
							placeholder: "+229 ...",
							autoComplete: "tel"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm",
						children: ["Adresse de livraison (Cotonou / Bénin)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: `${champ} min-h-24`,
							value: form.adresse,
							onChange: (e) => setForm({
								...form,
								adresse: e.target.value
							}),
							placeholder: "Quartier, rue, repère..."
						})]
					}),
					erreur && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						children: erreur
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "min-h-12 w-full rounded-md bg-foreground text-sm uppercase tracking-[0.18em] text-background",
						children: "Valider la commande"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Aucun paiement en ligne : vous réglez à la livraison ou par contact direct."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit border border-border p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Récapitulatif"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3 text-sm",
						children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								i.nom,
								" × ",
								i.quantite
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "whitespace-nowrap",
								children: formatFCFA(i.prix_unitaire * i.quantite)
							})]
						}, i.product_id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex justify-between border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm uppercase tracking-[0.18em]",
							children: "Total"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl",
							children: formatFCFA(total)
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
export { Commander as component };
