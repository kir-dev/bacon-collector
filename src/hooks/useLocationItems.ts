import { LocationItem } from '@/types'
import axios from 'axios'
import { useQuery } from 'react-query'

export function useLocationItems() {
  return useQuery<LocationItem[], Error>(
    'locations',
    async () => {
      const response = await axios.get('/api/location')
      return response.data
    },
    { refetchInterval: 5000 }
  )
}
