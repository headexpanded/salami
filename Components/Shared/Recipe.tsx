
import React from "react";
import { PrismaClient } from "@prisma/client";

interface Recipe {
  id: number | null;
  name: string;
  description: string;
  createdAt: Date | null;
}

const prisma = new PrismaClient();

async function fetchRecipes(): Promise<Recipe[]> {
  try {
    const recipes = await prisma.recipe.findMany();
    if (!recipes) {
      throw new Error(`No recipes found`);
    }
    return recipes;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`Error fetching recipe: + ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

export default async function Recipe () {
  const recipe = await fetchRecipes();
  return (
    
    <div>
      {
        recipe.map((recipe: Recipe) => (
          <div key={recipe.id}>
            <h3>Recipe: {recipe.name}</h3>
            <p>Desc: {recipe.description} </p>
          </div>
        ))
      }
    </div>
  );
};

