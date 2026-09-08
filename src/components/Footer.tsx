import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 mb-16 border-t border-border bg-background md:mb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <Link to="/" className="font-display text-xl lowercase transition hover:opacity-80">
            petitdétail.
          </Link>
          <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            qualité – originalité – charme
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 uppercase tracking-[0.18em]">Boutique</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/catalogue" className="transition hover:text-foreground">
                Catalogue
              </Link>
            </li>
            <li>
              <Link to="/panier" className="transition hover:text-foreground">
                Panier
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="transition hover:text-foreground">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-3 uppercase tracking-[0.18em] text-foreground">Contact</p>
          <p>Cotonou, Bénin</p>
          <p>Paiement à la livraison ou par contact direct</p>
        </div>
      </div>
      <p className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} petitdétail. Tous droits réservés.
      </p>
    </footer>
  );
}
