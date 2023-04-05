import prisma from "@/lib/prisma";

export default async function Handler(req, res) {
  const { name } = req.query;
  try {
    const newRecipe = await prisma.Recipe.create({
      data: { name },
    });
    res.json({ recipe: newRecipe, error: null });
  } catch (error) {
    res.json({ error: error.message, recipe: null });
  }
}
