import { createFileRoute } from "@tanstack/react-router";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail } from "lucide-react";

const telephone = "+22991954765";
const email = "contact@petitdetail.bj";
const whatsappUrl =
  "https://wa.me/22991954765?text=Bonjour%20petitd%C3%A9tail%2C%20je%20souhaite%20un%20renseignement.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — petitdétail." },
      {
        name: "description",
        content: "Contactez petitdétail. par téléphone, WhatsApp ou email.",
      },
      { property: "og:title", content: "Contact — petitdétail." },
      { property: "og:description", content: "Contactez petitdétail. facilement." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center">
      <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Échangeons</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">Contactez-nous</h1>
      <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
        Une question sur une pièce, une commande ou une livraison ? Nous sommes disponibles pour
        vous répondre.
      </p>

      <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
        <a
          href={`tel:${telephone}`}
          className="flex min-h-14 items-center justify-center gap-3 rounded-full bg-foreground px-5 text-sm text-background transition hover:opacity-80"
        >
          <FaPhone aria-hidden="true" />
          <span>Appeler</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-5 text-sm text-white transition hover:opacity-80"
        >
          <FaWhatsapp aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
        <a
          href={`mailto:${email}`}
          className="flex min-h-14 items-center justify-center gap-3 rounded-full border border-foreground px-5 text-sm transition hover:bg-foreground hover:text-background"
        >
          <Mail size={18} aria-hidden="true" />
          <span>Email</span>
        </a>
      </div>

      <section className="mt-20 border-t border-border pt-10">
        <h2 className="font-display text-2xl">Retrouvez-nous</h2>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition hover:bg-foreground hover:text-background"
          >
            <FaFacebookF aria-hidden="true" />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition hover:bg-foreground hover:text-background"
          >
            <FaTiktok aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition hover:bg-foreground hover:text-background"
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
