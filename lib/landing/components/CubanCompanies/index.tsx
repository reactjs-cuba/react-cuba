import React from "react";
import Image from "next/image";
import Link from "next/link";

// Datos de ejemplo para las empresas cubanas que usan React
const cubanCompanies = [
  {
    name: "CubanDevs",
    description:
      "Plataforma de desarrollo de software con un fuerte enfoque en tecnologías web modernas, usando React para sus interfaces.",
    logoUrl:
      "https://ui-avatars.com/api/?name=CubanDevs&background=random&size=96",
    websiteUrl: "#",
  },
  {
    name: "ReactCuba",
    description:
      "Consultora especializada en la implementación de soluciones con React y React Native para el mercado local.",
    logoUrl:
      "https://ui-avatars.com/api/?name=ReactCuba&background=random&size=96",
    websiteUrl: "#",
  },
  {
    name: "Tecno Habana",
    description:
      "Startup que crea aplicaciones móviles y web para el sector turístico, con una arquitectura basada en React.",
    logoUrl:
      "https://ui-avatars.com/api/?name=Tecno+Habana&background=random&size=96",
    websiteUrl: "#",
  },
  {
    name: "Soft Caribe",
    description:
      "Empresa de desarrollo de software a medida, utilizando React para el frontend de sus sistemas de gestión.",
    logoUrl:
      "https://ui-avatars.com/api/?name=Soft+Caribe&background=random&size=96",
    websiteUrl: "#",
  },
];

export const CubanCompaniesSection = () => {
  return (
    <div className="mx-auto p-8 text-center dark:bg-[conic-gradient(from_-90deg_at_110%_100%,#2b303b_0deg,#16181d_90deg,#16181d_1turn)]
    bg-[conic-gradient(from_90deg_at_-10%_100%,#BCC1CA_0deg,#bcc1cd_90deg,#fff_1turn)]
    py-30 px-20">
      <h2 className="text-6xl font-bold text-header-content">
        Empresas Cubanas que Usan React
      </h2>
      <p className="mt-4 text-2xl text-content">
        Conoce a las empresas locales que apuestan por esta tecnología.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cubanCompanies.map((company) => (
          <div
            key={company.name}
            className="border bg-background border-border rounded-lg p-10 pb-7 bg-gradient-to-br"
          >
            <div className="flex flex-col items-center">
              <Image
                src={company.logoUrl}
                alt={`${company.name} logo`}
                width={96}
                height={96}
                className="rounded-3xl"
              />
              <h3 className="mt-4 text-3xl font-semibold text-gray-900 dark:text-white">
                {company.name}
              </h3>
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg px-2">
              {company.description}
            </p>
            <div className="mt-6">
              <Link
                href={company.websiteUrl}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Visitar sitio web
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
