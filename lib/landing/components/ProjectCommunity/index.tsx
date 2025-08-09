import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "ReactCuba Dashboard",
    description: "Un panel de control de código abierto para gestionar la comunidad y los eventos.",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    githubUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Aplicación de Empleos para Devs",
    description: "Una plataforma para que los desarrolladores cubanos encuentren y publiquen ofertas de trabajo.",
    techStack: ["React", "Express", "MongoDB"],
    githubUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Biblioteca de Componentes UI",
    description: "Una colección de componentes de React reutilizables para el ecosistema de la comunidad.",
    techStack: ["React", "Storybook", "TypeScript"],
    githubUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const CommunityProjectsSection = () => {
  return (
    <div className="mx-auto p-8  text-center bg-[var(--card)]">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Proyectos de la Comunidad</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Explora los proyectos que estamos construyendo juntos.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[var(--background)] rounded-lg shadow-lg overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.name}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href={project.githubUrl}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Ver en GitHub
                  <span className="ml-2">➡️</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};