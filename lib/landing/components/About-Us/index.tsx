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
    <div className="gap-3 py-30 px-20 grid grid-cols-1 md:grid-cols-2 dark:bg-background-darkest ">
      <div className="flex flex-col gap-5">
        <h2 className="text-6xl font-bold text-header-content">
          ¿Quiénes Somos?
        </h2>
        <div className="text-2xl flex flex-col gap-10 pt-10 text-content">
          <p>
            Conectamos con personas apasionadas por React y sus tecnologías
            relacionadas, compartimos conocimientos, aprendemos juntos y
            crecemos como comunidad.
          </p>
          <p>
            Somos una comunidad creada para explorar y compartir los últimos
            avances en React JS y sus derivados, incluyendo React Native, Redux,
            React-Bootstrap, Material UI y mucho más!
          </p>
          <span>Aprendemos, conectamos, crecemos e iteramos</span>
        </div>
      </div>

      <div className="px-5">
        <h2 className="text-6xl font-bold text-header-content">
          Nuestros desarrolladores
        </h2>
        <div className="grid grid-cols-10 gap-3 place-items-center mt-10">
          {developers.map((developer, index) => (
            <img
              key={index}
              className="w-full aspect-square rounded-full border-2 border-white dark:border-gray-800"
              src={developer.avatarUrl}
              alt={developer.name}
              width={48}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
