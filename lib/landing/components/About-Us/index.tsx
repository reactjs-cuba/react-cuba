import React from "react";

const developers = [
  {
    name: "Juan Pérez",
    avatarUrl: "https://ui-avatars.com/api/?name=Juan+Pérez&background=random",
  },
  {
    name: "Ana Gómez",
    avatarUrl: "https://ui-avatars.com/api/?name=Ana+Gómez&background=random",
  },
  {
    name: "Luis Castro",
    avatarUrl: "https://ui-avatars.com/api/?name=Luis+Castro&background=random",
  },
  {
    name: "Elena Ramírez",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Elena+Ramírez&background=random",
  },
  {
    name: "Juan Pérez",
    avatarUrl: "https://ui-avatars.com/api/?name=Juan+Pérez&background=random",
  },
  {
    name: "Ana Gómez",
    avatarUrl: "https://ui-avatars.com/api/?name=Ana+Gómez&background=random",
  },
  {
    name: "Luis Castro",
    avatarUrl: "https://ui-avatars.com/api/?name=Luis+Castro&background=random",
  },
  {
    name: "Elena Ramírez",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Elena+Ramírez&background=random",
  },
  {
    name: "Juan Pérez",
    avatarUrl: "https://ui-avatars.com/api/?name=Juan+Pérez&background=random",
  },
  {
    name: "Ana Gómez",
    avatarUrl: "https://ui-avatars.com/api/?name=Ana+Gómez&background=random",
  },
  {
    name: "Luis Castro",
    avatarUrl: "https://ui-avatars.com/api/?name=Luis+Castro&background=random",
  },
  {
    name: "Elena Ramírez",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Elena+Ramírez&background=random",
  },
  {
    name: "Juan Pérez",
    avatarUrl: "https://ui-avatars.com/api/?name=Juan+Pérez&background=random",
  },
  {
    name: "Ana Gómez",
    avatarUrl: "https://ui-avatars.com/api/?name=Ana+Gómez&background=random",
  },
  {
    name: "Luis Castro",
    avatarUrl: "https://ui-avatars.com/api/?name=Luis+Castro&background=random",
  },
  {
    name: "Elena Ramírez",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Elena+Ramírez&background=random",
  },
  {
    name: "Juan Pérez",
    avatarUrl: "https://ui-avatars.com/api/?name=Juan+Pérez&background=random",
  },
  {
    name: "Ana Gómez",
    avatarUrl: "https://ui-avatars.com/api/?name=Ana+Gómez&background=random",
  },
  {
    name: "Luis Castro",
    avatarUrl: "https://ui-avatars.com/api/?name=Luis+Castro&background=random",
  },
  {
    name: "Elena Ramírez",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Elena+Ramírez&background=random",
  },
];

export const AboutUsScetion = () => {
  return (
    <div className="mx-auto p-4 gap-3 flex flex-col items-center justify-center h-96 bg-[var(--card)]">
       <h2 className="text-4xl font-bold text-gray-900 dark:text-white">¿QUIÉNES SOMOS?</h2>
      <p>
        Conectamos con personas apasionadas por React y sus tecnologías
        relacionadas, compartimos conocimientos, aprendemos juntos y crecemos
        como comunidad.
      </p>
      <p>
        Somos una comunidad creada para explorar y compartir los últimos avances
        en React JS y sus derivados, incluyendo React Native, Redux,
        React-Bootstrap, Material UI y mucho más!
      </p>
      <span>Aprendemos, conectamos, crecemos e iteramos</span>

      <h2 className="mt-6 text-xl font-semibold">Nuestros Desarrolladores</h2>
      <div className="grid grid-cols-10 ">
        {developers.map((developer, index) => (
          <img
            key={index}
            className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800"
            src={developer.avatarUrl}
            alt={developer.name}
            width={48}
            height={48}
          />
        ))}
      </div>
    </div>
  );
};