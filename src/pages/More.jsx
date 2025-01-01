import React from "react";

const More = () => {
  return (
    <main className="container">
      <div className="addmore">
        <h2>Add Recipe</h2>
      </div>
      <div className="recipe-form">
        <form>
          <input type="text" name="meal" id="meal" />
          <input type="file" name="meal" id="meal" />
          <input type="text" name="meal" id="meal" />
          <input type="text" name="meal" id="meal" />
          <input type="submit" value='add more' id="meal" />
        </form>
      </div>
    </main>
  );
};

export default More;
