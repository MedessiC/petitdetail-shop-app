import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Mail } from "../_libs/lucide-react.mjs";
import { a as FaWhatsapp, i as FaTiktok, n as FaLinkedinIn, r as FaPhone, t as FaFacebookF } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-UdYGbfLW.js
var import_jsx_runtime = require_jsx_runtime();
var telephone = "+22991954765";
var email = "contact@petitdetail.bj";
var whatsappUrl = "https://wa.me/22991954765?text=Bonjour%20petitd%C3%A9tail%2C%20je%20souhaite%20un%20renseignement.";
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.28em] text-muted-foreground",
				children: "Échangeons"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl sm:text-5xl",
				children: "Contactez-nous"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground",
				children: "Une question sur une pièce, une commande ou une livraison ? Nous sommes disponibles pour vous répondre."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${telephone}`,
						className: "flex min-h-14 items-center justify-center gap-3 rounded-full bg-foreground px-5 text-sm text-background transition hover:opacity-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaPhone, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Appeler" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-5 text-sm text-white transition hover:opacity-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${email}`,
						className: "flex min-h-14 items-center justify-center gap-3 rounded-full border border-foreground px-5 text-sm transition hover:bg-foreground hover:text-background",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							size: 18,
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20 border-t border-border pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Retrouvez-nous"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.facebook.com/",
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "Facebook",
							className: "flex h-11 w-11 items-center justify-center rounded-full border border-border transition hover:bg-foreground hover:text-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaFacebookF, { "aria-hidden": "true" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.tiktok.com/",
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "TikTok",
							className: "flex h-11 w-11 items-center justify-center rounded-full border border-border transition hover:bg-foreground hover:text-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaTiktok, { "aria-hidden": "true" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.linkedin.com/",
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "LinkedIn",
							className: "flex h-11 w-11 items-center justify-center rounded-full border border-border transition hover:bg-foreground hover:text-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaLinkedinIn, { "aria-hidden": "true" })
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Contact as component };
