
// API route for fetching all recipes

import prisma from "@lib/prisma" 

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
