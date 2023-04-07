"use client";
import React, { useState } from "react";

const defaultRecipe: Recipe = {
  name: "Dan's Best Recipe",
  initialTemp: 20,
};
interface Recipe {
  name: string;
  description?: string;
  initialTemp?: number;
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
    postRecipe(recipeName);
  };

  return (
    <>
      <section>
        <h1>Add New Recipe</h1>
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
      <style jsx>{`
      h1{
        font-size: 1rem;
        padding-top: 1rem;
      }`}</style>
    </>
  );
};
