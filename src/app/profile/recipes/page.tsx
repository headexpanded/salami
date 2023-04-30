import Link from 'next/link';
import '@/styles/globals.css';

// Lists all existing recipes using the Recipe component

const RecipesPage = async () => { 
  return (
    <main>
      <div className="sub-container">
        <div className="links">
          <Link href="/">
            <button className="btn">Add New Recipe</button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default RecipesPage;
