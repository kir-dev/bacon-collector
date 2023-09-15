'use client'

import { MapContent } from '@/components/map-content'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function MapPage() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <MapContent />
    </QueryClientProvider>
  )
}
