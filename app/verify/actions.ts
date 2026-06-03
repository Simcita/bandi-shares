'use server'

import { z } from 'zod'

const verifySchema = z.object({
  xmAccountId: z
    .string()
    .trim()
    .min(4, { message: 'Enter a valid XM Account ID' })
    .max(40, { message: 'XM Account ID must be under 40 characters' })
    .regex(/^[A-Za-z0-9-]+$/, { message: 'Only letters, numbers and dashes allowed' }),
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full name is required' })
    .max(120, { message: 'Full name must be under 120 characters' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Enter a valid email' })
    .max(255, { message: 'Email must be under 255 characters' }),
  whatsapp: z
    .string()
    .trim()
    .min(7, { message: 'Enter a valid WhatsApp number' })
    .max(20, { message: 'WhatsApp number must be under 20 characters' })
    .regex(/^[+\d\s()-]+$/, { message: 'Only digits, spaces, +, -, ( ) allowed' }),
})

type VerifyForm = z.infer<typeof verifySchema>

export async function verify_xm_submission(form: VerifyForm) {
  const verified = verifySchema.parse(form)

  const spaceIndex = verified.fullName.indexOf(' ')
  const name    = spaceIndex === -1 ? verified.fullName : verified.fullName.slice(0, spaceIndex)
  const surname = spaceIndex === -1 ? ''               : verified.fullName.slice(spaceIndex + 1)

  const backendUrl = process.env.BACKEND_URL ?? 'http://localhost:3000'

  const res = await fetch(`${backendUrl}/verify-xm`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      surname,
      email:          verified.email,
      phone:          verified.whatsapp,
      xm_account_id: verified.xmAccountId,
    }),
  })

  let payload: unknown

  try {
    payload = await res.json()
  } catch (error) {
    throw new Error('Verification endpoint returned an invalid response')
  }

  if (!res.ok) {
    const message = typeof payload === 'object' && payload !== null && 'message' in payload
      ? (payload as { message?: string }).message
      : 'Verification failed'

    throw new Error(message ?? 'Verification failed')
  }

  return payload
}
