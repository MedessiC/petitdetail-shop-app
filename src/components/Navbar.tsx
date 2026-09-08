import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState, type FormEvent } from "react";

import { Logo } from "./Logo";
import { useCart } from "@/context/CartContext";

const liens = [
  { to: "/", label: "Accueil" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

const whatsappUrl =
  "https://wa.me/22991954765?text=Bonjour%20petitd%C3%A9tail%2C%20je%20souhaite%20un%20renseignement.";

export function Navbar() {
  const [ouvert, setOuvert] = useState(false);
  const [recherche, setRecherche] = useState("");
  const premiereRecherche = useRef(true);
  const navigate = useNavigate();
  const { nombreArticles } = useCart();

  useEffect(() => {
    if (premiereRecherche.current) {
      premiereRecherche.current = false;
      return;
    }

    const timeout = window.setTimeout(() => {
      const q = recherche.trim();
      navigate({ to: "/catalogue", search: q ? { q } : {} });
    }, 350);

    return () => window.clearTimeout(timeout);
  }, [navigate, recherche]);

  function lancerRecherche(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = recherche.trim();
    navigate({ to: "/catalogue", search: q ? { q } : {} });
    setOuvert(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black text-white">
      <div className="flex h-8 items-center justify-center bg-white px-4 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
        Profitez de -20% sur une sélection de pièces
      </div>
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={ouvert}
            onClick={() => setOuvert((v) => !v)}
            className="-ml-2 flex h-11 w-11 items-center justify-center md:hidden"
          >
            {ouvert ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Logo />
        </div>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] md:flex">
          {liens.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "opacity-100 font-semibold underline underline-offset-4" }}
              activeOptions={{ exact: l.to === "/" }}
              className="py-2 opacity-80 transition hover:opacity-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <form onSubmit={lancerRecherche} className="hidden min-w-0 flex-1 md:flex md:max-w-xs">
          <label className="flex w-full items-center border-b border-white/50">
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              value={recherche}
              onChange={(event) => setRecherche(event.target.value)}
              placeholder="Rechercher"
              aria-label="Rechercher un produit"
              className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-white/60"
            />
          </label>
        </form>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Contacter petitdétail sur WhatsApp"
          title="Contacter sur WhatsApp"
          className="hidden h-11 w-11 shrink-0 items-center justify-center text-[#25D366] transition hover:opacity-70 md:flex"
        >
          <FaWhatsapp size={22} aria-hidden="true" />
        </a>

        <Link
          to="/panier"
          aria-label={`Panier, ${nombreArticles} article(s)`}
          className="relative -mr-2 flex h-11 w-11 items-center justify-center transition hover:opacity-80"
          activeProps={{ className: "opacity-100 font-semibold" }}
        >
          <ShoppingBag size={22} />
          {nombreArticles > 0 && (
            <span className="absolute right-0 top-1 min-w-5 rounded-full bg-white px-1 text-center text-[11px] font-medium leading-5 text-black">
              {nombreArticles}
            </span>
          )}
        </Link>
      </div>

      {ouvert && (
        <nav className="border-t border-white/15 md:hidden">
          <form onSubmit={lancerRecherche} className="px-4 py-3">
            <label className="flex items-center border-b border-white/50">
              <Search size={17} aria-hidden="true" />
              <input
                type="search"
                value={recherche}
                onChange={(event) => setRecherche(event.target.value)}
                placeholder="Rechercher un produit"
                aria-label="Rechercher un produit"
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-white/60"
              />
            </label>
          </form>
          {liens.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "bg-white/10 font-semibold opacity-100" }}
              activeOptions={{ exact: l.to === "/" }}
              onClick={() => setOuvert(false)}
              className="block px-4 py-4 text-sm uppercase tracking-[0.18em] opacity-80"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
