import { ContactFormSchema } from '@/lib/schemas/contact-form'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const validationResult = ContactFormSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
        },
        { status: 400 }
      )
    }

    const validatedData = validationResult.data

    const discordPayload = {
      content: `**New Contact Form Submission**\n\n**Name:** ${validatedData.name}\n**Email:** ${validatedData.email}\n**Message:**\n${validatedData.message}`,
      username: "Portfolio Contact"
    }
    
    const response = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordPayload),
    })

    if (!response.ok) {
      console.error('Discord webhook failed:', response.status, response.statusText)
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }
    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}