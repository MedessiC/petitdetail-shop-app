import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as useDb, t as IMAGES } from "./db-BXxV0JWZ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ProductCard } from "./ProductCard-5yRXa_fv.mjs";
import { t as hero_image1_default } from "./hero-image1-BsSvHPx8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQLDNvht.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroImages = [
	hero_image1_default,
	"/assets/hero-image2-VBeo9GuS.png",
	"/assets/hero-image3-DoWQKBGS.png"
];
function HeroVisual() {
	const [imageIndex, setImageIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const interval = window.setInterval(() => {
			setImageIndex((current) => (current + 1) % heroImages.length);
		}, 4500);
		return () => window.clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative aspect-square w-full overflow-hidden rounded-md",
		children: heroImages.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: index === imageIndex ? "Sélection de bijoux petitdétail" : "",
			width: 1024,
			height: 1024,
			"aria-hidden": index !== imageIndex,
			className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${index === imageIndex ? "opacity-100" : "opacity-0"}`
		}, image))
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-black text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 text-center sm:py-28 md:grid-cols-2 md:gap-16 md:text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "reveal font-display text-4xl leading-tight sm:text-6xl",
					children: ["Le petit détail qui compte", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "pour votre look"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "reveal mx-auto mt-6 w-40 sm:w-48 md:hidden",
					style: { animationDelay: "120ms" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroVisual, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "reveal mx-auto mt-6 max-w-xl text-sm text-white/70 sm:text-base md:mx-0",
					style: { animationDelay: "240ms" },
					children: "Bracelets, colliers et bagues choisis un par un, pour habiller le quotidien avec justesse."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/catalogue",
					className: "reveal mt-10 inline-flex min-h-11 items-center justify-center rounded-full border border-white px-8 text-sm uppercase tracking-[0.18em] transition hover:bg-white hover:text-black",
					style: { animationDelay: "360ms" },
					children: "Découvrir la collection"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal mx-auto hidden w-full max-w-md md:block md:max-w-none",
				style: { animationDelay: "180ms" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroVisual, {})
			})]
		})
	});
}
var VISUELS = {
	colliers: IMAGES.colliers,
	bracelets: IMAGES.bracelets,
	bagues: IMAGES.bagues
};
function Accueil() {
	const { products, categories } = useDb();
	const enAvant = products.filter((p) => p.actif).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "reveal text-center font-display text-2xl",
				children: "Nos catégories"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-3 sm:gap-5",
				children: categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/catalogue",
					search: { categorie: category.slug },
					className: "group reveal block",
					style: { animationDelay: `${index * 100}ms` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-square overflow-hidden rounded-md bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: VISUELS[category.slug] ?? IMAGES.colliers,
							alt: category.nom,
							width: 1024,
							height: 1024,
							loading: "lazy",
							decoding: "async",
							className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-center text-[10px] uppercase tracking-[0.12em] sm:text-xs",
						children: category.nom
					})]
				}, category.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "reveal text-center font-display text-3xl",
					children: "Coups de cœur"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4",
					children: enAvant.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalogue",
						className: "reveal inline-flex min-h-11 items-center rounded-md border border-foreground px-8 text-sm uppercase tracking-[0.18em] transition hover:bg-foreground hover:text-background",
						style: { animationDelay: "180ms" },
						children: "Voir tout le catalogue"
					})
				})
			]
		})
	] });
}
//#endregion
export { Accueil as component };
