import { MapMarker } from '@/components/map-marker'
import { useLocationItems } from '@/hooks/useLocationItems'
import { Map, Marker } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'
import React from 'react'

export function MapContent() {
  const locations = useLocationItems()
  return (
    <div className="h-screen">
      <Map provider={osm} defaultCenter={[47.4979, 19.0402]} defaultZoom={11}>
        {locations.data?.map((location) => (
          <Marker key={location.token} hover width={200} height={3} anchor={[location.latitude, location.longitude]}>
            <MapMarker color={location.color} text={location.token} />
          </Marker>
        ))}
      </Map>
    </div>
  )
}
