'use client'
import { getQueryClient } from '@/lib/core/tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type * as React from 'react'

export default function ReactQueryProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}