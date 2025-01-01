import React from "react";
import { useState } from "react";
import Flavor from "../components/Main-recipe";

export const Recipe = () => {
  const [Flavy, setFlavy] = useState([...Flavor]);
  const handleDelete = (index) => {
    setFlavy((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <main className="container">
      <div className="recipe-heading">
        <p>We have got you covered</p>
        <h2>Popular Category</h2>
      </div>
      <div className="main-recipe">
        {Flavor.map((recipe, index) => (
          <article key={index} className="recipe-card">
            <h2>{recipe.meal}</h2>
            <img src={recipe.img} alt={`Image of ${recipe.meal}`} />
            <div className="flip">
              <p>
                <strong>Ingredients:</strong> {recipe.ingredient}
              </p>
              <p>
                <strong>Size:</strong> {recipe.size}
              </p>
              <p>
                <strong>Price:</strong> {recipe.price}
              </p>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleDelete(index)}>Details</button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};
export default Recipe;
