interface Props {
  text: string
  color: string
}

export function MapMarker({ text, color }: Props) {
  return (
    <div className="w-[200px] flex items-center flex-col gap-2">
      <div className="w-5 h-5 rounded-full border-2 border-white" style={{ backgroundColor: color }} />
      <div className="max-w-full text-xs text-center px-3 py-1 rounded-full bg-gray-900 text-white w-fit">
        <p className="truncate">{text}</p>
      </div>
    </div>
  )
}
