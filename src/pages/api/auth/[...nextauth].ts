import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { InitOptions } from 'next-auth'
import Adapters from 'next-auth/adapters'
import Providers from 'next-auth/providers'

export default (req: NextApiRequest, res: NextApiResponse) => {
  let prisma: PrismaClient

  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient()
    }
    prisma = global.prisma
  }

  return NextAuth(req, res, {
    session: {
      jwt: true
    },
    providers: [
      Providers.Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),
      /* Providers.Email({
        server: process.env.MAIL_SERVER,
        from: '<no-reply@example.com>'
      }), */
    ],
    database: process.env.DATABASE_URL,
    adapter: Adapters.Prisma.Adapter({ prisma })
  } as InitOptions)
}