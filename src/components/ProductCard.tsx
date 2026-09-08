import { Link } from "@tanstack/react-router";

import { formatFCFA, prixPromotion } from "@/lib/format";
import type { Product } from "@/data/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/produit/$id"
      params={{ id: product.id }}
      className="group reveal block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4"
    >
      <div className="aspect-square overflow-hidden rounded-md bg-muted">
        <img
          src={product.images[0]}
          alt={product.nom}
          width={1024}
          height={1024}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 50vw, 25vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-3 line-clamp-2 font-display text-lg leading-tight">{product.nom}</h3>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <p className="text-sm font-semibold text-foreground">{formatFCFA(prixPromotion(product.prix))}</p>
        <p className="text-xs text-muted-foreground line-through">{formatFCFA(product.prix)}</p>
        <span className="rounded-full bg-foreground px-2 py-1 text-[10px] font-medium text-background">
          -20%
        </span>
      </div>
    </Link>
  );
}
