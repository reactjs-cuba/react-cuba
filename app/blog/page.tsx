import React from 'react';
import Link from 'next/link';

// Datos de ejemplo para las publicaciones de blog
const blogPosts = [
  {
    title: 'Guía para principiantes de React 19',
    summary: 'Un vistazo a las nuevas características y cómo empezar con la última versión de React.',
    date: '01 de agosto de 2025',
    author: 'Juan Pérez',
    slug: 'guia-principiantes-react-19',
  },
  {
    title: 'Componentes de Servidor en Next.js: lo que necesitas saber',
    summary: 'Explorando las ventajas y el uso de Server Components para mejorar el rendimiento de tus aplicaciones.',
    date: '25 de julio de 2025',
    author: 'Ana Gómez',
    slug: 'server-components-nextjs',
  },
  {
    title: 'Patrones de diseño comunes en aplicaciones React',
    summary: 'Un recorrido por los patrones de diseño más utilizados para construir interfaces de usuario robustas y escalables.',
    date: '10 de julio de 2025',
    author: 'Luis Castro',
    slug: 'patrones-diseno-react',
  },
  {
    title: 'Aprende a usar el Hook `useMemo`',
    summary: 'Descubre cómo optimizar el rendimiento de tu aplicación React memorizando valores costosos.',
    date: '05 de julio de 2025',
    author: 'Elena Ramírez',
    slug: 'aprende-usememo-hook',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl min-h-screen my-24">
      <header className="py-10 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Nuestro Blog</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Artículos y tutoriales sobre React, Next.js y el ecosistema.
        </p>
      </header>

      <main className="mt-12 divide-y divide-gray-200 dark:divide-gray-700">
        {blogPosts.map((post) => (
          <article key={post.slug} className="py-12">
            <Link href={`/blog/${post.slug}`} className="group block">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors duration-200">
                {post.title}
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {post.summary}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <span>•</span>
                <span>Por {post.author}</span>
              </div>
            </Link>
          </article>
        ))}
      </main>
    </div>
  );
}