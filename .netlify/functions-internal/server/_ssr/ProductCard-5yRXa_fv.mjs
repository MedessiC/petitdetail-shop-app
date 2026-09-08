import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as formatFCFA, r as prixPromotion } from "./format-Dyzmdlju.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-5yRXa_fv.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/produit/$id",
		params: { id: product.id },
		className: "group reveal block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-square overflow-hidden rounded-md bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.images[0],
					alt: product.nom,
					width: 1024,
					height: 1024,
					loading: "lazy",
					decoding: "async",
					sizes: "(max-width: 640px) 50vw, 25vw",
					className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 line-clamp-2 font-display text-lg leading-tight",
				children: product.nom
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-foreground",
						children: formatFCFA(prixPromotion(product.prix))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground line-through",
						children: formatFCFA(product.prix)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-foreground px-2 py-1 text-[10px] font-medium text-background",
						children: "-20%"
					})
				]
			})
		]
	});
}
//#endregion
export { ProductCard as t };
