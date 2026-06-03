import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const payloadSchema = z.object({
  name: z.string().trim().min(1),
  surname: z.string().trim().optional(),
  email: z.string().trim().email(),
  phone: z.string().trim().min(7),
  xm_account_id: z.string().trim().min(4),
})

type VerifyPayload = z.infer<typeof payloadSchema>

export async function POST(request: NextRequest) {
  let body: unknown

  try {
    body = await request.json()
  } catch (error) {
    return NextResponse.json({ message: 'Invalid JSON payload' }, { status: 400 })
  }

  const result = payloadSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json({ message: 'Invalid verification data', errors: result.error.format() }, { status: 422 })
  }

  const payload = result.data as VerifyPayload

  // Replace this with real verification logic:
  // - save to a database
  // - call an external API
  // - queue an onboarding task
  console.log('[verify-xm] incoming submission', payload)

  return NextResponse.json({ success: true, message: 'XM verification submitted' })
}
