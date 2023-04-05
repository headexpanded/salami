"use client";
import React, { useState } from "react";

export const AddRecipe = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const recipe = await fetch("/api/db/createRecipe", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
  };

  return (
    <>
      <section>
        <header>Add New Recipe</header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Recipe name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};
