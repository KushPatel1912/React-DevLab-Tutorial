/** @format */

import React, { useState } from "react";
import "./AppleDesign.css";
import "./Flex.css";

export default function Flex() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedFlexDirection, setSelectedFlexDirection] = useState("row");

  const sections = [
    { id: "overview", title: "Overview", icon: "📐" },
    { id: "basics", title: "Basic Flexbox", icon: "🔧" },
    { id: "direction", title: "Flex Direction", icon: "↔️" },
    { id: "justify", title: "Justify Content", icon: "🎯" },
    { id: "align", title: "Align Items", icon: "📏" },
    { id: "wrap", title: "Flex Wrap", icon: "🔄" },
    { id: "order", title: "Order & Grow", icon: "📊" },
    { id: "shrink", title: "Flex Shrink", icon: "📉" },
    { id: "basis", title: "Flex Basis", icon: "📐" },
    { id: "examples", title: "Examples", icon: "💡" },
  ];

  const flexDirections = [
    { id: "row", name: "Row", description: "Items flow horizontally" },
    { id: "row-reverse", name: "Row Reverse", description: "Items flow horizontally in reverse" },
    { id: "column", name: "Column", description: "Items flow vertically" },
    { id: "column-reverse", name: "Column Reverse", description: "Items flow vertically in reverse" },
  ];

  return (
    <div className="flex-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">CSS Flexbox</h1>
          <p className="hero-subtitle">
            Create flexible, responsive layouts with CSS Flexbox
          </p>
          
          {/* Flex Preview */}
          <div className="flex-preview">
            <div className="preview-flex">
              <div className="preview-item">1</div>
              <div className="preview-item">2</div>
              <div className="preview-item">3</div>
              <div className="preview-item">4</div>
            </div>
            <p className="preview-description">
              One-dimensional layout system for distributing space and aligning items
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="section-nav">
        <div className="container">
          <div className="nav-tabs">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-tab ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="tab-icon">{section.icon}</span>
                <span className="tab-title">{section.title}</span>
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
                <h2 className="section-title">Flexbox Fundamentals</h2>
                <p className="section-subtitle">
                  Master the one-dimensional CSS layout system
                </p>
              </div>
              
              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">📐</div>
                  <h3 className="feature-title">One-Dimensional</h3>
                  <p>Control layout along a single axis (row or column)</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔧</div>
                  <h3 className="feature-title">Flexible</h3>
                  <p>Items can grow, shrink, and adapt to available space</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎯</div>
                  <h3 className="feature-title">Aligned</h3>
                  <p>Precise control over item alignment and distribution</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📱</div>
                  <h3 className="feature-title">Responsive</h3>
                  <p>Perfect for responsive design and mobile-first layouts</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Basic Flexbox Section */}
        {activeSection === "basics" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Basic Flexbox</h2>
                <p className="section-subtitle">
                  Learn the essential flexbox properties
                </p>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Flex Container</h3>
                  <div className="code-example">
                    <code>
                      .flex-container &#123;
                      <br />
                      &nbsp;&nbsp;display: flex;
                      <br />
                      &nbsp;&nbsp;flex-direction: row;
                      <br />
                      &nbsp;&nbsp;justify-content: flex-start;
                      <br />
                      &nbsp;&nbsp;align-items: stretch;
                      <br />
                      &#125;
                    </code>
                  </div>
                  <div className="demo-flex basic-demo">
                    <div className="flex-item">1</div>
                    <div className="flex-item">2</div>
                    <div className="flex-item">3</div>
                  </div>
                </div>
                
                <div className="card">
                  <h3>Flex Properties</h3>
                  <div className="property-list">
                    <div className="property-item">
                      <span className="property-name">display: flex</span>
                      <span className="property-desc">Creates a flex container</span>
                    </div>
                    <div className="property-item">
                      <span className="property-name">flex-direction</span>
                      <span className="property-desc">Sets the main axis direction</span>
                    </div>
                    <div className="property-item">
                      <span className="property-name">justify-content</span>
                      <span className="property-desc">Aligns items along main axis</span>
                    </div>
                    <div className="property-item">
                      <span className="property-name">align-items</span>
                      <span className="property-desc">Aligns items along cross axis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Flex Direction Section */}
        {activeSection === "direction" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Flex Direction</h2>
                <p className="section-subtitle">
                  Control the direction of the flex container
                </p>
              </div>
              
              <div className="direction-selector">
                <div className="direction-options">
                  {flexDirections.map((direction) => (
                    <button
                      key={direction.id}
                      className={`direction-option ${selectedFlexDirection === direction.id ? 'active' : ''}`}
                      onClick={() => setSelectedFlexDirection(direction.id)}
                    >
                      <span className="direction-name">{direction.name}</span>
                      <span className="direction-description">{direction.description}</span>
                    </button>
                  ))}
                </div>
                
                <div className="direction-demo">
                  <div className={`demo-flex ${selectedFlexDirection}`}>
                    <div className="demo-item">1</div>
                    <div className="demo-item">2</div>
                    <div className="demo-item">3</div>
                    <div className="demo-item">4</div>
                  </div>
                  <code>flex-direction: {flexDirections.find(d => d.id === selectedFlexDirection)?.name.toLowerCase()};</code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Justify Content Section */}
        {activeSection === "justify" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Justify Content</h2>
                <p className="section-subtitle">
                  Align items along the main axis
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>Flex Start</h3>
                  <div className="justify-demo flex-start">
                    <div className="justify-item">1</div>
                    <div className="justify-item">2</div>
                    <div className="justify-item">3</div>
                  </div>
                  <code>justify-content: flex-start;</code>
                </div>
                
                <div className="card">
                  <h3>Center</h3>
                  <div className="justify-demo center">
                    <div className="justify-item">1</div>
                    <div className="justify-item">2</div>
                    <div className="justify-item">3</div>
                  </div>
                  <code>justify-content: center;</code>
                </div>
                
                <div className="card">
                  <h3>Flex End</h3>
                  <div className="justify-demo flex-end">
                    <div className="justify-item">1</div>
                    <div className="justify-item">2</div>
                    <div className="justify-item">3</div>
                  </div>
                  <code>justify-content: flex-end;</code>
                </div>
                
                <div className="card">
                  <h3>Space Between</h3>
                  <div className="justify-demo space-between">
                    <div className="justify-item">1</div>
                    <div className="justify-item">2</div>
                    <div className="justify-item">3</div>
                  </div>
                  <code>justify-content: space-between;</code>
                </div>
                
                <div className="card">
                  <h3>Space Around</h3>
                  <div className="justify-demo space-around">
                    <div className="justify-item">1</div>
                    <div className="justify-item">2</div>
                    <div className="justify-item">3</div>
                  </div>
                  <code>justify-content: space-around;</code>
                </div>
                
                <div className="card">
                  <h3>Space Evenly</h3>
                  <div className="justify-demo space-evenly">
                    <div className="justify-item">1</div>
                    <div className="justify-item">2</div>
                    <div className="justify-item">3</div>
                  </div>
                  <code>justify-content: space-evenly;</code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Align Items Section */}
        {activeSection === "align" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Align Items</h2>
                <p className="section-subtitle">
                  Align items along the cross axis
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>Stretch (Default)</h3>
                  <div className="align-demo stretch">
                    <div className="align-item">1</div>
                    <div className="align-item">2</div>
                    <div className="align-item">3</div>
                  </div>
                  <code>align-items: stretch;</code>
                </div>
                
                <div className="card">
                  <h3>Flex Start</h3>
                  <div className="align-demo flex-start">
                    <div className="align-item">1</div>
                    <div className="align-item">2</div>
                    <div className="align-item">3</div>
                  </div>
                  <code>align-items: flex-start;</code>
                </div>
                
                <div className="card">
                  <h3>Center</h3>
                  <div className="align-demo center">
                    <div className="align-item">1</div>
                    <div className="align-item">2</div>
                    <div className="align-item">3</div>
                  </div>
                  <code>align-items: center;</code>
                </div>
                
                <div className="card">
                  <h3>Flex End</h3>
                  <div className="align-demo flex-end">
                    <div className="align-item">1</div>
                    <div className="align-item">2</div>
                    <div className="align-item">3</div>
                  </div>
                  <code>align-items: flex-end;</code>
                </div>
                
                <div className="card">
                  <h3>Baseline</h3>
                  <div className="align-demo baseline">
                    <div className="align-item">1</div>
                    <div className="align-item">2</div>
                    <div className="align-item">3</div>
                  </div>
                  <code>align-items: baseline;</code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Flex Wrap Section */}
        {activeSection === "wrap" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Flex Wrap</h2>
                <p className="section-subtitle">
                  Control how flex items wrap to new lines
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>No Wrap (Default)</h3>
                  <div className="wrap-demo no-wrap">
                    <div className="wrap-item">1</div>
                    <div className="wrap-item">2</div>
                    <div className="wrap-item">3</div>
                    <div className="wrap-item">4</div>
                    <div className="wrap-item">5</div>
                    <div className="wrap-item">6</div>
                  </div>
                  <code>flex-wrap: nowrap;</code>
                </div>
                
                <div className="card">
                  <h3>Wrap</h3>
                  <div className="wrap-demo wrap">
                    <div className="wrap-item">1</div>
                    <div className="wrap-item">2</div>
                    <div className="wrap-item">3</div>
                    <div className="wrap-item">4</div>
                    <div className="wrap-item">5</div>
                    <div className="wrap-item">6</div>
                  </div>
                  <code>flex-wrap: wrap;</code>
                </div>
                
                <div className="card">
                  <h3>Wrap Reverse</h3>
                  <div className="wrap-demo wrap-reverse">
                    <div className="wrap-item">1</div>
                    <div className="wrap-item">2</div>
                    <div className="wrap-item">3</div>
                    <div className="wrap-item">4</div>
                    <div className="wrap-item">5</div>
                    <div className="wrap-item">6</div>
                  </div>
                  <code>flex-wrap: wrap-reverse;</code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Order & Grow Section */}
        {activeSection === "order" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Order & Flex Grow</h2>
                <p className="section-subtitle">
                  Control item order and growth behavior
                </p>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Order Property</h3>
                  <div className="order-demo">
                    <div className="order-item order-1">1 (order: 1)</div>
                    <div className="order-item order-2">2 (order: 2)</div>
                    <div className="order-item order-3">3 (order: 3)</div>
                    <div className="order-item order-4">4 (order: 4)</div>
                  </div>
                  <code>order: 1, 2, 3, 4;</code>
                </div>
                
                <div className="card">
                  <h3>Flex Grow</h3>
                  <div className="grow-demo">
                    <div className="grow-item grow-1">1 (flex-grow: 1)</div>
                    <div className="grow-item grow-2">2 (flex-grow: 2)</div>
                    <div className="grow-item grow-3">3 (flex-grow: 3)</div>
                  </div>
                  <code>flex-grow: 1, 2, 3;</code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Flex Shrink Section */}
        {activeSection === "shrink" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Flex Shrink</h2>
                <p className="section-subtitle">
                  Control how items shrink when space is limited
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>No Shrink</h3>
                  <div className="shrink-demo no-shrink">
                    <div className="shrink-item no-shrink">1 (flex-shrink: 0)</div>
                    <div className="shrink-item no-shrink">2 (flex-shrink: 0)</div>
                    <div className="shrink-item no-shrink">3 (flex-shrink: 0)</div>
                  </div>
                  <code>flex-shrink: 0;</code>
                </div>
                
                <div className="card">
                  <h3>Equal Shrink</h3>
                  <div className="shrink-demo equal-shrink">
                    <div className="shrink-item equal-shrink">1 (flex-shrink: 1)</div>
                    <div className="shrink-item equal-shrink">2 (flex-shrink: 1)</div>
                    <div className="shrink-item equal-shrink">3 (flex-shrink: 1)</div>
                  </div>
                  <code>flex-shrink: 1;</code>
                </div>
                
                <div className="card">
                  <h3>Different Shrink</h3>
                  <div className="shrink-demo different-shrink">
                    <div className="shrink-item shrink-1">1 (flex-shrink: 1)</div>
                    <div className="shrink-item shrink-2">2 (flex-shrink: 2)</div>
                    <div className="shrink-item shrink-3">3 (flex-shrink: 3)</div>
                  </div>
                  <code>flex-shrink: 1, 2, 3;</code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Flex Basis Section */}
        {activeSection === "basis" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Flex Basis</h2>
                <p className="section-subtitle">
                  Set the initial size of flex items
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>Auto (Default)</h3>
                  <div className="basis-demo auto">
                    <div className="basis-item auto">1</div>
                    <div className="basis-item auto">2</div>
                    <div className="basis-item auto">3</div>
                  </div>
                  <code>flex-basis: auto;</code>
                </div>
                
                <div className="card">
                  <h3>Fixed Width</h3>
                  <div className="basis-demo fixed">
                    <div className="basis-item fixed">1</div>
                    <div className="basis-item fixed">2</div>
                    <div className="basis-item fixed">3</div>
                  </div>
                  <code>flex-basis: 100px;</code>
                </div>
                
                <div className="card">
                  <h3>Percentage</h3>
                  <div className="basis-demo percentage">
                    <div className="basis-item percentage">1</div>
                    <div className="basis-item percentage">2</div>
                    <div className="basis-item percentage">3</div>
                  </div>
                  <code>flex-basis: 33%;</code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Examples Section */}
        {activeSection === "examples" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Practical Examples</h2>
                <p className="section-subtitle">
                  Real-world flexbox layouts you can use
                </p>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Navigation Bar</h3>
                  <div className="example-nav">
                    <div className="nav-brand">Logo</div>
                    <div className="nav-menu">
                      <a href="#" className="nav-link">Home</a>
                      <a href="#" className="nav-link">About</a>
                      <a href="#" className="nav-link">Services</a>
                      <a href="#" className="nav-link">Contact</a>
                    </div>
                  </div>
                  <code>display: flex; justify-content: space-between;</code>
                </div>
                
                <div className="card">
                  <h3>Card Layout</h3>
                  <div className="example-card">
                    <div className="card-image">Image</div>
                    <div className="card-content">
                      <h4>Card Title</h4>
                      <p>Card description text</p>
                      <button className="card-button">Action</button>
                    </div>
                  </div>
                  <code>display: flex; flex-direction: column;</code>
                </div>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Form Layout</h3>
                  <div className="example-form">
                    <div className="form-row">
                      <input type="text" placeholder="First Name" className="form-input" />
                      <input type="text" placeholder="Last Name" className="form-input" />
                    </div>
                    <div className="form-row">
                      <input type="email" placeholder="Email" className="form-input" />
                      <input type="tel" placeholder="Phone" className="form-input" />
                    </div>
                    <button type="submit" className="form-submit">Submit</button>
                  </div>
                  <code>display: flex; flex-direction: column; gap: 1rem;</code>
                </div>
                
                <div className="card">
                  <h3>Sidebar Layout</h3>
                  <div className="example-sidebar">
                    <aside className="sidebar">Sidebar</aside>
                    <main className="main-content">Main Content</main>
                  </div>
                  <code>display: flex; gap: 2rem;</code>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
