import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as useDb } from "./db-BXxV0JWZ.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./catalogue-Cnhkt-sX.mjs";
import { t as ProductCard } from "./ProductCard-5yRXa_fv.mjs";
import { r as Search } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalogue-C-lV-In4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Catalogue() {
	const { categorie = "tous", tri = "recent", q = "", genre = "tous", prixMin, prixMax } = Route.useSearch();
	const navigate = useNavigate({ from: "/catalogue" });
	const { products, categories } = useDb();
	const [recherche, setRecherche] = (0, import_react.useState)(q);
	(0, import_react.useEffect)(() => {
		setRecherche(q);
	}, [q]);
	(0, import_react.useEffect)(() => {
		const terme = recherche.trim();
		if (terme === q) return;
		const timeout = window.setTimeout(() => {
			navigate({ search: {
				categorie,
				tri,
				q: terme,
				genre,
				prixMin,
				prixMax
			} });
		}, 350);
		return () => window.clearTimeout(timeout);
	}, [
		categorie,
		genre,
		navigate,
		prixMax,
		prixMin,
		q,
		recherche,
		tri
	]);
	function lancerRecherche(event) {
		event.preventDefault();
		navigate({ search: {
			categorie,
			tri,
			q: recherche.trim(),
			genre,
			prixMin,
			prixMax
		} });
	}
	const filtres = [{
		slug: "tous",
		nom: "Tous"
	}, ...categories.map((c) => ({
		slug: c.slug,
		nom: c.nom
	}))];
	const genres = [
		{
			slug: "tous",
			nom: "Tous"
		},
		{
			slug: "femme",
			nom: "Femme"
		},
		{
			slug: "homme",
			nom: "Homme"
		},
		{
			slug: "mixte",
			nom: "Mixte"
		}
	];
	const filtresActifs = (categorie !== "tous" ? 1 : 0) + (genre !== "tous" ? 1 : 0) + (prixMin !== void 0 ? 1 : 0) + (prixMax !== void 0 ? 1 : 0) + (q.trim() ? 1 : 0);
	const categoryId = categories.find((c) => c.slug === categorie)?.id;
	let liste = products.filter((p) => p.actif);
	const rechercheNormalisee = q.trim().toLocaleLowerCase();
	if (rechercheNormalisee) liste = liste.filter((p) => p.nom.toLocaleLowerCase().includes(rechercheNormalisee) || p.description.toLocaleLowerCase().includes(rechercheNormalisee));
	if (categoryId) liste = liste.filter((p) => p.category_id === categoryId);
	if (genre !== "tous") liste = liste.filter((p) => p.genre === genre);
	if (prixMin !== void 0) liste = liste.filter((p) => p.prix >= prixMin);
	if (prixMax !== void 0) liste = liste.filter((p) => p.prix <= prixMax);
	if (tri === "prix-asc") liste = [...liste].sort((a, b) => a.prix - b.prix);
	if (tri === "prix-desc") liste = [...liste].sort((a, b) => b.prix - a.prix);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Catalogue"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit: lancerRecherche,
				className: "mt-6 max-w-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-12 items-center rounded-lg border border-border px-4 shadow-sm transition focus-within:border-foreground focus-within:ring-2 focus-within:ring-foreground/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						size: 18,
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "search",
						value: recherche,
						onChange: (event) => setRecherche(event.target.value),
						placeholder: "Rechercher un collier, une bague...",
						"aria-label": "Rechercher dans le catalogue",
						className: "min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap items-center justify-between gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: liste.length
							}),
							" article",
							liste.length === 1 ? "" : "s",
							filtresActifs > 0 ? " correspondant à vos filtres" : " disponibles"
						]
					}), filtresActifs > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => navigate({ search: {} }),
						className: "text-xs uppercase tracking-[0.16em] underline underline-offset-4 transition hover:opacity-60",
						children: "Réinitialiser"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-end gap-2 border-b border-border pb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-1 flex-col gap-1 text-[10px] uppercase tracking-[0.14em] sm:min-w-36",
						children: ["Catégorie", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: categorie,
							onChange: (event) => navigate({ search: {
								categorie: event.target.value,
								tri,
								q,
								genre,
								prixMin,
								prixMax
							} }),
							className: "min-h-10 rounded-md border border-border bg-background px-3 text-sm normal-case tracking-normal",
							children: filtres.map((filter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: filter.slug,
								children: filter.nom
							}, filter.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-1 flex-col gap-1 text-[10px] uppercase tracking-[0.14em] sm:min-w-32",
						children: ["Public", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: genre,
							onChange: (event) => navigate({ search: {
								categorie,
								tri,
								q,
								genre: event.target.value,
								prixMin,
								prixMax
							} }),
							className: "min-h-10 rounded-md border border-border bg-background px-3 text-sm normal-case tracking-normal",
							children: genres.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item.slug,
								children: item.nom
							}, item.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-1 flex-col gap-1 text-[10px] uppercase tracking-[0.14em] sm:min-w-36",
						children: ["Trier", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: tri,
							onChange: (event) => navigate({ search: {
								categorie,
								tri: event.target.value,
								q,
								genre,
								prixMin,
								prixMax
							} }),
							className: "min-h-10 rounded-md border border-border bg-background px-3 text-sm normal-case tracking-normal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "recent",
									children: "Nouveautés"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "prix-asc",
									children: "Prix croissant"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "prix-desc",
									children: "Prix décroissant"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "relative flex-1 sm:min-w-40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex min-h-10 cursor-pointer list-none items-center justify-between rounded-md border border-border px-3 text-[10px] uppercase tracking-[0.14em]",
							children: ["Prix", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [
									prixMin ?? 0,
									" – ",
									prixMax ?? "∞"
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute left-0 top-12 z-10 grid w-64 gap-3 rounded-md border border-border bg-background p-4 shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-[10px] uppercase tracking-[0.14em]",
								children: ["Prix minimum", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: "0",
									value: prixMin ?? "",
									onChange: (event) => {
										const value = event.target.value ? Number(event.target.value) : void 0;
										navigate({ search: {
											categorie,
											tri,
											q,
											genre,
											prixMin: value,
											prixMax
										} });
									},
									className: "mt-1 block min-h-10 w-full rounded-md border border-border bg-background px-3 text-sm normal-case tracking-normal",
									placeholder: "0"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-[10px] uppercase tracking-[0.14em]",
								children: ["Prix maximum", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: "0",
									value: prixMax ?? "",
									onChange: (event) => {
										const value = event.target.value ? Number(event.target.value) : void 0;
										navigate({ search: {
											categorie,
											tri,
											q,
											genre,
											prixMin,
											prixMax: value
										} });
									},
									className: "mt-1 block min-h-10 w-full rounded-md border border-border bg-background px-3 text-sm normal-case tracking-normal",
									placeholder: "∞"
								})]
							})]
						})]
					})
				]
			}),
			liste.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 border border-dashed border-border px-6 py-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: "Aucun article trouvé"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Modifiez vos filtres ou essayez une autre recherche."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => navigate({ search: {} }),
						className: "mt-6 rounded-full border border-foreground px-5 py-2 text-xs uppercase tracking-[0.16em] transition hover:bg-foreground hover:text-background",
						children: "Voir tout le catalogue"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4",
				children: liste.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})
		]
	});
}
//#endregion
export { Catalogue as component };
