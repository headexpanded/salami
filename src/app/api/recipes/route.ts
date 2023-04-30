
// API route for fetching all recipes
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma" 

export async function GET(userId: string) {
  try {
    const recipes = await prisma.recipe.findMany({
      where: {userId: userId},
    });
    return NextResponse.json({recipes}, {status: 200});
  } catch (error: unknown) {
    throw new Error(`Error fetching recipe: + ${error}`);
  } finally {
    prisma.$disconnect();
  }
}
