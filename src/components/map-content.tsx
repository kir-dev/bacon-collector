import { useLocationItems } from '@/hooks/useLocationItems'
import { Map } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'
import React from 'react'

export function MapContent() {
  const locations = useLocationItems()
  return <div className='h-screen'>
    <div>{JSON.stringify(locations.data)}</div>
    <Map
      provider={osm}
      defaultCenter={[47.4979, 19.0402]}
      defaultZoom={11} />
  </div>
}
