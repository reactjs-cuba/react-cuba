import React from "react";

// Datos de ejemplo para los patrocinadores
// Puedes reemplazar estos URLs con los logos reales de tus patrocinadores
const sponsors = [
  { name: "Acme Inc.", logoUrl: "https://i.imgur.com/G5qE7F1.png" },
  { name: "Global Solutions", logoUrl: "https://i.imgur.com/74d32aM.png" },
  { name: "Innovate Tech", logoUrl: "https://i.imgur.com/vH7jBwQ.png" },
  { name: "Digital Edge", logoUrl: "https://i.imgur.com/2s4F4q9.png" },
  { name: "Cloud Labs", logoUrl: "https://i.imgur.com/kS92XvE.png" },
  { name: "Web Foundry", logoUrl: "https://i.imgur.com/Qk2v62u.png" },
];

export const SponsorsScetion = () => {
  return (
    <div className="mx-auto p-8 text-center bg-white dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Nuestros Patrocinadores</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Gracias a su apoyo, hacemos posible esta comunidad.
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <img 
              src={sponsor.logoUrl}
              alt={sponsor.name}
              className="w-full h-auto max-h-16 object-contain filter grayscale hover:grayscale-0 transition-filter duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};