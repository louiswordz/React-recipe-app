import React from "react";

const More = () => {
  return (
    <main className="container">
      <div className="addmore">
        <h2>Add Recipe</h2>
      </div>
      <div className="recipe-form">
        <form className="form-element">
          <input
            type="text"
            name="meal"
            id="meals"
            className="meal"
            placeholder="Enter the Recipe"
          />
          <input
            type="url"
            name="img-url"
            id="img-url"
            className="meal"
            placeholder="Enter the image url"
          />
          <input
            type="text"
            name="Ingredient"
            id="Ingredient"
            className="meal"
            placeholder="Enter the Ingredient"
          />
          <input
            type="text"
            name="size"
            id="size"
            className="meal"
            placeholder="Enter the size"
          />
          <input
            type="text"
            name="price"
            id="price"
            className="meal"
            placeholder="Enter the price"
          />
          <textarea
            className="meal"
            placeholder="Enter the recipe description"
          ></textarea>

          <input type="submit" value="add more" id="submit" className="meal" />
        </form>
      </div>
    </main>
  );
};

export default More;
