export type LocationBody = {
  accuracy: number
  latitude: number
  longitude: number
  altitude: number
  token: string
}

export type LocationItem = {
  timestamp: Date
  color: string
} & LocationBody
