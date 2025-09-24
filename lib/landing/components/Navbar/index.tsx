"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

// Datos de ejemplo para los enlaces de navegación
const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Eventos", href: "#eventos" },
  { name: "Sobre Nosotros", href: "#sobre-nosotros" },
  { name: "Patrocinadores", href: "#patrocinadores" },
  { name: "Blog", href: "/blog" },
  { name: "Empleos", href: "/jobs" },
];

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Para el selector de idioma, podemos usar un estado simple para el mockup
  const [language, setLanguage] = useState("ES");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/20 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo de la comunidad */}
        <Link href="/" className="text-2xl font-bold text-gray-900 ">
          <Image
            src="/logo.png"
            width={50}
            height={10}
            className="rounded-2xl"
            alt={"React Cuba"}
          />
        </Link>

        {/* Enlaces de navegación y toggles */}
        <div className="flex gap-4 md:gap-8 items-center">
          {/* Enlaces principales (ocultos en móvil) */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-500 transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-400"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Iconos y botones de acción */}
          <div className="flex items-center gap-2">
            {/* Botón de cambio de tema con SVG */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors rounded-full"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m4.93 19.07 1.41-1.41" />
                  <path d="m17.66 6.34 1.41-1.41" />
                </svg>
              )}
            </button>
            {/* Botón de cambio de idioma (ejemplo) */}
            <button className="p-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              🌐 {language}
            </button>

            {/* Enlace a GitHub con SVG */}
            <a
              href="https://github.com/tu-usuario/tu-repositorio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir a GitHub"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.06 3.633 17.7 3.633 17.7c-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.778.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.383 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.296-1.552 3.296-1.23 3.296-1.23.645 1.653.24 2.873.105 3.176.77.837 1.235 1.91 1.235 3.22 0 4.61-2.802 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
