import React from 'react';
import Link from 'next/link';

// Datos de ejemplo para las ofertas laborales
const jobOffers = [
  {
    title: 'Desarrollador Frontend (React)',
    company: 'Innovate Solutions',
    location: 'La Habana, Cuba (Remoto)',
    description: 'Buscamos un desarrollador de React con experiencia en Next.js y Tailwind CSS para unirse a nuestro equipo de producto.',
    url: '#',
  },
  {
    title: 'Ingeniero de Software Junior',
    company: 'Digital Edge',
    location: 'Híbrido',
    description: 'Oportunidad para un desarrollador junior apasionado por aprender y trabajar con las últimas tecnologías de JavaScript.',
    url: '#',
  },
  {
    title: 'Diseñador UI/UX (con React)',
    company: 'Creative Studio',
    location: 'La Habana, Cuba',
    description: 'Necesitamos un diseñador con experiencia en la creación de interfaces de usuario y prototipos para aplicaciones React.',
    url: '#',
  },
];

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl min-h-screen my-20">
      <header className="py-10 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Oportunidades Laborales</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Encuentra tu próximo empleo en el ecosistema de React en Cuba.
        </p>
      </header>

      <div className="mt-12 space-y-6">
        {jobOffers.map((job) => (
          <div key={job.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {job.title}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              <span className="font-semibold">{job.company}</span> • {job.location}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {job.description}
            </p>
            <div className="mt-4">
              <Link href={job.url} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Ver detalles y aplicar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
