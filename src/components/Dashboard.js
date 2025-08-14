/** @format */

import React, { useState, useEffect } from "react";
import "./Dashboard.css";

export default function Dashboard({ onNavigate }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const examples = [
    {
      id: "cardinrow",
      title: "Card in Row",
      description:
        "Bootstrap card layout examples in rows",
      icon: "📱",
      category: "Layout",
      tags: ["bootstrap", "cards", "layout"],
    },
    {
      id: "grid",
      title: "CSS Grid",
      description:
        "Various CSS Grid layout examples and techniques",
      icon: "🔲",
      category: "CSS Grid",
      tags: ["grid", "layout", "css"],
    },
    {
      id: "flex",
      title: "CSS Flexbox",
      description:
        "Flexbox layout examples and properties",
      icon: "📐",
      category: "CSS Flexbox",
      tags: ["flexbox", "layout", "css"],
    },
    {
      id: "animations",
      title: "CSS Animations",
      description:
        "Keyframes, transitions, and transform examples",
      icon: "✨",
      category: "Animations",
      tags: ["animations", "keyframes", "transitions"],
    },
    {
      id: "gradients",
      title: "CSS Gradients",
      description:
        "Linear, radial, and conic gradient examples",
      icon: "🌈",
      category: "Styling",
      tags: ["gradients", "colors", "css"],
    },
    {
      id: "shadows",
      title: "CSS Shadows",
      description:
        "Box-shadow and text-shadow examples",
      icon: "🌑",
      category: "Styling",
      tags: ["shadows", "depth", "css"],
    },
    {
      id: "responsive",
      title: "Responsive Design",
      description:
        "Media queries and responsive layout examples",
      icon: "📱",
      category: "Responsive",
      tags: ["responsive", "media-queries", "mobile"],
    },
    {
      id: "typography",
      title: "Typography",
      description:
        "Font styling, sizing, and text effects",
      icon: "📝",
      category: "Typography",
      tags: ["fonts", "text", "typography"],
    },
    {
      id: "reacthooks",
      title: "React Hooks",
      description:
        "useState, useEffect, useContext, and custom hooks",
      icon: "⚛️",
      category: "React",
      tags: ["react", "hooks", "javascript"],
    },
  ];

  const categories = [
    "All",
    ...new Set(
      examples.map((example) => example.category)
    ),
  ];

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(
      () => setIsLoading(false),
      800
    );
    return () => clearTimeout(timer);
  }, []);

  // Apply dark mode to body
  useEffect(() => {
    document.body.classList.toggle(
      "dark-mode",
      darkMode
    );
  }, [darkMode]);

  // Filter examples based on search and category
  const filteredExamples = examples.filter(
    (example) => {
      const matchesSearch =
        example.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        example.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        example.tags.some((tag) =>
          tag
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "All" ||
        example.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }
  );

  const handleCardClick = (exampleId) => {
    // Add click animation
    const card = document.querySelector(
      `[data-id="${exampleId}"]`
    );
    if (card) {
      card.style.transform = "scale(0.95)";
      setTimeout(() => {
        card.style.transform = "";
        onNavigate(exampleId);
      }, 150);
    } else {
      onNavigate(exampleId);
    }
  };

  const handleCardHover = (id) => {
    setHoveredCard(id);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  if (isLoading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div
      className={`dashboard ${darkMode ? "dark" : ""}`}
    >
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Design System</h1>
          <p>Interactive examples and components</p>
        </div>

        {/* Search and Filter Controls */}
        <div className="controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search examples..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="category-filter">
            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(e.target.value)
              }
              className="category-select"
            >
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* View Mode Toggle */}
          <button
            className={`view-toggle ${
              viewMode === "list" ? "active" : ""
            }`}
            onClick={toggleViewMode}
            title={`Switch to ${
              viewMode === "grid" ? "list" : "grid"
            } view`}
          >
            {viewMode === "grid" ? "📋" : "🔲"}
          </button>

          {/* Dark Mode Toggle */}
          <button
            className={`theme-toggle ${
              darkMode ? "active" : ""
            }`}
            onClick={toggleDarkMode}
            title={`Switch to ${
              darkMode ? "light" : "dark"
            } mode`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <div className="dashboard-content">
        {filteredExamples.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No examples found</h3>
            <p>
              Try adjusting your search or category
              filter
            </p>
          </div>
        ) : (
          <div
            className={`examples-container ${viewMode}`}
          >
            {filteredExamples.map((example, index) => (
              <div
                key={example.id}
                data-id={example.id}
                className={`example-card ${
                  hoveredCard === example.id
                    ? "hovered"
                    : ""
                }`}
                onClick={() =>
                  handleCardClick(example.id)
                }
                onMouseEnter={() =>
                  handleCardHover(example.id)
                }
                onMouseLeave={handleCardLeave}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="card-header">
                  <div className="example-icon">
                    {example.icon}
                  </div>
                  <div className="category-badge">
                    {example.category}
                  </div>
                </div>

                <div className="card-content">
                  <h3>{example.title}</h3>
                  <p>{example.description}</p>

                  <div className="tags">
                    {example.tags
                      .slice(0, 3)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="tag"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="card-footer">
                  <button className="explore-btn">
                    Explore
                    <span className="arrow">→</span>
                  </button>
                </div>

                <div className="card-overlay"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="dashboard-footer">
        <div className="footer-content">
          <div className="stats">
            <span>
              {filteredExamples.length} examples
            </span>
            <span>•</span>
            <span>
              {categories.length - 1} categories
            </span>
            <span>•</span>
            <span>{viewMode} view</span>
          </div>
          <p>Click any card to explore in detail</p>
        </div>
      </footer>
    </div>
  );
}
