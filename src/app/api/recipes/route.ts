
// API route for fetching all recipes

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); 

export async function GET() {
  try {
    const recipes = await prisma.recipe.findMany();
    return new Response(JSON.stringify(recipes));
  } catch (error: unknown) {
    throw new Error(`Error fetching recipe: + ${error}`);
  } finally {
    prisma.$disconnect();
  }
}
