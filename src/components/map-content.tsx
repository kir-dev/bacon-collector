import { useLocationItems } from '@/hooks/useLocationItems'

export function MapContent() {
  const locations = useLocationItems()
  return <div>{JSON.stringify(locations.data)}</div>
}
