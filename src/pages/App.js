import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Recipe from "./Recipe.jsx";
import More from "./More.jsx";
import "../styles.css";
import "../styles2.css";

function App() {
  const [showElement, setShowElement] = useState(false);

  const toggleMenu = (show) => {
    setShowElement(show);
  };

  const handleDivClick = (e) => {
    if (!e.target.closest(".togg")) {
      setShowElement(false);
    }
  };

  return (
    <div className="app-container" onClick={handleDivClick}>
      <header>
        <div className="logo">
          <Link to="/" className="logo-name">
            Wood<span>Recipe</span>
          </Link>
        </div>
        <div className="togg" style={{ right: showElement ? "0" : "-200px" }}>
          <nav className="nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/recipe">
              Recipe
            </Link>
            <Link className="nav-link" to="/add-recipe">
              Add Recipe
            </Link>
            <i className="close" onClick={() => toggleMenu(false)}>
              &times;
            </i>
          </nav>
          <div className="search">
            <input
              type="search"
              placeholder="Search"
              name="recipe"
              className="recipe"
            />
          </div>
        </div>
        <i
          className="open"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu(true);
          }}
        >
          &equiv;
        </i>
      </header>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/add-recipe" element={<More />} />
        </Routes>
      </div>

      <footer className="footer">
        <div className="f-nav">
          <Link to="/" className="logo-name">
            Wood<span>Recipe</span>
          </Link>
          <p>Most trusted and reliable</p>
        </div>
        <div className="f-nav">
          <h2>Menu</h2>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/recipe">
            Recipe
          </Link>
          <Link className="nav-link" to="/add-recipe">
            Add Recipe
          </Link>
        </div>
        <div className="nav-link"></div>
      </footer>
    </div>
  );
}

export default App;
