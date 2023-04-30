import Link from "next/link";
import RecipeSettings from "./RecipeSettings";

type RecipePageProps = {
  params: {
    id: string;
  };
};

const RecipePage = ({ params: { id } }: RecipePageProps) => {
  console.log("The recipe id is: ", id);
  return (
    <div className="card">
      <h3>Settings</h3>
      <RecipeSettings recipeId={id} />
      <div className="links">
        <Link href="/profile/recipes" className="btn">
          Back
        </Link>
        <Link href="/controllers" className="btn">
          Use This Recipe
        </Link>
      </div>
    </div>
  );
};
export default RecipePage;
