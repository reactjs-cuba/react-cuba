import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactOriginal from "react-devicons/react/original";
import NextjsOriginal from "react-devicons/nextjs/original";
import ExpressOriginal from "react-devicons/express/original";
import MongodbOriginal from "react-devicons/mongodb/original";
import TypescriptOriginal from "react-devicons/typescript/original";
import StorybookOriginal from "react-devicons/storybook/original";
import TailwindcssPlain from "react-devicons/tailwindcss/original";
import { randomInt } from "crypto";

const projects = [
  {
    name: "ReactCuba Dashboard",
    description:
      "Un panel de control de código abierto para gestionar la comunidad y los eventos.",
    techStack: [
      <ReactOriginal key="react-original" />,
      <NextjsOriginal key="nextjs-original" />,
      <TailwindcssPlain key="tailwindcss-original" />,
    ],
    githubUrl: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Aplicación de Empleos para Devs",
    description:
      "Una plataforma para que los desarrolladores cubanos encuentren y publiquen ofertas de trabajo.",
    techStack: [
      <ReactOriginal key="react-original" />,
      <ExpressOriginal key="express-original" color="#fff" fill="#fff" />,
      <MongodbOriginal key="mongodb-original" />,
    ],
    githubUrl: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Biblioteca de Componentes UI",
    description:
      "Una colección de componentes de React reutilizables para el ecosistema de la comunidad.",
    techStack: [
      <ReactOriginal key="react-original" />,
      <StorybookOriginal key="storybook-original" />,
      <TypescriptOriginal key="typescript-original" />,
    ],
    githubUrl: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const CommunityProjectsSection = () => {
  return (
    <div className="mx-auto p-8 text-center py-30 px-20 bg-gray-60">
      <h2 className="text-6xl font-bold">Proyectos de la Comunidad</h2>
      <p className="mt-4 text-2xl text-gray-600 dark:text-gray-400">
        Explora los proyectos que estamos construyendo juntos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-background border rounded-lg border-border overflow-hidden"
          >
            <Image
              src={project.imageUrl}
              alt={project.name}
              width={600}
              height={400}
              className="w-full object-cover max-w-full h-48"
            />

            <div className="flex flex-col gap-5 p-6 text-left h-full">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) =>
                  React.cloneElement(tech, {
                    key: index,
                    size: 40,
                  })
                )}
              </div>
              <Link
                href={project.githubUrl}
                className=" inline-flex items-center text-xl text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Ver en GitHub
                <span className="mb-auto"></span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
