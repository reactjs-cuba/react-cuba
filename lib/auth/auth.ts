// import NextAuth from "next-auth";
// import { SupabaseAdapter } from "@auth/supabase-adapter";
// import jwt from "jsonwebtoken";

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers: [],
//   adapter: SupabaseAdapter({
//     url: process.env.NEXT_PUBLIC_SUPABASE_URL! ?? "",
//     secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY! ?? "",
//   }),
//   callbacks: {
//     async session({ session, user }) {
//       const signingSecret = process.env.SUPABASE_JWT_SECRET;
//       if (signingSecret) {
//         const payload = {
//           aud: "authenticated",
//           exp: Math.floor(new Date(session.expires).getTime() / 1000),
//           sub: user.id,
//           email: user.email,
//           role: "authenticated",
//         };
//         // 👉 Cambia 'sessionToken' por 'supabaseAccessToken'
//         session.supabaseAccessToken = jwt.sign(payload, signingSecret);
//       }
//       return session;
//     },
//   },
// });

// // También necesitas extender el tipo de sesión para TypeScript
// declare module "next-auth" {
//   interface Session {
//     supabaseAccessToken?: string;
//   }
// }
