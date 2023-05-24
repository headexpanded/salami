// Calls all of a user's recipes from the db

import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { getRecipeByUserId } from '@/lib/recipes';
import Link from 'next/link';

interface Recipe {
  id: string | null;
  name: string;
  description: string;
  createdAt: Date | null;
  userId: string;
}

async function fetchRecipes(userId: string) {
  const recipes = await getRecipeByUserId(userId);
  return recipes;
}

const Recipe = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/signin?callbackUrl=/recipes');
  }
  const recipes = await fetchRecipes(session?.user?.id);
  return (
    <ul className="recipe-list">
      {recipes.recipes?.map((recipe: Recipe) => (
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
