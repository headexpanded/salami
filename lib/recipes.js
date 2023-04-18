import prisma from ".";

// get an existing recipe
export async function getRecipeById(id) {
  try {
    const recipe = await prisma.recipe.findUnique({
      where: { id },
    });
    return { recipe };
  } catch (error) {
    return { error };
  }
}
