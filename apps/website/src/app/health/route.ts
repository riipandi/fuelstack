import { type NextRequest, NextResponse } from 'next/server'
import { ServerRuntime } from 'next/types'

export const runtime: ServerRuntime = 'edge'
export const revalidate = 3600

export async function GET(_req: NextRequest) {
  return NextResponse.json({ message: 'All is well' }, { status: 200 })
}
