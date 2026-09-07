import { Link } from "@tanstack/react-router";

export function Logo({ baseline = true }: { baseline?: boolean }) {
  return (
    <Link to="/" className="block leading-none" aria-label="petitdétail. — accueil">
      <span className="font-display text-2xl lowercase tracking-tight">petitdétail.</span>
      {baseline && (
        <span className="mt-1 block text-[10px] uppercase tracking-[0.28em] opacity-70">
          qualité – originalité – charme
        </span>
      )}
    </Link>
  );
}
