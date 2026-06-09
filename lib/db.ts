import 'dotenv/config'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@/prisma/generated/client'


const connectionString = `${process.env.DATABASE_URL}`

// 1. Create the pool and adapter
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

// 2. Define the singleton function
const prismaClientSingleton = () => {
  return new PrismaClient({ adapter })
}

// 3. Setup global type safety
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

// 4. Export 'db'. DO NOT call it 'client' inside the object.
export const db = globalForPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db