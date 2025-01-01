import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Recipe from "./Recipe";
import More from "./More";
import Detail from "./Detail";
import "../styles.css";
import "../styles2.css";

function App() {
  const [showElement, SetShowElement] = useState(false); // Initially visible

  const HandleShowElement = (show) => {
    SetShowElement(show);
  };

  return (
    <div>
      <header>
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-name">
            Wood<span>Recipe</span>
          </Link>
        </div>

        <div className="togg" style={{ right: showElement ? "0" : "-200px" }}>
          {/* Navigation Bar */}
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
            <i className="close" onClick={() => HandleShowElement(false)}>
              &times;
            </i>
          </nav>
          <div className="search">
            {/* Search Bar */}
            <input
              type="search"
              placeholder="Search"
              name="recipe"
              className="recipe"
            />
          </div>
        </div>
        <i className="open" onClick={() => HandleShowElement(true)}>
          &equiv;
        </i>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/add-recipe" element={<More />} />
      </Routes>
    </div>
  );
}

export default App;
