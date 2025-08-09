

import { Database } from '@/supabase/database.types';
import { createClient } from '@supabase/supabase-js';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

export function useSupabaseClient() {
  const { data: session } = useSession();

  // Se usa useMemo para evitar recrear el cliente en cada renderizado
  return useMemo(() => {
    const supabaseAccessToken = session?.supabaseAccessToken;

    if (!supabaseAccessToken) {
      // Si no hay token, devuelve un cliente anónimo
      return createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );
    }
    
    // Devuelve un cliente autenticado con el token de NextAuth
    return createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        global: {
          headers: {
            Authorization: `Bearer ${supabaseAccessToken}`,
          },
        },
      }
    );
  }, [session]);
}