import prisma from './prisma.ts';

// get all of a user's recipes
export async function getRecipeByUserId(userId) {
  try {
    const recipes = await prisma.recipe.findMany({
      where: { userId },
    });
    return { recipes };
  } catch (error) {
    return { error };
  }
}
