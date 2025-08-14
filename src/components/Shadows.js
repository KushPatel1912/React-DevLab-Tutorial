/** @format */

import React, { useState } from "react";
import "./AppleDesign.css";
import "./Shadows.css";

export default function Shadows() {
  const [activeSection, setActiveSection] =
    useState("overview");

  const sections = [
    { id: "overview", title: "Overview", icon: "🌑" },
    {
      id: "box-shadows",
      title: "Box Shadows",
      icon: "📦",
    },
    {
      id: "text-shadows",
      title: "Text Shadows",
      icon: "📝",
    },
    {
      id: "colored-shadows",
      title: "Colored Shadows",
      icon: "🎨",
    },
    {
      id: "interactive",
      title: "Interactive",
      icon: "🖱️",
    },
    {
      id: "3d-effects",
      title: "3D Effects",
      icon: "🔲",
    },
    {
      id: "animations",
      title: "Animations",
      icon: "✨",
    },
  ];

  return (
    <div className="shadows-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">CSS Shadows</h1>
          <p className="hero-subtitle">
            Create depth, dimension, and visual
            hierarchy with powerful shadow effects
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="section-nav">
        <div className="container">
          <div className="nav-tabs">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-tab ${
                  activeSection === section.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveSection(section.id)
                }
              >
                <span className="tab-icon">
                  {section.icon}
                </span>
                <span className="tab-title">
                  {section.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="content-sections">
        {/* Overview Section */}
        {activeSection === "overview" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Shadow Design Principles
                </h2>
                <p className="section-subtitle">
                  Master the art of creating depth and
                  visual hierarchy with CSS shadows
                </p>
              </div>

              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    📦
                  </div>
                  <h3 className="feature-title">
                    Box Shadows
                  </h3>
                  <p>
                    Create depth and elevation for
                    elements using box-shadow property
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    📝
                  </div>
                  <h3 className="feature-title">
                    Text Shadows
                  </h3>
                  <p>
                    Add dimension and readability to
                    text with text-shadow effects
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    🎨
                  </div>
                  <h3 className="feature-title">
                    Colored Shadows
                  </h3>
                  <p>
                    Use colored shadows to create mood
                    and enhance brand identity
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    ✨
                  </div>
                  <h3 className="feature-title">
                    Interactive Effects
                  </h3>
                  <p>
                    Combine shadows with hover states
                    and animations for engaging UX
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Box Shadows Section */}
        {activeSection === "box-shadows" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Box Shadow Examples
                </h2>
                <p className="section-subtitle">
                  Create depth and elevation for
                  elements
                </p>
              </div>

              <div className="grid grid-3">
                <div className="card">
                  <div className="card-header">
                    <div className="card-icon">📦</div>
                    <h3>Basic Shadow</h3>
                  </div>
                  <div className="shadow-box basic-shadow">
                    Basic Shadow
                  </div>
                  <code>
                    box-shadow: 0 2px 4px rgba(0, 0, 0,
                    0.1);
                  </code>
                </div>

                <div className="card">
                  <div className="card-header">
                    <div className="card-icon">📦</div>
                    <h3>Large Shadow</h3>
                  </div>
                  <div className="shadow-box large-shadow">
                    Large Shadow
                  </div>
                  <code>
                    box-shadow: 0 8px 25px rgba(0, 0,
                    0, 0.15);
                  </code>
                </div>

                <div className="card">
                  <div className="card-header">
                    <div className="card-icon">📦</div>
                    <h3>Inner Shadow</h3>
                  </div>
                  <div className="shadow-box inner-shadow">
                    Inner Shadow
                  </div>
                  <code>
                    box-shadow: inset 0 2px 4px rgba(0,
                    0, 0, 0.1);
                  </code>
                </div>

                <div className="card">
                  <div className="card-header">
                    <div className="card-icon">📦</div>
                    <h3>Multiple Shadows</h3>
                  </div>
                  <div className="shadow-box multiple-shadows">
                    Multiple
                  </div>
                  <code>
                    box-shadow: 0 2px 4px rgba(0, 0, 0,
                    0.1), 0 8px 16px rgba(0, 0, 0,
                    0.1);
                  </code>
                </div>

                <div className="card">
                  <div className="card-header">
                    <div className="card-icon">📦</div>
                    <h3>Floating Card</h3>
                  </div>
                  <div className="shadow-box floating-card">
                    Floating
                  </div>
                  <code>
                    box-shadow: 0 10px 20px rgba(0, 0,
                    0, 0.2), 0 6px 6px rgba(0, 0, 0,
                    0.1);
                  </code>
                </div>

                <div className="card">
                  <div className="card-header">
                    <div className="card-icon">📦</div>
                    <h3>Material Design</h3>
                  </div>
                  <div className="shadow-box material-shadow">
                    Material
                  </div>
                  <code>
                    box-shadow: 0 2px 5px rgba(0, 0, 0,
                    0.2), 0 4px 10px rgba(0, 0, 0,
                    0.1);
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Text Shadows Section */}
        {activeSection === "text-shadows" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Text Shadow Examples
                </h2>
                <p className="section-subtitle">
                  Add dimension and readability to text
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Basic Text Shadow</h3>
                  <h1 className="text-shadow basic-text-shadow">
                    Text Shadow
                  </h1>
                  <code>
                    text-shadow: 2px 2px 4px rgba(0, 0,
                    0, 0.5);
                  </code>
                </div>

                <div className="card">
                  <h3>Glow Effect</h3>
                  <h1 className="text-shadow glow-text">
                    Glow Effect
                  </h1>
                  <code>
                    text-shadow: 0 0 10px rgba(102,
                    126, 234, 0.8);
                  </code>
                </div>

                <div className="card">
                  <h3>Multiple Text Shadows</h3>
                  <h1 className="text-shadow multiple-text-shadows">
                    Multiple
                  </h1>
                  <code>
                    text-shadow: 2px 2px 4px rgba(0, 0,
                    0, 0.5), 4px 4px 8px rgba(0, 0, 0,
                    0.3);
                  </code>
                </div>

                <div className="card">
                  <h3>Neon Effect</h3>
                  <h1 className="text-shadow neon-text">
                    Neon Effect
                  </h1>
                  <code>
                    text-shadow: 0 0 5px #fff, 0 0 10px
                    #fff, 0 0 15px #667eea;
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Colored Shadows Section */}
        {activeSection === "colored-shadows" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Colored Shadow Examples
                </h2>
                <p className="section-subtitle">
                  Use colored shadows to create mood
                  and enhance brand identity
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Blue Shadow</h3>
                  <div className="shadow-box blue-shadow">
                    Blue Shadow
                  </div>
                  <code>
                    box-shadow: 0 4px 8px rgba(102,
                    126, 234, 0.4);
                  </code>
                </div>

                <div className="card">
                  <h3>Pink Shadow</h3>
                  <div className="shadow-box pink-shadow">
                    Pink Shadow
                  </div>
                  <code>
                    box-shadow: 0 4px 8px rgba(240,
                    147, 251, 0.4);
                  </code>
                </div>

                <div className="card">
                  <h3>Green Shadow</h3>
                  <div className="shadow-box green-shadow">
                    Green Shadow
                  </div>
                  <code>
                    box-shadow: 0 4px 8px rgba(40, 167,
                    69, 0.4);
                  </code>
                </div>

                <div className="card">
                  <h3>Orange Shadow</h3>
                  <div className="shadow-box orange-shadow">
                    Orange Shadow
                  </div>
                  <code>
                    box-shadow: 0 4px 8px rgba(255,
                    193, 7, 0.4);
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Interactive Section */}
        {activeSection === "interactive" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Interactive Shadow Effects
                </h2>
                <p className="section-subtitle">
                  Combine shadows with hover states and
                  animations
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Hover Effect</h3>
                  <div className="shadow-box interactive-shadow">
                    Hover Me
                  </div>
                  <p>Move your mouse over this box</p>
                  <code>
                    transition: all 0.3s ease;
                  </code>
                </div>

                <div className="card">
                  <h3>Press Effect</h3>
                  <div className="shadow-box press-shadow">
                    Press Me
                  </div>
                  <p>Click and hold this box</p>
                  <code>
                    :active &#123; transform:
                    translateY(2px); &#125;
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3D Effects Section */}
        {activeSection === "3d-effects" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  3D Shadow Effects
                </h2>
                <p className="section-subtitle">
                  Create realistic depth and dimension
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Depth Effect</h3>
                  <div className="shadow-box depth-effect">
                    Depth
                  </div>
                  <code>
                    box-shadow: 0 1px 3px rgba(0, 0, 0,
                    0.12), 0 1px 2px rgba(0, 0, 0,
                    0.24);
                  </code>
                </div>

                <div className="card">
                  <h3>Glass Effect</h3>
                  <div className="shadow-box glass-shadow">
                    Glass
                  </div>
                  <code>
                    box-shadow: 0 8px 32px rgba(31, 38,
                    135, 0.37);
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Animations Section */}
        {activeSection === "animations" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Animated Shadows
                </h2>
                <p className="section-subtitle">
                  Bring shadows to life with CSS
                  animations
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Pulsing Shadow</h3>
                  <div className="shadow-box pulsing-shadow">
                    Pulsing
                  </div>
                  <p>
                    This shadow continuously pulses
                  </p>
                  <code>
                    @keyframes pulse &#123; 0%, 100%
                    &#123; opacity: 1; &#125; 50%
                    &#123; opacity: 0.5; &#125; &#125;
                  </code>
                </div>

                <div className="card">
                  <h3>Moving Shadow</h3>
                  <div className="shadow-box moving-shadow">
                    Moving
                  </div>
                  <p>
                    This shadow moves around the
                    element
                  </p>
                  <code>
                    @keyframes move &#123; 0% &#123;
                    transform: translateX(0); &#125;
                    100% &#123; transform:
                    translateX(20px); &#125; &#125;
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
