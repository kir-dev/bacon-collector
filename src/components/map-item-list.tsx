import { useLocationItems } from '@/hooks/useLocationItems'
import type { LocationItem } from '@/types'
import { ItemChip } from '@/components/item-chip'

interface MapItemListProps {
  onItemSelected: (item: LocationItem) => void
}

export function MapItemList({ onItemSelected }: MapItemListProps) {
  const locations = useLocationItems()

  const data = locations.data
  if (!data?.length) {
    return null
  }

  return (
    <div
      className="h-20 bg-white absolute bottom-0 mx-auto left-0 right-0 rounded-t-3xl shadow-2xl
                 lg:w-1/2 w-full max-w-7xl flex flex-row items-center overflow-x-auto gap-4 p-4 overflow-y-hidden"
    >
      {data.map((location) => (
        <ItemChip onItemSelected={() => onItemSelected(location)} key={location.token} token={location.token} color={location.color} />
      ))}
    </div>
  )
}
