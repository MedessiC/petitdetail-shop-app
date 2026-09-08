import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import heroImage from "@/assets/hero-image1.png";
import heroImage2 from "@/assets/hero-image2.png";
import heroImage3 from "@/assets/hero-image3.png";

const heroImages = [heroImage, heroImage2, heroImage3];

function HeroVisual() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setImageIndex((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-md">
      {heroImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={index === imageIndex ? "Sélection de bijoux petitdétail" : ""}
          width={1024}
          height={1024}
          aria-hidden={index !== imageIndex}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === imageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 text-center sm:py-28 md:grid-cols-2 md:gap-16 md:text-left">
        <div>
          <h1 className="reveal font-display text-4xl leading-tight sm:text-6xl">
            Le petit détail qui compte
            <span className="block">pour votre look</span>
          </h1>
          <div className="reveal mx-auto mt-6 w-40 sm:w-48 md:hidden" style={{ animationDelay: "120ms" }}>
            <HeroVisual />
          </div>
          <p
            className="reveal mx-auto mt-6 max-w-xl text-sm text-white/70 sm:text-base md:mx-0"
            style={{ animationDelay: "240ms" }}
          >
            Bracelets, colliers et bagues choisis un par un, pour habiller le quotidien avec justesse.
          </p>
          <Link
            to="/catalogue"
            className="reveal mt-10 inline-flex min-h-11 items-center justify-center rounded-full border border-white px-8 text-sm uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
            style={{ animationDelay: "360ms" }}
          >
            Découvrir la collection
          </Link>
        </div>
        <div className="reveal mx-auto hidden w-full max-w-md md:block md:max-w-none" style={{ animationDelay: "180ms" }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
