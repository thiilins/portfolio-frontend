import { NextResponse } from 'next/server'
export async function GET(_req: Request) {
  return NextResponse.json({ message: 'Hello World' }, { status: 200 })
}
