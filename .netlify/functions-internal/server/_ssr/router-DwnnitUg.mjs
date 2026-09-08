import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { d as useDb, t as IMAGES } from "./db-BXxV0JWZ.mjs";
import { _ as useNavigate, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$7 } from "./catalogue-Cnhkt-sX.mjs";
import { i as Menu, n as ShoppingBag, o as House, r as Search, t as X } from "../_libs/lucide-react.mjs";
import { n as useCart, t as CartProvider } from "./CartContext-CFUtX5TJ.mjs";
import { a as FaWhatsapp } from "../_libs/react-icons.mjs";
import { t as Route$8 } from "./produit._id-vQfDGnSk.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as hero_image1_default } from "./hero-image1-BsSvHPx8.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DwnnitUg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 mb-16 border-t border-border bg-background md:mb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-xl lowercase transition hover:opacity-80",
					children: "petitdétail."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
					children: "qualité – originalité – charme"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 uppercase tracking-[0.18em]",
						children: "Boutique"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/catalogue",
								className: "transition hover:text-foreground",
								children: "Catalogue"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/panier",
								className: "transition hover:text-foreground",
								children: "Panier"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/a-propos",
								className: "transition hover:text-foreground",
								children: "À propos"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "transition hover:text-foreground",
								children: "Contact"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 uppercase tracking-[0.18em] text-foreground",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cotonou, Bénin" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Paiement à la livraison ou par contact direct" })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "border-t border-border px-4 py-6 text-center text-xs text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" petitdétail. Tous droits réservés."
			]
		})]
	});
}
var CONSENT_KEY = "petitdetail.cookie-consent.v1";
function CookieConsent() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			setVisible(window.localStorage.getItem(CONSENT_KEY) === null);
		} catch {
			setVisible(true);
		}
	}, []);
	function saveConsent(status) {
		try {
			window.localStorage.setItem(CONSENT_KEY, status);
		} catch {
			setVisible(false);
		}
		setVisible(false);
	}
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		role: "dialog",
		"aria-label": "Préférences de cookies",
		"aria-live": "polite",
		className: "fixed bottom-24 left-3 right-3 z-[60] rounded-2xl border border-border bg-background/95 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl md:bottom-6 md:left-auto md:max-w-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl",
				children: "Votre confidentialité compte"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: "Nous utilisons des cookies essentiels pour assurer le bon fonctionnement de la boutique. Vous pouvez accepter ou continuer sans cookies optionnels."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => saveConsent("refused"),
					className: "min-h-10 rounded-full border border-border px-4 text-xs uppercase tracking-[0.12em] transition hover:border-foreground",
					children: "Refuser"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => saveConsent("accepted"),
					className: "min-h-10 rounded-full bg-foreground px-4 text-xs uppercase tracking-[0.12em] text-background transition hover:opacity-80",
					children: "Accepter"
				})]
			})
		]
	});
}
var visuelsCategories = {
	colliers: IMAGES.colliers,
	bracelets: IMAGES.bracelets,
	bagues: IMAGES.bagues
};
var whatsappUrl$1 = "https://wa.me/22991954765?text=Bonjour%20petitd%C3%A9tail%2C%20je%20souhaite%20un%20renseignement.";
function MobileCategoryNav() {
	const { categories } = useDb();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Explorer les catégories",
		className: "reveal fixed bottom-5 left-3 right-3 z-40 overflow-hidden rounded-2xl border border-border/80 bg-background/70 px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_8px_30px_rgba(0,0,0,0.14)] backdrop-blur-xl md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-lg items-stretch",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					activeProps: { className: "text-foreground" },
					className: "flex min-w-0 flex-1 flex-col items-center gap-1 px-1 py-3 text-[10px] uppercase tracking-[0.1em] text-muted-foreground transition hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
						size: 18,
						strokeWidth: 1.5,
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "max-w-full truncate",
						children: "Accueil"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "my-3 w-px shrink-0 bg-border",
					"aria-hidden": "true"
				}),
				categories.map((category) => {
					const visuel = visuelsCategories[category.slug];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/catalogue",
						search: { categorie: category.slug },
						activeProps: { className: "text-foreground" },
						className: "flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-3 text-[10px] uppercase tracking-[0.1em] text-muted-foreground transition hover:text-foreground",
						children: [visuel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: visuel,
							alt: "",
							width: 24,
							height: 24,
							"aria-hidden": "true",
							className: "h-6 w-6 rounded-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
							size: 18,
							strokeWidth: 1.5,
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "max-w-full truncate",
							children: category.nom
						})]
					}, category.id);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "my-3 w-px shrink-0 bg-border",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: whatsappUrl$1,
					target: "_blank",
					rel: "noreferrer",
					"aria-label": "Contacter petitdétail sur WhatsApp",
					className: "flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-3 text-[10px] uppercase tracking-[0.1em] text-[#25D366] transition hover:opacity-70",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, {
						size: 22,
						"aria-hidden": "true"
					})
				})
			]
		})
	});
}
function Logo({ baseline = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "block leading-none",
		"aria-label": "petitdétail. — accueil",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-2xl lowercase tracking-tight",
			children: "petitdétail."
		}), baseline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1 block text-[10px] uppercase tracking-[0.28em] opacity-70",
			children: "qualité – originalité – charme"
		})]
	});
}
var liens = [
	{
		to: "/",
		label: "Accueil"
	},
	{
		to: "/catalogue",
		label: "Catalogue"
	},
	{
		to: "/a-propos",
		label: "À propos"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var whatsappUrl = "https://wa.me/22991954765?text=Bonjour%20petitd%C3%A9tail%2C%20je%20souhaite%20un%20renseignement.";
function Navbar() {
	const [ouvert, setOuvert] = (0, import_react.useState)(false);
	const [recherche, setRecherche] = (0, import_react.useState)("");
	const premiereRecherche = (0, import_react.useRef)(true);
	const navigate = useNavigate();
	const { nombreArticles } = useCart();
	(0, import_react.useEffect)(() => {
		if (premiereRecherche.current) {
			premiereRecherche.current = false;
			return;
		}
		const timeout = window.setTimeout(() => {
			const q = recherche.trim();
			navigate({
				to: "/catalogue",
				search: q ? { q } : {}
			});
		}, 350);
		return () => window.clearTimeout(timeout);
	}, [navigate, recherche]);
	function lancerRecherche(event) {
		event.preventDefault();
		const q = recherche.trim();
		navigate({
			to: "/catalogue",
			search: q ? { q } : {}
		});
		setOuvert(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 bg-black text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-8 items-center justify-center bg-white px-4 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500",
				children: "Profitez de -20% sur une sélection de pièces"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": ouvert ? "Fermer le menu" : "Ouvrir le menu",
							"aria-expanded": ouvert,
							onClick: () => setOuvert((v) => !v),
							className: "-ml-2 flex h-11 w-11 items-center justify-center md:hidden",
							children: ouvert ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 22 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-8 text-sm uppercase tracking-[0.18em] md:flex",
						children: liens.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							activeProps: { className: "opacity-100 font-semibold underline underline-offset-4" },
							activeOptions: { exact: l.to === "/" },
							className: "py-2 opacity-80 transition hover:opacity-100",
							children: l.label
						}, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						onSubmit: lancerRecherche,
						className: "hidden min-w-0 flex-1 md:flex md:max-w-xs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex w-full items-center border-b border-white/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								size: 17,
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "search",
								value: recherche,
								onChange: (event) => setRecherche(event.target.value),
								placeholder: "Rechercher",
								"aria-label": "Rechercher un produit",
								className: "min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-white/60"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappUrl,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Contacter petitdétail sur WhatsApp",
						title: "Contacter sur WhatsApp",
						className: "hidden h-11 w-11 shrink-0 items-center justify-center text-[#25D366] transition hover:opacity-70 md:flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, {
							size: 22,
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/panier",
						"aria-label": `Panier, ${nombreArticles} article(s)`,
						className: "relative -mr-2 flex h-11 w-11 items-center justify-center transition hover:opacity-80",
						activeProps: { className: "opacity-100 font-semibold" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 22 }), nombreArticles > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute right-0 top-1 min-w-5 rounded-full bg-white px-1 text-center text-[11px] font-medium leading-5 text-black",
							children: nombreArticles
						})]
					})
				]
			}),
			ouvert && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "border-t border-white/15 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					onSubmit: lancerRecherche,
					className: "px-4 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center border-b border-white/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							size: 17,
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "search",
							value: recherche,
							onChange: (event) => setRecherche(event.target.value),
							placeholder: "Rechercher un produit",
							"aria-label": "Rechercher un produit",
							className: "min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-white/60"
						})]
					})
				}), liens.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					activeProps: { className: "bg-white/10 font-semibold opacity-100" },
					activeOptions: { exact: l.to === "/" },
					onClick: () => setOuvert(false),
					className: "block px-4 py-4 text-sm uppercase tracking-[0.18em] opacity-80",
					children: l.label
				}, l.to))]
			})
		]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var styles_default = "/assets/styles-Bg-Xi8-c.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "petitdétail. — bijoux et accessoires" },
			{
				name: "description",
				content: "Bijoux et accessoires choisis avec soin, pour le petit détail qui compte."
			},
			{
				name: "author",
				content: "petitdétail."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "theme-color",
				content: "#000000"
			},
			{
				property: "og:title",
				content: "petitdétail. — bijoux et accessoires"
			},
			{
				property: "og:description",
				content: "Bijoux et accessoires choisis avec soin, pour le petit détail qui compte."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "petitdétail."
			},
			{
				property: "og:locale",
				content: "fr_FR"
			},
			{
				property: "og:image",
				content: hero_image1_default
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "petitdétail. — bijoux et accessoires"
			},
			{
				name: "twitter:description",
				content: "Bijoux et accessoires choisis avec soin, pour le petit détail qui compte."
			},
			{
				name: "twitter:image",
				content: hero_image1_default
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1 pt-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCategoryNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieConsent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		] })
	});
}
var $$splitComponentImporter$5 = () => import("./routes-BQLDNvht.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "petitdétail. — bijoux et accessoires à Cotonou" },
		{
			name: "description",
			content: "Bracelets, colliers et bagues sélectionnés à Cotonou. Le petit détail qui compte pour votre look. Livraison au Bénin, paiement à la livraison."
		},
		{
			property: "og:title",
			content: "petitdétail. — bijoux et accessoires à Cotonou"
		},
		{
			property: "og:description",
			content: "Bracelets, colliers et bagues sélectionnés à Cotonou, Bénin."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./a-propos-TiRWezMO.mjs");
var Route$4 = createFileRoute("/a-propos")({
	head: () => ({ meta: [
		{ title: "À propos — petitdétail." },
		{
			name: "description",
			content: "petitdétail. est une marque béninoise d'accessoires : bracelets, colliers et bagues choisis avec soin à Cotonou."
		},
		{
			property: "og:title",
			content: "À propos — petitdétail."
		},
		{
			property: "og:description",
			content: "Une marque d'accessoires née à Cotonou, Bénin."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
/**
* Back-office admin — DONNÉES MOCKUP UNIQUEMENT.
*
* ⚠️ Authentification volontairement simplifiée (mot de passe en dur côté
* client) et modifications non persistées dans une vraie base : tout est
* stocké en mémoire + localStorage. À remplacer par Supabase Auth + tables
* réelles lors de la migration.
*/
var $$splitComponentImporter$3 = () => import("./admin-DSkuuKAK.mjs");
var Route$3 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Administration — petitdétail." },
		{
			name: "description",
			content: "Espace d'administration interne de la boutique petitdétail."
		},
		{
			name: "robots",
			content: "noindex"
		},
		{
			property: "og:title",
			content: "Administration — petitdétail."
		},
		{
			property: "og:description",
			content: "Espace interne de gestion petitdétail."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./commander-DeIkt82R.mjs");
var Route$2 = createFileRoute("/commander")({
	head: () => ({ meta: [
		{ title: "Commander — petitdétail." },
		{
			name: "description",
			content: "Renseignez votre livraison à Cotonou et validez votre commande petitdétail. Paiement hors ligne."
		},
		{
			property: "og:title",
			content: "Commander — petitdétail."
		},
		{
			property: "og:description",
			content: "Livraison à Cotonou, paiement à la réception."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./contact-BvpQxf_2.mjs");
var Route$1 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — petitdétail." },
		{
			name: "description",
			content: "Contactez petitdétail. par téléphone, WhatsApp ou email."
		},
		{
			property: "og:title",
			content: "Contact — petitdétail."
		},
		{
			property: "og:description",
			content: "Contactez petitdétail. facilement."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./panier-BnYIEBiE.mjs");
var Route = createFileRoute("/panier")({
	head: () => ({ meta: [
		{ title: "Panier — petitdétail." },
		{
			name: "description",
			content: "Vérifiez vos articles petitdétail avant de passer commande à Cotonou."
		},
		{
			property: "og:title",
			content: "Panier — petitdétail."
		},
		{
			property: "og:description",
			content: "Vos bijoux sélectionnés chez petitdétail."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AProposRoute: Route$4.update({
		id: "/a-propos",
		path: "/a-propos",
		getParentRoute: () => Route$6
	}),
	AdminRoute: Route$3.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$6
	}),
	CatalogueRoute: Route$7.update({
		id: "/catalogue",
		path: "/catalogue",
		getParentRoute: () => Route$6
	}),
	CommanderRoute: Route$2.update({
		id: "/commander",
		path: "/commander",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$1.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$6
	}),
	PanierRoute: Route.update({
		id: "/panier",
		path: "/panier",
		getParentRoute: () => Route$6
	}),
	ProduitIdRoute: Route$8.update({
		id: "/produit/$id",
		path: "/produit/$id",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
