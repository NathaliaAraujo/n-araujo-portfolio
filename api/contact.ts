import type { VercelRequest, VercelResponse } from '@vercel/node'

const NAME_MAX_LENGTH = 100
const MESSAGE_MAX_LENGTH = 5000
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface ContactPayload {
  name: string
  email: string
  message: string
  /** Honeypot field. Must stay empty — hidden from real users via CSS, only bots fill it in. */
  company: string
}

type FieldErrors = Partial<Record<keyof Omit<ContactPayload, 'company'>, string>>

function validate(body: Partial<ContactPayload>): FieldErrors {
  const errors: FieldErrors = {}

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  if (!name) {
    errors.name = 'Informe seu nome.'
  } else if (name.length > NAME_MAX_LENGTH) {
    errors.name = `Nome deve ter no máximo ${NAME_MAX_LENGTH} caracteres.`
  }

  const email = typeof body.email === 'string' ? body.email.trim() : ''
  if (!email) {
    errors.email = 'Informe seu e-mail.'
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Informe um e-mail válido.'
  }

  const message = typeof body.message === 'string' ? body.message.trim() : ''
  if (!message) {
    errors.message = 'Informe uma mensagem.'
  } else if (message.length > MESSAGE_MAX_LENGTH) {
    errors.message = `Mensagem deve ter no máximo ${MESSAGE_MAX_LENGTH} caracteres.`
  }

  return errors
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Método não permitido.' })
  }

  const body = (req.body ?? {}) as Partial<ContactPayload>

  // Honeypot: a real visitor never sees or fills this field (hidden via CSS
  // in the form). Any non-empty value here means it was filled by a bot.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    // Respond as if it succeeded so bots don't learn to avoid the trap.
    return res.status(200).json({ ok: true })
  }

  const errors = validate(body)
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ error: 'Dados inválidos.', fields: errors })
  }

  const submission = {
    name: body.name!.trim(),
    email: body.email!.trim(),
    message: body.message!.trim(),
  }

  try {
    // TODO: integrar com um serviço de envio de e-mail (ex: Resend ou SendGrid)
    // e remover o log abaixo, que hoje só serve para confirmar em desenvolvimento
    // que os dados validados chegaram até aqui.
    //
    // Exemplo com Resend (npm install resend):
    //
    //   import { Resend } from 'resend'
    //   const resend = new Resend(process.env.RESEND_API_KEY)
    //   await resend.emails.send({
    //     from: process.env.CONTACT_FROM_EMAIL!,
    //     to: process.env.CONTACT_TO_EMAIL!,
    //     replyTo: submission.email,
    //     subject: `Novo contato de ${submission.name}`,
    //     text: submission.message,
    //   })
    //
    // Variáveis de ambiente necessárias (ver .env.example):
    //   RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
    console.info('Novo contato recebido (envio de e-mail ainda não implementado):', {
      name: submission.name,
      email: submission.email,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Falha ao processar contato:', error)
    return res.status(500).json({ error: 'Não foi possível enviar sua mensagem. Tente novamente.' })
  }
}
