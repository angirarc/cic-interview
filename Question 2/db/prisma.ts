import { PrismaClient } from '@prisma/client';

// prisma client singleton
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// prisma client instance
export const prisma = globalForPrisma.prisma || new PrismaClient();

// if not in production, set globalForPrisma.prisma to prisma client instance
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;