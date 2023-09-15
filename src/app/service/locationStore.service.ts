import { LocationBody, LocationItem } from '@/types'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class LocationStoreService {
  public static async getLocations(): Promise<LocationItem[]> {
    return prisma.locationItem.findMany()
  }

  public static async addLocation({ token, ...location }: LocationBody) {
    const timestamp = new Date()

    const existingLocation = await prisma.locationItem.findFirst({
      where: {
        token
      }
    })

    if (existingLocation) {
      await prisma.locationItem.update({
        where: {
          token
        },
        data: {
          ...location,
          timestamp
        }
      })
    } else {
      const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`
      await prisma.locationItem.create({
        data: {
          ...location,
          token,
          color,
          timestamp
        }
      })
    }
  }
}

export default LocationStoreService
