"use client";
import React, { useState } from "react";

const defaultRecipe: Recipe = {
  name: "Dan's Best Recipe",
};
interface Recipe {
  name: string;
}

export const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState("");

  async function postRecipe(recipeName: string): Promise<Recipe["name"]> {
    try {
      const response = await fetch("/api/db/createRecipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name: recipeName }),
      });
      const recipe: Recipe["name"] = await response.json();
      console.log(recipe);
      return recipe;
    } catch (error) {
      console.log("There was an error:", error);
      const recipe: Recipe["name"] = defaultRecipe["name"];
      return recipe;
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const recipe: Recipe["name"] = await postRecipe(recipeName);
    console.log("The recipe name is " + recipe);
  };

  return (
    <>
      <section>
        <h2>Add New Recipe</h2>
        <form className="center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name your recipe"
            value={recipeName}
            onChange={(event) => setRecipeName(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <style jsx>{``}</style>
    </>
  );
};
