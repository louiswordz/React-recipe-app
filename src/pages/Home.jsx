import React from "react";
import img from "../asset/img.png";
import recipes from "../components/recipes"; // Assuming you have a data file with recipes

const Home = () => {
  return (
    <main className="container">
      <div className="hero">
        <h1 id="intro">
          We provide the best <br /> recipe for your kitchen
        </h1>
        <p id="para">
          Every meal tells a story of culinary mastery
          <br /> dedicated and passionate craftsmanship
        </p>
        <div className="intro-nav">
          <button className="btn">
            <a href="#">Order</a>
          </button>
          <span id="text">Watch</span>
          <div id="play">&#9654;</div>
        </div>
      </div>
      <div className="hero-text">
        <div className="Chef">
          <p id="pepper">
            <span className="pepper-emoji">🌶</span>
            Hot spicy food
          </p>
          <figure>
            <img src={img} alt="A chef cooking" />
          </figure>
        </div>
        <div className="food-menu">
          {recipes.map((rec) => (
            <div className="recipe-sample" key={rec.id}>
              <h2>{rec.name}</h2>
              <img src={rec.img} alt={rec.desc} />
              <div className="rate">
                <p id="p-rating">{rec.rating}</p>
                <p id="p-price">{rec.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
