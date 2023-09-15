interface Props {
  text: string;
}

export function MapMarker({ text }: Props) {
  return (
    <div className='-translate-x-1/2 flex items-center flex-col gap-2'>
      <div className='w-5 h-5 bg-green-500 rounded-full border-2 border-white' />
      <div className='text-xs text-center px-3 py-1 rounded-full bg-gray-900 text-white w-fit'>
        <p>{text}</p>
      </div>
    </div>
  )
}
