//import { PrismaClient } from '@prisma/client'
import axios from 'axios'
import { getCategory } from 'utils/category'
import superjson from 'superjson'

export interface Service {
  id: number,
  title: string,
  category: string,
  description: string,
  value: number,
  createdAt: Date,
  whatsapp: string
  user: {
    name: string 
    email: string 
    image: string
  }
}

export type ServiceIndexValue = 'community' | 'paid'

interface ServiceIndexParams {
  category?: number
  value?: ServiceIndexValue
}

export interface ServiceCreateParams {
  title: string 
  description: string
  category: number
  value: number 
  whatsapp: string
}

/* export async function indexServices(params?: ServiceIndexParams) {
  const { category, value } = params 
  const categoryName = category ? getCategory(category).name : undefined
  const prisma = new PrismaClient()
  const services = await prisma.service.findMany({
    where: {
      category: categoryName,
      value: value && (value === 'community' ? { equals: 0 } : { gt: 0 })
    }
  })
  prisma.$disconnect()
  return superjson.serialize(services).json
}
 */
export async function create(params: ServiceCreateParams): Promise<void> {
  await axios.post<Service>('/api/services/new', params)
}

/* class Services {
  public async index(params?: ServiceIndexParams) {
    const { category, value } = params 
    const categoryName = category ? getCategory(category).name : undefined
    const prisma = new PrismaClient()
    const services = await prisma.service.findMany({
      where: {
        category: categoryName,
        value: value && (value === 'community' ? { equals: 0 } : { gt: 0 })
      }
    })
    prisma.$disconnect()
    return superjson.serialize(services).json
  }

  public async create(params: ServiceCreateParams): Promise<void> {
    await axios.post<Service>('/api/services/new', params)
  }
}  */

//export default new Services()