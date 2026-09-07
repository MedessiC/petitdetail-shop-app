import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

import { Logo } from "./Logo";
import { useCart } from "@/context/CartContext";

const liens = [
  { to: "/", label: "Accueil" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/a-propos", label: "À propos" },
] as const;

export function Navbar() {
  const [ouvert, setOuvert] = useState(false);
  const { nombreArticles } = useCart();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
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
            <Link key={l.to} to={l.to} className="py-2 opacity-80 transition hover:opacity-100">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/panier"
          aria-label={`Panier, ${nombreArticles} article(s)`}
          className="relative -mr-2 flex h-11 w-11 items-center justify-center"
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
          {liens.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOuvert(false)}
              className="block px-4 py-4 text-sm uppercase tracking-[0.18em]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
