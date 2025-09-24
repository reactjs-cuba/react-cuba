import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-background">
      {/* Add your desired height */}
      <div className="hero-image-container absolute inset-0 z-1">
        <Image
          src="/hero-background.jpg"
          alt="Hero background"
          layout="fill"
          objectFit="fill"
          className="dark:opacity-10 opacity-40 blur-xs"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col gap-7 items-center justify-center h-full text-white">
        <div className="px-5 py-3 bg-card rounded-full border border-border">
          <h3 className="text-lg">100% made in 🇨🇺</h3>
        </div>
        <h2 className="text-9xl max-w-6xl uppercase font-black text-header-content text-center">
          La comunidad <strong className="text-destructive">cubana</strong> de{" "}
          <strong className="text-primary">React</strong>
        </h2>
        <p className="text-3xl max-w-5xl w-full text-center text-content">
          Somos un grupo de desarrolladores apasionados de las tecnologías
          frontend relacionadas con React en Cuba.
        </p>
        <div className="p-3 flex gap-5 items-center justify-center">
          <button className="py-5 px-7 text-2xl rounded-full bg-primary text-primary-foreground font-medium cursor-pointer">
            Explorar comunidad
          </button>
          <button className="py-5 px-7 text-2xl rounded-full border-border border bg-card text-white cursor-pointer">
            Ver eventos
          </button>
        </div>
      </div>
    </div>
  );
};
