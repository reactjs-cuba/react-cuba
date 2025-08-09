import React from "react";

// Datos de ejemplo para los eventos
const events = [
  {
    title: "React Meetup de Mayo",
    date: "15 de mayo de 2025",
    time: "18:00 - 20:00",
    location: "Zoom",
    description: "Una sesión para hablar sobre las últimas novedades de React 19 y Next.js 15.",
    imageUrl: "https://images.unsplash.com/photo-1510511459019-5efa7729424e?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Workshop: Redux Toolkit",
    date: "25 de mayo de 2025",
    time: "10:00 - 13:00",
    location: "Oficinas de Acme Corp",
    description: "Taller práctico para aprender a gestionar el estado con Redux Toolkit.",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hackathon de React Native",
    date: "05 de junio de 2025",
    time: "09:00 - 17:00",
    location: "Evento en línea",
    description: "Colabora y crea una aplicación móvil en un solo día con React Native.",
    imageUrl: "https://images.unsplash.com/photo-1549692520-acc6669e2a86?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const EventScetion = () => {
  return (
    <div className="mx-auto p-8 text-center bg-[var(--background)]">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Próximos Eventos</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Únete a nuestros meetups y talleres para aprender, conectar y crecer.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="bg-[var(--card)] rounded-lg shadow-lg overflow-hidden">
            <img 
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {event.title}
              </h3>
              <div className="mt-4 text-gray-600 dark:text-gray-400">
                <p className="flex items-center gap-2">
                  <span>📅</span>
                  {event.date}
                </p>
                <p className="flex items-center gap-2">
                  <span>⏱️</span>
                  {event.time}
                </p>
                <p className="flex items-center gap-2">
                  <span>📍</span>
                  {event.location}
                </p>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};