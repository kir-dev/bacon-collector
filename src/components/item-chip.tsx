interface ItemChipProps {
  onItemSelected: () => void
  token: string
  color: string
}

export function ItemChip({ token, color, onItemSelected }: ItemChipProps) {
  return (
    <button
      onClick={onItemSelected}
      className="flex flex-row items-center justify-center overflow-x-auto px-4 py-2 shadow-md shrink-0 rounded-full"
    >
      <div style={{ background: color }} className="w-4 h-4 rounded-full mr-2" />
      <span>{token}</span>
    </button>
  )
}