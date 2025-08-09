import React from "react";
import Link from "next/link"; // Asegúrate de importar Link si lo vas a usar

// Datos de ejemplo para enlaces y redes sociales
const navigationLinks = [
  { name: "Inicio", href: "#" },
  { name: "Eventos", href: "#" },
  { name: "Sobre Nosotros", href: "#" },
  { name: "Patrocinadores", href: "#" },
];

const socialLinks = [
  { name: "GitHub", href: "#", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.06 3.633 17.7 3.633 17.7c-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.778.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.383 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.296-1.552 3.296-1.23 3.296-1.23.645 1.653.24 2.873.105 3.176.77.837 1.235 1.91 1.235 3.22 0 4.61-2.802 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  )},
  { name: "Twitter", href: "#", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.46 6c-.77.34-1.6.56-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.84-2.73 1.03-.79-.84-1.92-1.37-3.17-1.37-2.38 0-4.32 1.94-4.32 4.32 0 .34.04.67.11.99-3.6-.18-6.8-1.9-8.94-4.52-.37.64-.58 1.39-.58 2.19 0 1.5.76 2.82 1.92 3.61-.7-.02-1.37-.22-1.95-.5v.05c0 2.1 1.5 3.86 3.48 4.26-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3.01-1.5 1.18-3.4 1.89-5.46 1.89-.35 0-.7-.02-1.04-.06C3.93 20.25 6.13 21 8.52 21c10.22 0 15.8-8.48 15.8-15.8 0-.24-.01-.48-.02-.72.82-.6 1.53-1.35 2.1-2.22"/>
    </svg>
  )},
  { name: "LinkedIn", href: "#", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.48c0-1.306-.025-2.983-1.815-2.983-1.817 0-2.096 1.419-2.096 2.898v5.565H9.333V9.452h3.415v1.564h.046c.476-.9 1.636-1.849 3.374-1.849 3.612 0 4.28 2.382 4.28 5.48v6.232zM5.99 7.828c-1.229 0-2.224-1.026-2.224-2.29s.995-2.29 2.224-2.29c1.23 0 2.224 1.026 2.224 2.29s-.994 2.29-2.224 2.29zm1.748 12.624H4.242V9.452h3.496v11.002zM21.5 2.5c0-.276-.224-.5-.5-.5h-19c-.276 0-.5.224-.5.5v19c0 .276.224.5.5.5h19c.276 0 .5-.224.5-.5v-19z"/>
    </svg>
  )},
];

export const FooterScetion = () => {
  return (
    <footer className="bg-[var(--card)] text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12">
          {/* Columna de la comunidad */}
          <div className="text-center md:text-left md:w-1/3">
            <h3 className="text-2xl font-bold text-white">Tu Comunidad React</h3>
            <p className="mt-2 text-sm">
              Conectando a desarrolladores apasionados por React y sus tecnologías.
            </p>
          </div>

          {/* Columna de navegación */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white">Navegación</h4>
            <ul className="mt-2 space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna de redes sociales */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white">Síguenos</h4>
            <div className="mt-2 flex justify-center md:justify-start gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de derechos de autor */}
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Tu Comunidad React. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};