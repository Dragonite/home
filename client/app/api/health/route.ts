import { getApiUrl } from '@/lib/utils'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch(`${getApiUrl()}/api/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Health check failed' },
        { status: 500 }
      )
    }
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}