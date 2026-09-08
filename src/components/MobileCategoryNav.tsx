import { Link } from "@tanstack/react-router";
import { House, ShoppingBag } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { useDb } from "@/data/db";
import { IMAGES } from "@/data/seed";

const visuelsCategories: Record<string, string> = {
  colliers: IMAGES.colliers,
  bracelets: IMAGES.bracelets,
  bagues: IMAGES.bagues,
};
const whatsappUrl =
  "https://wa.me/22997123456?text=Bonjour%20petitd%C3%A9tail%2C%20je%20souhaite%20un%20renseignement.";

export function MobileCategoryNav() {
  const { categories } = useDb();

  return (
    <nav
      aria-label="Explorer les catégories"
      className="reveal fixed bottom-5 left-3 right-3 z-40 overflow-hidden rounded-2xl border border-border/80 bg-background/70 px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_8px_30px_rgba(0,0,0,0.14)] backdrop-blur-xl md:hidden"
    >
      <div className="mx-auto flex w-full max-w-lg items-stretch">
        <Link
          to="/"
          activeProps={{ className: "text-foreground" }}
          className="flex min-w-0 flex-1 flex-col items-center gap-1 px-1 py-3 text-[10px] uppercase tracking-[0.1em] text-muted-foreground transition hover:text-foreground"
        >
          <House size={18} strokeWidth={1.5} aria-hidden="true" />
          <span className="max-w-full truncate">Accueil</span>
        </Link>
        <span className="my-3 w-px shrink-0 bg-border" aria-hidden="true" />
        {categories.map((category) => {
          const visuel = visuelsCategories[category.slug];

          return (
            <Link
              key={category.id}
              to="/catalogue"
              search={{ categorie: category.slug }}
              activeProps={{ className: "text-foreground" }}
              className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-3 text-[10px] uppercase tracking-[0.1em] text-muted-foreground transition hover:text-foreground"
            >
              {visuel ? (
                <img
                  src={visuel}
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                  className="h-6 w-6 rounded-full object-cover"
                />
              ) : (
                <ShoppingBag size={18} strokeWidth={1.5} aria-hidden="true" />
              )}
              <span className="max-w-full truncate">{category.nom}</span>
            </Link>
          );
        })}
        <span className="my-3 w-px shrink-0 bg-border" aria-hidden="true" />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Contacter petitdétail sur WhatsApp"
          className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-3 text-[10px] uppercase tracking-[0.1em] text-[#25D366] transition hover:opacity-70"
        >
          <FaWhatsapp size={22} aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}
