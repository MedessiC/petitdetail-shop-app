import { Link } from "@tanstack/react-router";

import { formatFCFA } from "@/lib/format";
import type { Product } from "@/data/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to="/produit/$id" params={{ id: product.id }} className="group block">
      <div className="aspect-square overflow-hidden bg-muted">
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
      <h3 className="mt-3 font-display text-lg">{product.nom}</h3>
      <p className="text-sm text-muted-foreground">{formatFCFA(product.prix)}</p>
    </Link>
  );
}
