import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, description, value, category, whatsapp } = req.body
  const prisma = new PrismaClient()
  const session = await getSession({ req })

  if (!session)
    return res.status(401).json({ error: 'Must be authenticated.' })

  const service = await prisma.service.create({
    data: {
      title,
      description,
      value,
      whatsapp,
      category,
      user: {
        connect: { email: session.user.email }
      }
    }
  })

  return res.status(201).json(service)
}