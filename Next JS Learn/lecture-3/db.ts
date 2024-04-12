import { PrismaClient } from '@prisma/client'

console.log("here1")

const prismaClientSingleton = () => {
    console.log("here2")
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
