import React from "react";
import "../../../styles/globals.css";

const recipes = {
  1: {
    name: "My Bum",
    description: "Very hot",
    extras: ["Chili", "Paprika"],
  },
};

export default function RecipePage() {
  const recipe = recipes[1];
  return (
    <>
      
        <div className="sub-container animated fadeInDown">
          <h3>Your Recipes:</h3>
          <div className="sub-container-detail">
            <p>Name: </p>
            <p>Desc: </p>
            <p>Extras:</p>
          </div>
        </div>
      
    </>
  );
}
