import LocationStoreService from '@/service/locationStore.service'
import { LocationBody } from '@/types'
import { NextResponse } from 'next/server'

export async function DELETE() {
  await LocationStoreService.deleteMutations()
  return NextResponse.json({ status: 'OK' })
}

export async function POST(request: Request) {
  const body = (await request.json()) as LocationBody
  await LocationStoreService.addLocation(body)
  return NextResponse.json({ group: 'Global', status: 'OK' })
}

export async function GET() {
  const locations = await LocationStoreService.getLocations()
  return NextResponse.json(locations)
}
