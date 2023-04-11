import React from "react";
import Link from "next/link";
import "@/styles/globals.css";

// Lists all existing recipes using the Recipe component

export default function RecipesPage() {
  return (
    <>
      <main>
        <div className="sub-container">
          <div className="links">
            <Link href="/">
              <button className="btn">Add New Recipe</button>
            </Link>
            </div>
          </div>
      </main>
    </>
  );
}
