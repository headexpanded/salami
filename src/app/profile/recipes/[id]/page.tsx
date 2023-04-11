import Link from "next/link";
import { RecipeSettings } from "../../../../../Components/Shared/RecipeSettings";

type RecipePageProps = {
  params: {
    id: number;
  };
};

const RecipePage = ({ params: { id } }: RecipePageProps) => {
  return (
    <div className="card">
      <h3>Settings</h3>
      <RecipeSettings recipeId={id} />
      <div className="links">
        <Link href="/profile/recipes" className="btn">
          Close
        </Link>
        <Link href="/" className="btn">
          Use This Recipe
        </Link>
      </div>
    </div>
  );
};
export default RecipePage;