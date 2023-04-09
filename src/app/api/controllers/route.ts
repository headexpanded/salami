// API route for fetching all controllers

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const controllers = await prisma.controller.findMany();
    return new Response(JSON.stringify(controllers));
  } catch (error: unknown) {
    throw new Error(`Error fetching recipe: + ${error}`);
  } finally {
    prisma.$disconnect();
  }
}
