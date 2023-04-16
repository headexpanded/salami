
// API route for fetching all recipes
import { NextResponse } from "next/server";
import prisma from "@lib/prisma" 

export async function GET(request: Request) {
  try {
    const recipes = await prisma.recipe.findMany();
    return NextResponse.json(recipes);
  } catch (error: unknown) {
    throw new Error(`Error fetching recipe: + ${error}`);
  } finally {
    prisma.$disconnect();
  }
}
