// Calls all recipes from the API router
// Puts them in individual list items.

import Link from "next/link";

interface Recipe {
  id: number | null;
  name: string;
  description: string;
  createdAt: Date | null;
}

async function fetchRecipes(): Promise<Recipe[]> {
  const response = await fetch("http://localhost:3000/api/recipes");
  const recipes: Recipe[] = await response.json();
  return recipes;
}

const Recipe = async () => {
  const recipes = await fetchRecipes();
  return (
    <ul className="recipe-list">
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link href={`/profile/recipes/${recipe.id}`}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Recipe;
