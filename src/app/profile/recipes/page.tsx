import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";
import "@/styles/globals.css";

// Lists all existing recipes using the Recipe component

const RecipesPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <div className="sub-container">
        <div className="links">
          <h2>Hello {session?.user?.name}</h2>
          <Link href="/">
            <button className="btn">Add New Recipe</button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default RecipesPage;
