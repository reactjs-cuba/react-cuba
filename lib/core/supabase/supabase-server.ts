// // lib/supabase.ts

// import { auth } from "@/lib/auth/auth";
// import { Database } from "@/supabase/database.types";
// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers";

// export async function createClientWithSession() {
//   const cookieStore = await cookies();
//   const session = await auth(); // 1. Obtiene la sesión de NextAuth de forma segura
//   const supabaseAccessToken = session?.supabaseAccessToken;

//   // 2. Verifica si el token de acceso existe antes de crear el cliente
//   if (!supabaseAccessToken) {
//     // Maneja el caso en que el usuario no está autenticado
//     console.error("Token de acceso de Supabase no encontrado en la sesión.");
//     return createServerClient<Database>(
//       process.env.NEXT_PUBLIC_SUPABASE_URL!,
//       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//       {
//         cookies: {
//           getAll: () => cookieStore.getAll(),
//           setAll: () => {}, // Simplifica setAll para este caso
//         },
//       }
//     );
//   }

//   // 3. Crea un cliente de Supabase del lado del servidor con el token de acceso para RLS
//   return createServerClient<Database>(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       global: {
//         headers: {
//           Authorization: `Bearer ${supabaseAccessToken}`,
//         },
//       },
//       cookies: {
//         getAll: () => cookieStore.getAll(),
//         setAll: (cookiesToSet) => {
//           try {
//             cookiesToSet.forEach(({ name, value, options }) =>
//               cookieStore.set(name, value, options)
//             );
//           } catch (e) {
//             // Esto puede ignorarse si usas un middleware para refrescar las sesiones
//           }
//         },
//       },
//     }
//   );
// }