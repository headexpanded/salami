import prisma from "../../../../lib/prisma";
import bodyParser from "body-parser";

export default async function Handler(req, res) {
  bodyParser.json()(req, res, async () => {
    const { name: recipeName } = req.body;
    console.log("The createRecipe name is " + recipeName);
    try {
      const newRecipe = await prisma.Recipe.create({
        data: { name: recipeName },
      });
      res.json({ name: newRecipe["name"], error: null });
    } catch (error) {
      res.json({ error: error.message + " Hello Mark", recipeName: null });
    }
  });
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};
