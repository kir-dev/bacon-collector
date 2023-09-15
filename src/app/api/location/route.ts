import {LocationBody} from "@/types";
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json() as LocationBody
    console.log('POST request received', body)
    return NextResponse.json( {group: "Global", status: "OK"})
}