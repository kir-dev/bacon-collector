import { MapMarker } from '@/components/map-marker'
import { useLocationItems } from '@/hooks/useLocationItems'
import { Map, Marker } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'
import React, { useState } from 'react'
import { MapItemList } from '@/components/map-item-list'
import type { Point } from 'pigeon-maps'

const ChipFocusedZoom = 16

export function MapContent() {
  const locations = useLocationItems()
  const [center, setCenter] = useState<Point>([47.4979, 19.0402])
  const [zoom, setZoom] = useState(11)

  return (
    <div className="h-screen relative overflow-y-hidden">
      <Map provider={osm} center={center} zoom={zoom}>
        {locations.data?.map((location) => (
          <Marker key={location.token} hover width={200} height={3} anchor={[location.latitude, location.longitude]}>
            <MapMarker color={location.color} text={location.token} />
          </Marker>
        ))}
      </Map>
      <MapItemList
        onItemSelected={(item) => {
          setCenter([item.latitude, item.longitude])
          setZoom(ChipFocusedZoom)
        }}
      />
    </div>
  )
}
