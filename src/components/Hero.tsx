import { Link } from "@tanstack/react-router";

/** Icônes de bijoux en ligne fine, animées en fondu (décoratives). */
function JewelIcons() {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <div className="mt-12 flex items-center justify-center gap-10 text-white/80" aria-hidden="true">
      {/* Collier */}
      <svg viewBox="0 0 48 48" className="jewel-fade h-12 w-12" style={{ animationDelay: "0s" }}>
        <path d="M10 8c0 14 6 22 14 22s14-8 14-22" {...common} />
        <circle cx="24" cy="34" r="4" {...common} />
      </svg>
      {/* Chaîne */}
      <svg viewBox="0 0 48 48" className="jewel-fade h-12 w-12" style={{ animationDelay: "3s" }}>
        <ellipse cx="14" cy="24" rx="7" ry="4.5" {...common} />
        <ellipse cx="24" cy="24" rx="7" ry="4.5" {...common} />
        <ellipse cx="34" cy="24" rx="7" ry="4.5" {...common} />
      </svg>
      {/* Bague */}
      <svg viewBox="0 0 48 48" className="jewel-fade h-12 w-12" style={{ animationDelay: "6s" }}>
        <circle cx="24" cy="29" r="11" {...common} />
        <path d="M19 15l5-6 5 6-5 4-5-4z" {...common} />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:py-32">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/60">Cotonou · Bénin</p>
        <h1 className="mt-6 font-display text-4xl leading-tight sm:text-6xl">
          Le petit détail qui compte pour votre look
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm text-white/70 sm:text-base">
          Bracelets, colliers et bagues choisis un par un, pour habiller le quotidien avec justesse.
        </p>
        <Link
          to="/catalogue"
          className="mt-10 inline-flex min-h-11 items-center justify-center border border-white px-8 text-sm uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
        >
          Découvrir la collection
        </Link>
        <JewelIcons />
      </div>
    </section>
  );
}
