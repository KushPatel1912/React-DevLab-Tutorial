/** @format */

import React, { useState } from "react";
import "./AppleDesign.css";
import "./Grid.css";

export default function Grid() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedGrid, setSelectedGrid] = useState("basic");

  const sections = [
    { id: "overview", title: "Overview", icon: "🔲" },
    { id: "basic", title: "Basic Grid", icon: "📐" },
    { id: "responsive", title: "Responsive", icon: "📱" },
    { id: "auto-fit", title: "Auto-Fit", icon: "🔧" },
    { id: "areas", title: "Grid Areas", icon: "🗺️" },
    { id: "alignment", title: "Alignment", icon: "🎯" },
    { id: "gaps", title: "Gaps & Spacing", icon: "📏" },
    { id: "fractions", title: "Fractions", icon: "➗" },
    { id: "nested", title: "Nested Grids", icon: "📦" },
    { id: "examples", title: "Examples", icon: "💡" },
  ];

  const gridTypes = [
    { id: "basic", name: "Basic Grid", description: "Simple grid layout" },
    { id: "responsive", name: "Responsive Grid", description: "Adapts to screen size" },
    { id: "auto-fit", name: "Auto-Fit Grid", description: "Automatically fits items" },
    { id: "areas", name: "Grid Areas", description: "Named grid areas" },
    { id: "fractions", name: "Fraction Grid", description: "Uses fractional units" },
  ];

  return (
    <div className="grid-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">CSS Grid System</h1>
          <p className="hero-subtitle">
            Create powerful, flexible layouts with CSS Grid
          </p>
          
          {/* Grid Preview */}
          <div className="grid-preview">
            <div className="preview-grid">
              <div className="preview-item">1</div>
              <div className="preview-item">2</div>
              <div className="preview-item">3</div>
              <div className="preview-item">4</div>
              <div className="preview-item">5</div>
              <div className="preview-item">6</div>
            </div>
            <p className="preview-description">
              Powerful two-dimensional layout system for modern web design
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
                <h2 className="section-title">Grid Layout Fundamentals</h2>
                <p className="section-subtitle">
                  Master the two-dimensional CSS layout system
                </p>
              </div>
              
              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">📐</div>
                  <h3 className="feature-title">Two-Dimensional</h3>
                  <p>Control both rows and columns simultaneously for complex layouts</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔧</div>
                  <h3 className="feature-title">Flexible</h3>
                  <p>Create responsive layouts that adapt to content and screen size</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎯</div>
                  <h3 className="feature-title">Precise</h3>
                  <p>Exact control over item placement and alignment</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📱</div>
                  <h3 className="feature-title">Responsive</h3>
                  <p>Built-in responsive design with minimal media queries</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Basic Grid Section */}
        {activeSection === "basic" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Basic Grid Layout</h2>
                <p className="section-subtitle">
                  Learn the fundamentals of CSS Grid
                </p>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Grid Container</h3>
                  <div className="code-example">
                    <code>
                      .grid-container &#123;
                      <br />
                      &nbsp;&nbsp;display: grid;
                      <br />
                      &nbsp;&nbsp;grid-template-columns: 200px 200px 200px;
                      <br />
                      &nbsp;&nbsp;grid-template-rows: 100px 100px;
                      <br />
                      &#125;
                    </code>
                  </div>
                  <div className="demo-grid basic-demo">
                    <div className="grid-item">1</div>
                    <div className="grid-item">2</div>
                    <div className="grid-item">3</div>
                    <div className="grid-item">4</div>
                    <div className="grid-item">5</div>
                    <div className="grid-item">6</div>
                  </div>
                </div>
                
                <div className="card">
                  <h3>Grid Properties</h3>
                  <div className="property-list">
                    <div className="property-item">
                      <span className="property-name">display: grid</span>
                      <span className="property-desc">Creates a grid container</span>
                    </div>
                    <div className="property-item">
                      <span className="property-name">grid-template-columns</span>
                      <span className="property-desc">Defines column sizes</span>
                    </div>
                    <div className="property-item">
                      <span className="property-name">grid-template-rows</span>
                      <span className="property-desc">Defines row sizes</span>
                    </div>
                    <div className="property-item">
                      <span className="property-name">gap</span>
                      <span className="property-desc">Sets spacing between items</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Responsive Grid Section */}
        {activeSection === "responsive" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Responsive Grid</h2>
                <p className="section-subtitle">
                  Create grids that adapt to different screen sizes
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>Mobile (1 column)</h3>
                  <div className="responsive-demo mobile">
                    <div className="demo-item">1</div>
                    <div className="demo-item">2</div>
                    <div className="demo-item">3</div>
                  </div>
                  <code>grid-template-columns: 1fr;</code>
                </div>
                
                <div className="card">
                  <h3>Tablet (2 columns)</h3>
                  <div className="responsive-demo tablet">
                    <div className="demo-item">1</div>
                    <div className="demo-item">2</div>
                    <div className="demo-item">3</div>
                  </div>
                  <code>grid-template-columns: 1fr 1fr;</code>
                </div>
                
                <div className="card">
                  <h3>Desktop (3 columns)</h3>
                  <div className="responsive-demo desktop">
                    <div className="demo-item">1</div>
                    <div className="demo-item">2</div>
                    <div className="demo-item">3</div>
                  </div>
                  <code>grid-template-columns: 1fr 1fr 1fr;</code>
                </div>
              </div>
              
              <div className="media-query-example">
                <h3>Media Query Implementation</h3>
                <div className="code-block">
                  <code>
                    .responsive-grid &#123;
                    <br />
                    &nbsp;&nbsp;display: grid;
                    <br />
                    &nbsp;&nbsp;grid-template-columns: 1fr;
                    <br />
                    &nbsp;&nbsp;gap: 1rem;
                    <br />
                    &#125;
                    <br /><br />
                    @media (min-width: 768px) &#123;
                    <br />
                    &nbsp;&nbsp;.responsive-grid &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;grid-template-columns: 1fr 1fr;
                    <br />
                    &nbsp;&nbsp;&#125;
                    <br />
                    &#125;
                    <br /><br />
                    @media (min-width: 1024px) &#123;
                    <br />
                    &nbsp;&nbsp;.responsive-grid &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;grid-template-columns: 1fr 1fr 1fr;
                    <br />
                    &nbsp;&nbsp;&#125;
                    <br />
                    &#125;
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Auto-Fit Grid Section */}
        {activeSection === "auto-fit" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Auto-Fit Grid</h2>
                <p className="section-subtitle">
                  Automatically fit items to available space
                </p>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Auto-Fit with minmax()</h3>
                  <div className="auto-fit-demo">
                    <div className="auto-item">Item 1</div>
                    <div className="auto-item">Item 2</div>
                    <div className="auto-item">Item 3</div>
                    <div className="auto-item">Item 4</div>
                    <div className="auto-item">Item 5</div>
                    <div className="auto-item">Item 6</div>
                  </div>
                  <code>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</code>
                  <p className="demo-description">
                    This grid automatically creates as many columns as possible, each at least 200px wide
                  </p>
                </div>
                
                <div className="card">
                  <h3>Auto-Fill vs Auto-Fit</h3>
                  <div className="comparison-demo">
                    <div className="comparison-item">
                      <h4>Auto-Fill</h4>
                      <div className="auto-fill-demo">
                        <div className="demo-item">1</div>
                        <div className="demo-item">2</div>
                      </div>
                      <code>repeat(auto-fill, 150px)</code>
                    </div>
                    <div className="comparison-item">
                      <h4>Auto-Fit</h4>
                      <div className="auto-fit-demo-small">
                        <div className="demo-item">1</div>
                        <div className="demo-item">2</div>
                      </div>
                      <code>repeat(auto-fit, 150px)</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Grid Areas Section */}
        {activeSection === "areas" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Grid Template Areas</h2>
                <p className="section-subtitle">
                  Create complex layouts with named grid areas
                </p>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Layout Definition</h3>
                  <div className="code-example">
                    <code>
                      .layout &#123;
                      <br />
                      &nbsp;&nbsp;display: grid;
                      <br />
                      &nbsp;&nbsp;grid-template-areas:
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;"header header header"
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;"sidebar main main"
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;"footer footer footer";
                      <br />
                      &nbsp;&nbsp;grid-template-columns: 200px 1fr 1fr;
                      <br />
                      &nbsp;&nbsp;grid-template-rows: 80px 1fr 80px;
                      <br />
                      &#125;
                    </code>
                  </div>
                </div>
                
                <div className="card">
                  <h3>Area Assignment</h3>
                  <div className="code-example">
                    <code>
                      .header &#123; grid-area: header; &#125;
                      <br />
                      .sidebar &#123; grid-area: sidebar; &#125;
                      <br />
                      .main &#123; grid-area: main; &#125;
                      <br />
                      .footer &#123; grid-area: footer; &#125;
                    </code>
                  </div>
                </div>
              </div>
              
              <div className="areas-demo">
                <div className="layout-grid">
                  <header className="area-header">Header</header>
                  <aside className="area-sidebar">Sidebar</aside>
                  <main className="area-main">Main Content</main>
                  <footer className="area-footer">Footer</footer>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Alignment Section */}
        {activeSection === "alignment" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Grid Alignment</h2>
                <p className="section-subtitle">
                  Control how items are positioned within grid cells
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>Justify Items</h3>
                  <div className="alignment-demo justify-items">
                    <div className="align-item">Start</div>
                    <div className="align-item">Center</div>
                    <div className="align-item">End</div>
                  </div>
                  <code>justify-items: start | center | end | stretch;</code>
                </div>
                
                <div className="card">
                  <h3>Align Items</h3>
                  <div className="alignment-demo align-items">
                    <div className="align-item">Start</div>
                    <div className="align-item">Center</div>
                    <div className="align-item">End</div>
                  </div>
                  <code>align-items: start | center | end | stretch;</code>
                </div>
                
                <div className="card">
                  <h3>Place Items</h3>
                  <div className="alignment-demo place-items">
                    <div className="align-item">Center</div>
                  </div>
                  <code>place-items: center center;</code>
                </div>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Justify Content</h3>
                  <div className="content-alignment-demo">
                    <div className="content-grid">
                      <div className="content-item">1</div>
                      <div className="content-item">2</div>
                      <div className="content-item">3</div>
                    </div>
                  </div>
                  <code>justify-content: space-between;</code>
                </div>
                
                <div className="card">
                  <h3>Align Content</h3>
                  <div className="content-alignment-demo">
                    <div className="content-grid tall">
                      <div className="content-item">1</div>
                      <div className="content-item">2</div>
                      <div className="content-item">3</div>
                    </div>
                  </div>
                  <code>align-content: center;</code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Gaps Section */}
        {activeSection === "gaps" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Grid Gaps & Spacing</h2>
                <p className="section-subtitle">
                  Control spacing between grid items
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>Row Gap</h3>
                  <div className="gap-demo row-gap">
                    <div className="gap-item">1</div>
                    <div className="gap-item">2</div>
                    <div className="gap-item">3</div>
                    <div className="gap-item">4</div>
                  </div>
                  <code>row-gap: 20px;</code>
                </div>
                
                <div className="card">
                  <h3>Column Gap</h3>
                  <div className="gap-demo column-gap">
                    <div className="gap-item">1</div>
                    <div className="gap-item">2</div>
                    <div className="gap-item">3</div>
                    <div className="gap-item">4</div>
                  </div>
                  <code>column-gap: 20px;</code>
                </div>
                
                <div className="card">
                  <h3>Gap (Shorthand)</h3>
                  <div className="gap-demo gap-shorthand">
                    <div className="gap-item">1</div>
                    <div className="gap-item">2</div>
                    <div className="gap-item">3</div>
                    <div className="gap-item">4</div>
                  </div>
                  <code>gap: 20px;</code>
                </div>
              </div>
              
              <div className="gap-variations">
                <h3>Gap Variations</h3>
                <div className="grid grid-4">
                  <div className="gap-variation">
                    <div className="variation-demo small-gap">
                      <div className="gap-item">1</div>
                      <div className="gap-item">2</div>
                    </div>
                    <code>gap: 8px;</code>
                  </div>
                  <div className="gap-variation">
                    <div className="variation-demo medium-gap">
                      <div className="gap-item">1</div>
                      <div className="gap-item">2</div>
                    </div>
                    <code>gap: 16px;</code>
                  </div>
                  <div className="gap-variation">
                    <div className="variation-demo large-gap">
                      <div className="gap-item">1</div>
                      <div className="gap-item">2</div>
                    </div>
                    <code>gap: 32px;</code>
                  </div>
                  <div className="gap-variation">
                    <div className="variation-demo no-gap">
                      <div className="gap-item">1</div>
                      <div className="gap-item">2</div>
                    </div>
                    <code>gap: 0;</code>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Fractions Section */}
        {activeSection === "fractions" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Fractional Units</h2>
                <p className="section-subtitle">
                  Use fr units for flexible grid sizing
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>Equal Fractions</h3>
                  <div className="fraction-demo equal">
                    <div className="fraction-item">1fr</div>
                    <div className="fraction-item">1fr</div>
                    <div className="fraction-item">1fr</div>
                  </div>
                  <code>grid-template-columns: 1fr 1fr 1fr;</code>
                </div>
                
                <div className="card">
                  <h3>Mixed Fractions</h3>
                  <div className="fraction-demo mixed">
                    <div className="fraction-item">1fr</div>
                    <div className="fraction-item">2fr</div>
                    <div className="fraction-item">1fr</div>
                  </div>
                  <code>grid-template-columns: 1fr 2fr 1fr;</code>
                </div>
                
                <div className="card">
                  <h3>Fixed + Fraction</h3>
                  <div className="fraction-demo fixed-fraction">
                    <div className="fraction-item">200px</div>
                    <div className="fraction-item">1fr</div>
                    <div className="fraction-item">300px</div>
                  </div>
                  <code>grid-template-columns: 200px 1fr 300px;</code>
                </div>
              </div>
              
              <div className="fraction-explanation">
                <h3>Understanding fr Units</h3>
                <div className="explanation-grid">
                  <div className="explanation-item">
                    <h4>1fr = 1 fraction</h4>
                    <p>Equal distribution of available space</p>
                  </div>
                  <div className="explanation-item">
                    <h4>2fr = 2 fractions</h4>
                    <p>Twice the space of 1fr</p>
                  </div>
                  <div className="explanation-item">
                    <h4>Mixed with fixed</h4>
                    <p>fr units fill remaining space after fixed sizes</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Nested Grids Section */}
        {activeSection === "nested" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Nested Grids</h2>
                <p className="section-subtitle">
                  Create complex layouts with grids within grids
                </p>
              </div>
              
              <div className="nested-demo">
                <div className="parent-grid">
                  <div className="parent-item">
                    <h4>Parent Grid Item 1</h4>
                    <div className="child-grid">
                      <div className="child-item">A</div>
                      <div className="child-item">B</div>
                      <div className="child-item">C</div>
                    </div>
                  </div>
                  <div className="parent-item">
                    <h4>Parent Grid Item 2</h4>
                    <div className="child-grid">
                      <div className="child-item">X</div>
                      <div className="child-item">Y</div>
                    </div>
                  </div>
                  <div className="parent-item">
                    <h4>Parent Grid Item 3</h4>
                    <div className="child-grid">
                      <div className="child-item">1</div>
                      <div className="child-item">2</div>
                      <div className="child-item">3</div>
                      <div className="child-item">4</div>
                    </div>
                  </div>
                </div>
                
                <div className="nested-code">
                  <h3>CSS for Nested Grids</h3>
                  <div className="code-block">
                    <code>
                      .parent-grid &#123;
                      <br />
                      &nbsp;&nbsp;display: grid;
                      <br />
                      &nbsp;&nbsp;grid-template-columns: 1fr 1fr 1fr;
                      <br />
                      &nbsp;&nbsp;gap: 1rem;
                      <br />
                      &#125;
                      <br /><br />
                      .child-grid &#123;
                      <br />
                      &nbsp;&nbsp;display: grid;
                      <br />
                      &nbsp;&nbsp;grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
                      <br />
                      &nbsp;&nbsp;gap: 0.5rem;
                      <br />
                      &#125;
                    </code>
                  </div>
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
                  Real-world grid layouts you can use
                </p>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Card Layout</h3>
                  <div className="example-card-layout">
                    <div className="card-item">Card 1</div>
                    <div className="card-item">Card 2</div>
                    <div className="card-item">Card 3</div>
                    <div className="card-item">Card 4</div>
                  </div>
                  <code>grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));</code>
                </div>
                
                <div className="card">
                  <h3>Photo Gallery</h3>
                  <div className="example-gallery">
                    <div className="gallery-item">Photo 1</div>
                    <div className="gallery-item">Photo 2</div>
                    <div className="gallery-item">Photo 3</div>
                    <div className="gallery-item">Photo 4</div>
                    <div className="gallery-item">Photo 5</div>
                    <div className="gallery-item">Photo 6</div>
                  </div>
                  <code>grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));</code>
                </div>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Dashboard Layout</h3>
                  <div className="example-dashboard">
                    <div className="dashboard-header">Header</div>
                    <div className="dashboard-sidebar">Sidebar</div>
                    <div className="dashboard-main">Main Content</div>
                    <div className="dashboard-widget">Widget 1</div>
                    <div className="dashboard-widget">Widget 2</div>
                  </div>
                  <code>grid-template-areas: "header header" "sidebar main" "widget1 widget2";</code>
                </div>
                
                <div className="card">
                  <h3>Form Layout</h3>
                  <div className="example-form">
                    <div className="form-field">Name</div>
                    <div className="form-field">Email</div>
                    <div className="form-field">Phone</div>
                    <div className="form-field">Message</div>
                    <div className="form-submit">Submit</div>
                  </div>
                  <code>grid-template-columns: 1fr 1fr; grid-template-rows: auto auto auto auto auto;</code>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
