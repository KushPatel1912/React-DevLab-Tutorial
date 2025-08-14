/** @format */

import React, { useState, useEffect } from "react";
import "./AppleDesign.css";
import "./Responsive.css";

export default function Responsive() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [activeSection, setActiveSection] =
    useState("overview");

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  const getBreakpoint = () => {
    if (windowSize.width >= 1200)
      return "Extra Large (≥1200px)";
    if (windowSize.width >= 992)
      return "Large (≥992px)";
    if (windowSize.width >= 768)
      return "Medium (≥768px)";
    if (windowSize.width >= 576)
      return "Small (≥576px)";
    return "Extra Small (<576px)";
  };

  const sections = [
    { id: "overview", title: "Overview", icon: "📱" },
    {
      id: "media-queries",
      title: "Media Queries",
      icon: "🔍",
    },
    { id: "grid", title: "Grid System", icon: "🔲" },
    { id: "images", title: "Images", icon: "🖼️" },
    {
      id: "navigation",
      title: "Navigation",
      icon: "🧭",
    },
    {
      id: "typography",
      title: "Typography",
      icon: "📝",
    },
    { id: "layouts", title: "Layouts", icon: "📐" },
    { id: "tables", title: "Tables", icon: "📊" },
    { id: "forms", title: "Forms", icon: "📋" },
    {
      id: "utilities",
      title: "Utilities",
      icon: "⚙️",
    },
  ];

  return (
    <div className="responsive-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Responsive Design
          </h1>
          <p className="hero-subtitle">
            Create beautiful, adaptive layouts that
            work perfectly on every device
          </p>

          {/* Live Window Size Display */}
          <div className="window-size-display">
            <div className="size-card">
              <div className="size-icon">📱</div>
              <div className="size-info">
                <div className="size-value">
                  {windowSize.width}px
                </div>
                <div className="size-label">Width</div>
              </div>
            </div>
            <div className="size-card">
              <div className="size-icon">📏</div>
              <div className="size-info">
                <div className="size-value">
                  {windowSize.height}px
                </div>
                <div className="size-label">
                  Height
                </div>
              </div>
            </div>
            <div className="size-card">
              <div className="size-icon">🎯</div>
              <div className="size-info">
                <div className="size-value">
                  {getBreakpoint()}
                </div>
                <div className="size-label">
                  Breakpoint
                </div>
              </div>
            </div>
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
                  Responsive Design Principles
                </h2>
                <p className="section-subtitle">
                  Build websites that adapt seamlessly
                  to any screen size
                </p>
              </div>

              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    📱
                  </div>
                  <h3 className="feature-title">
                    Mobile First
                  </h3>
                  <p>
                    Start with mobile design and
                    progressively enhance for larger
                    screens
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    🔍
                  </div>
                  <h3 className="feature-title">
                    Media Queries
                  </h3>
                  <p>
                    Use CSS media queries to apply
                    different styles at different
                    breakpoints
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    📐
                  </div>
                  <h3 className="feature-title">
                    Flexible Layouts
                  </h3>
                  <p>
                    Create layouts that adapt and flow
                    naturally across devices
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    🖼️
                  </div>
                  <h3 className="feature-title">
                    Responsive Images
                  </h3>
                  <p>
                    Ensure images scale appropriately
                    and load efficiently
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Media Queries Section */}
        {activeSection === "media-queries" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Media Query Examples
                </h2>
                <p className="section-subtitle">
                  Learn how to use CSS media queries
                  for responsive design
                </p>
              </div>

              <div className="grid grid-3">
                <div className="card">
                  <div className="card-header">
                    <div className="card-icon mobile">
                      📱
                    </div>
                    <h3>Mobile First</h3>
                  </div>
                  <p>Base styles for mobile devices</p>
                  <code>
                    /* Mobile styles (default) */
                  </code>
                  <div className="demo-box mobile-demo">
                    <p>Mobile optimized content</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <div className="card-icon tablet">
                      📱
                    </div>
                    <h3>Tablet (≥768px)</h3>
                  </div>
                  <p>Styles for tablet devices</p>
                  <code>
                    @media (min-width: 768px) &#123;
                    ... &#125;
                  </code>
                  <div className="demo-box tablet-demo">
                    <p>Tablet optimized content</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <div className="card-icon desktop">
                      💻
                    </div>
                    <h3>Desktop (≥992px)</h3>
                  </div>
                  <p>Styles for desktop devices</p>
                  <code>
                    @media (min-width: 992px) &#123;
                    ... &#125;
                  </code>
                  <div className="demo-box desktop-demo">
                    <p>Desktop optimized content</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Grid System Section */}
        {activeSection === "grid" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Responsive Grid System
                </h2>
                <p className="section-subtitle">
                  Create flexible layouts that adapt to
                  different screen sizes
                </p>
              </div>

              <div className="responsive-grid-demo">
                <div className="grid-item">Item 1</div>
                <div className="grid-item">Item 2</div>
                <div className="grid-item">Item 3</div>
                <div className="grid-item">Item 4</div>
                <div className="grid-item">Item 5</div>
                <div className="grid-item">Item 6</div>
              </div>

              <div className="grid-info">
                <p>
                  This grid automatically adjusts
                  columns based on screen size:
                  <br />
                  <strong>Mobile:</strong> 1 column |{" "}
                  <strong>Tablet:</strong> 2 columns |{" "}
                  <strong>Desktop:</strong> 3 columns
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Images Section */}
        {activeSection === "images" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Responsive Images
                </h2>
                <p className="section-subtitle">
                  Ensure images look great on all
                  devices
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Responsive Image</h3>
                  <div className="image-demo responsive-image">
                    <div className="image-placeholder">
                      <span>Responsive Image</span>
                      <small>
                        Adapts to container width
                      </small>
                    </div>
                  </div>
                  <code>
                    max-width: 100%; height: auto;
                  </code>
                </div>

                <div className="card">
                  <h3>Picture Element</h3>
                  <div className="image-demo picture-demo">
                    <div className="image-placeholder large">
                      <span>Large Image</span>
                      <small>Desktop version</small>
                    </div>
                    <div className="image-placeholder small">
                      <span>Small Image</span>
                      <small>Mobile version</small>
                    </div>
                  </div>
                  <code>
                    &lt;picture&gt; with &lt;source&gt;
                    media queries
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Navigation Section */}
        {activeSection === "navigation" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Responsive Navigation
                </h2>
                <p className="section-subtitle">
                  Create navigation that works on all
                  devices
                </p>
              </div>

              <div className="navigation-demo">
                <nav className="demo-nav">
                  <div className="nav-brand">Logo</div>
                  <div className="nav-menu">
                    <button className="nav-link">
                      Home
                    </button>
                    <button className="nav-link">
                      About
                    </button>
                    <button className="nav-link">
                      Services
                    </button>
                    <button className="nav-link">
                      Contact
                    </button>
                  </div>
                  <button className="nav-toggle">
                    ☰
                  </button>
                </nav>
                <p className="demo-info">
                  This navigation adapts from
                  horizontal menu on desktop to
                  hamburger menu on mobile
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Typography Section */}
        {activeSection === "typography" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Responsive Typography
                </h2>
                <p className="section-subtitle">
                  Create text that scales beautifully
                  across devices
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Fluid Typography</h3>
                  <h1 className="fluid-heading">
                    Fluid Heading
                  </h1>
                  <p className="fluid-text">
                    This text scales smoothly with
                    viewport size
                  </p>
                  <code>
                    font-size: clamp(1rem, 5vw, 3rem);
                  </code>
                </div>

                <div className="card">
                  <h3>Breakpoint Typography</h3>
                  <h2 className="breakpoint-heading">
                    Breakpoint Heading
                  </h2>
                  <p className="breakpoint-text">
                    This text changes at specific
                    breakpoints
                  </p>
                  <code>
                    @media (max-width: 768px) &#123;
                    font-size: 1.5rem; &#125;
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Layouts Section */}
        {activeSection === "layouts" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Responsive Layouts
                </h2>
                <p className="section-subtitle">
                  Build layouts that adapt to different
                  screen sizes
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Sidebar Layout</h3>
                  <div className="layout-demo sidebar-layout">
                    <aside className="sidebar">
                      Sidebar
                    </aside>
                    <main className="main-content">
                      Main Content
                    </main>
                  </div>
                  <p>
                    Sidebar stacks above content on
                    mobile
                  </p>
                </div>

                <div className="card">
                  <h3>Card Layout</h3>
                  <div className="layout-demo card-layout">
                    <div className="demo-card">
                      Card 1
                    </div>
                    <div className="demo-card">
                      Card 2
                    </div>
                    <div className="demo-card">
                      Card 3
                    </div>
                  </div>
                  <p>
                    Cards stack vertically on mobile,
                    grid on larger screens
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tables Section */}
        {activeSection === "tables" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Responsive Tables
                </h2>
                <p className="section-subtitle">
                  Make tables work on all devices
                </p>
              </div>

              <div className="table-demo">
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>John Doe</td>
                        <td>john@example.com</td>
                        <td>+1 234 567 890</td>
                        <td>Active</td>
                      </tr>
                      <tr>
                        <td>Jane Smith</td>
                        <td>jane@example.com</td>
                        <td>+1 234 567 891</td>
                        <td>Inactive</td>
                      </tr>
                      <tr>
                        <td>Bob Johnson</td>
                        <td>bob@example.com</td>
                        <td>+1 234 567 892</td>
                        <td>Active</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="demo-info">
                  This table becomes scrollable on
                  small screens and stacks content on
                  very small devices
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Forms Section */}
        {activeSection === "forms" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Responsive Forms
                </h2>
                <p className="section-subtitle">
                  Create forms that work perfectly on
                  all devices
                </p>
              </div>

              <div className="form-demo">
                <form className="responsive-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="input"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="input"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="input"
                        placeholder="Enter your phone"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="input"
                      rows="4"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* Utilities Section */}
        {activeSection === "utilities" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Utility Classes
                </h2>
                <p className="section-subtitle">
                  Helper classes for responsive design
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Visibility Classes</h3>
                  <div className="visibility-demo">
                    <div className="visible-mobile">
                      Visible on Mobile
                    </div>
                    <div className="visible-tablet">
                      Visible on Tablet
                    </div>
                    <div className="visible-desktop">
                      Visible on Desktop
                    </div>
                  </div>
                  <code>
                    .visible-mobile, .visible-tablet,
                    .visible-desktop
                  </code>
                </div>

                <div className="card">
                  <h3>Spacing Classes</h3>
                  <div className="spacing-demo">
                    <div className="responsive-padding">
                      Responsive Padding
                    </div>
                    <div className="responsive-margin">
                      Responsive Margin
                    </div>
                  </div>
                  <code>
                    padding: clamp(1rem, 3vw, 3rem);
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
