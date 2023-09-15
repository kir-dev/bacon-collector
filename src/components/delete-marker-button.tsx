import { useState } from 'react'
import Button from '@/components/button'
import axios from 'axios'
import { useMutation } from 'react-query'

export function DeleteMarkerButton() {
  const [askedForConfirmation, setAskedForConfirmation] = useState(false)
  const deleteMutation = useMutation({
    mutationFn: () => axios.delete('api/location')
  })
  return (
    <Button
      variant="danger"
      size="large"
      className="absolute top-0 right-0 m-4 shadow-2xl text-white"
      onClick={() => {
        if (askedForConfirmation) {
          deleteMutation.mutate()
        }
        setAskedForConfirmation(!askedForConfirmation)
      }}
    >
      {askedForConfirmation ? 'Biztos?' : 'Markerek törlése'}
    </Button>
  )
}

async function deleteMarkers() {
  return
}
