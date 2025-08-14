/** @format */

import React, { useState } from "react";
import "./AppleDesign.css";
import "./Typography.css";

export default function Typography() {
  const [activeSection, setActiveSection] =
    useState("overview");
  const [selectedFont, setSelectedFont] =
    useState("system");

  const sections = [
    { id: "overview", title: "Overview", icon: "📝" },
    {
      id: "fonts",
      title: "Font Families",
      icon: "🔤",
    },
    { id: "sizes", title: "Font Sizes", icon: "📏" },
    {
      id: "weights",
      title: "Font Weights",
      icon: "⚖️",
    },
    {
      id: "transforms",
      title: "Text Transforms",
      icon: "🔄",
    },
    {
      id: "decoration",
      title: "Text Decoration",
      icon: "✨",
    },
    { id: "spacing", title: "Spacing", icon: "📐" },
    {
      id: "alignment",
      title: "Alignment",
      icon: "🎯",
    },
    {
      id: "line-height",
      title: "Line Height",
      icon: "📊",
    },
    {
      id: "responsive",
      title: "Responsive",
      icon: "📱",
    },
    { id: "advanced", title: "Advanced", icon: "🚀" },
  ];

  const fonts = [
    {
      id: "system",
      name: "System Fonts",
      class: "font-system",
      description:
        "Native system fonts for optimal performance",
    },
    {
      id: "serif",
      name: "Serif Fonts",
      class: "font-serif",
      description:
        "Traditional serif fonts with elegant details",
    },
    {
      id: "sans",
      name: "Sans-Serif",
      class: "font-sans",
      description: "Clean, modern sans-serif fonts",
    },
    {
      id: "mono",
      name: "Monospace",
      class: "font-mono",
      description:
        "Fixed-width fonts for code and data",
    },
    {
      id: "custom",
      name: "Custom Web Fonts",
      class: "font-custom",
      description:
        "Custom fonts loaded from external sources",
    },
  ];

  const fontSizes = [
    {
      class: "size-xs",
      value: "0.75rem",
      description: "Extra small text",
    },
    {
      class: "size-sm",
      value: "0.875rem",
      description: "Small text",
    },
    {
      class: "size-base",
      value: "1rem",
      description: "Base text size",
    },
    {
      class: "size-lg",
      value: "1.125rem",
      description: "Large text",
    },
    {
      class: "size-xl",
      value: "1.25rem",
      description: "Extra large text",
    },
    {
      class: "size-2xl",
      value: "1.5rem",
      description: "2X large text",
    },
    {
      class: "size-3xl",
      value: "1.875rem",
      description: "3X large text",
    },
    {
      class: "size-4xl",
      value: "2.25rem",
      description: "4X large text",
    },
  ];

  const fontWeights = [
    {
      class: "weight-thin",
      value: "100",
      description: "Thin weight",
    },
    {
      class: "weight-light",
      value: "300",
      description: "Light weight",
    },
    {
      class: "weight-normal",
      value: "400",
      description: "Normal weight",
    },
    {
      class: "weight-medium",
      value: "500",
      description: "Medium weight",
    },
    {
      class: "weight-semibold",
      value: "600",
      description: "Semi-bold weight",
    },
    {
      class: "weight-bold",
      value: "700",
      description: "Bold weight",
    },
    {
      class: "weight-black",
      value: "900",
      description: "Black weight",
    },
  ];

  return (
    <div className="typography-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Typography System
          </h1>
          <p className="hero-subtitle">
            Beautiful, readable typography that scales
            across all devices
          </p>

          {/* Font Preview */}
          <div className="font-preview">
            <div className="preview-text">
              <h2 className="preview-heading">
                The quick brown fox jumps over the lazy
                dog
              </h2>
              <p className="preview-body">
                Typography is the art and technique of
                arranging type to make written language
                legible, readable, and appealing when
                displayed. Good typography enhances
                readability and user experience.
              </p>
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
                  Typography Principles
                </h2>
                <p className="section-subtitle">
                  Create beautiful, readable text that
                  enhances user experience
                </p>
              </div>

              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    📖
                  </div>
                  <h3 className="feature-title">
                    Readability
                  </h3>
                  <p>
                    Ensure text is easy to read across
                    all devices and screen sizes
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    🎨
                  </div>
                  <h3 className="feature-title">
                    Visual Hierarchy
                  </h3>
                  <p>
                    Use different font sizes and
                    weights to create clear information
                    hierarchy
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    📱
                  </div>
                  <h3 className="feature-title">
                    Responsive
                  </h3>
                  <p>
                    Typography that adapts beautifully
                    to different screen sizes
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    ⚡
                  </div>
                  <h3 className="feature-title">
                    Performance
                  </h3>
                  <p>
                    Optimize font loading for fast,
                    smooth user experience
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Font Families Section */}
        {activeSection === "fonts" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Font Families
                </h2>
                <p className="section-subtitle">
                  Choose the right font family for your
                  design
                </p>
              </div>

              <div className="font-selector">
                <div className="font-options">
                  {fonts.map((font) => (
                    <button
                      key={font.id}
                      className={`font-option ${
                        selectedFont === font.id
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedFont(font.id)
                      }
                    >
                      <span className="font-name">
                        {font.name}
                      </span>
                      <span className="font-description">
                        {font.description}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="font-demo">
                  <div
                    className={`demo-text ${
                      fonts.find(
                        (f) => f.id === selectedFont
                      )?.class
                    }`}
                  >
                    <h3>
                      The quick brown fox jumps over
                      the lazy dog
                    </h3>
                    <p>
                      This is a sample text to
                      demonstrate how the selected font
                      family looks. It shows both
                      heading and body text styles to
                      give you a complete picture of
                      the typography choices available.
                    </p>
                    <code>
                      font-family:{" "}
                      {
                        fonts.find(
                          (f) => f.id === selectedFont
                        )?.name
                      }
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Font Sizes Section */}
        {activeSection === "sizes" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Font Sizes
                </h2>
                <p className="section-subtitle">
                  Scale your typography with consistent
                  size increments
                </p>
              </div>

              <div className="size-demo">
                {fontSizes.map((size, index) => (
                  <div
                    key={size.class}
                    className="size-item"
                    style={{
                      animationDelay: `${
                        index * 0.1
                      }s`,
                    }}
                  >
                    <div
                      className={`size-text ${size.class}`}
                    >
                      {size.value} - Sample text
                    </div>
                    <div className="size-info">
                      <span className="size-value">
                        {size.value}
                      </span>
                      <span className="size-description">
                        {size.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Font Weights Section */}
        {activeSection === "weights" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Font Weights
                </h2>
                <p className="section-subtitle">
                  Use different font weights to create
                  visual hierarchy
                </p>
              </div>

              <div className="weight-demo">
                {fontWeights.map((weight, index) => (
                  <div
                    key={weight.class}
                    className="weight-item"
                    style={{
                      animationDelay: `${
                        index * 0.1
                      }s`,
                    }}
                  >
                    <div
                      className={`weight-text ${weight.class}`}
                    >
                      Font Weight {weight.value}
                    </div>
                    <div className="weight-info">
                      <span className="weight-value">
                        {weight.value}
                      </span>
                      <span className="weight-description">
                        {weight.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Text Transforms Section */}
        {activeSection === "transforms" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Text Transforms
                </h2>
                <p className="section-subtitle">
                  Transform text case and appearance
                </p>
              </div>

              <div className="grid grid-3">
                <div className="card">
                  <h3>Uppercase</h3>
                  <div className="transform-demo uppercase">
                    <p>
                      This text is transformed to
                      uppercase
                    </p>
                  </div>
                  <code>
                    text-transform: uppercase;
                  </code>
                </div>

                <div className="card">
                  <h3>Lowercase</h3>
                  <div className="transform-demo lowercase">
                    <p>
                      THIS TEXT IS TRANSFORMED TO
                      LOWERCASE
                    </p>
                  </div>
                  <code>
                    text-transform: lowercase;
                  </code>
                </div>

                <div className="card">
                  <h3>Capitalize</h3>
                  <div className="transform-demo capitalize">
                    <p>this text is capitalized</p>
                  </div>
                  <code>
                    text-transform: capitalize;
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Text Decoration Section */}
        {activeSection === "decoration" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Text Decoration
                </h2>
                <p className="section-subtitle">
                  Add decorative elements to your text
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Underline</h3>
                  <div className="decoration-demo underline">
                    <p>
                      This text has an underline
                      decoration
                    </p>
                  </div>
                  <code>
                    text-decoration: underline;
                  </code>
                </div>

                <div className="card">
                  <h3>Overline</h3>
                  <div className="decoration-demo overline">
                    <p>
                      This text has an overline
                      decoration
                    </p>
                  </div>
                  <code>
                    text-decoration: overline;
                  </code>
                </div>

                <div className="card">
                  <h3>Line Through</h3>
                  <div className="decoration-demo line-through">
                    <p>
                      This text has a line-through
                      decoration
                    </p>
                  </div>
                  <code>
                    text-decoration: line-through;
                  </code>
                </div>

                <div className="card">
                  <h3>No Decoration</h3>
                  <div className="decoration-demo none">
                    <p>This text has no decoration</p>
                  </div>
                  <code>text-decoration: none;</code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Spacing Section */}
        {activeSection === "spacing" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Letter & Word Spacing
                </h2>
                <p className="section-subtitle">
                  Control the spacing between letters
                  and words
                </p>
              </div>

              <div className="grid grid-3">
                <div className="card">
                  <h3>Letter Spacing</h3>
                  <div className="spacing-demo letter-spacing">
                    <p>
                      This text has increased letter
                      spacing
                    </p>
                  </div>
                  <code>letter-spacing: 2px;</code>
                </div>

                <div className="card">
                  <h3>Word Spacing</h3>
                  <div className="spacing-demo word-spacing">
                    <p>
                      This text has increased word
                      spacing
                    </p>
                  </div>
                  <code>word-spacing: 5px;</code>
                </div>

                <div className="card">
                  <h3>Tight Spacing</h3>
                  <div className="spacing-demo tight-spacing">
                    <p>
                      This text has tight letter
                      spacing
                    </p>
                  </div>
                  <code>letter-spacing: -1px;</code>
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
                <h2 className="section-title">
                  Text Alignment
                </h2>
                <p className="section-subtitle">
                  Align text for better readability and
                  visual appeal
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Horizontal Alignment</h3>
                  <div className="alignment-demo">
                    <p className="text-left">
                      This text is left-aligned
                    </p>
                    <p className="text-center">
                      This text is center-aligned
                    </p>
                    <p className="text-right">
                      This text is right-aligned
                    </p>
                    <p className="text-justify">
                      This text is justified. It
                      spreads across the full width of
                      the container, creating even
                      spacing between words for a
                      clean, professional appearance.
                    </p>
                  </div>
                  <code>
                    text-align: left; center; right;
                    justify;
                  </code>
                </div>

                <div className="card">
                  <h3>Vertical Alignment</h3>
                  <div className="vertical-align-demo">
                    <div className="align-container">
                      <span className="vertical-top">
                        Top aligned
                      </span>
                      <span className="vertical-middle">
                        Middle aligned
                      </span>
                      <span className="vertical-bottom">
                        Bottom aligned
                      </span>
                    </div>
                  </div>
                  <code>
                    vertical-align: top; middle;
                    bottom;
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Line Height Section */}
        {activeSection === "line-height" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Line Height
                </h2>
                <p className="section-subtitle">
                  Control the spacing between lines for
                  better readability
                </p>
              </div>

              <div className="grid grid-3">
                <div className="card">
                  <h3>Tight Line Height</h3>
                  <div className="line-height-demo tight">
                    <p>
                      This text has tight line height.
                      It makes the text more compact
                      and easier to read in small
                      spaces. Perfect for headings and
                      short content blocks.
                    </p>
                  </div>
                  <code>line-height: 1.2;</code>
                </div>

                <div className="card">
                  <h3>Normal Line Height</h3>
                  <div className="line-height-demo normal">
                    <p>
                      This text has normal line height.
                      It provides comfortable reading
                      experience for most content. This
                      is the standard line height used
                      in most web content.
                    </p>
                  </div>
                  <code>line-height: 1.5;</code>
                </div>

                <div className="card">
                  <h3>Loose Line Height</h3>
                  <div className="line-height-demo loose">
                    <p>
                      This text has loose line height.
                      It creates more breathing room
                      between lines, making it easier
                      to read longer content and
                      improving overall readability.
                    </p>
                  </div>
                  <code>line-height: 2;</code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Responsive Typography Section */}
        {activeSection === "responsive" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Responsive Typography
                </h2>
                <p className="section-subtitle">
                  Typography that adapts to different
                  screen sizes
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Fluid Typography</h3>
                  <div className="responsive-demo fluid">
                    <h1 className="fluid-heading">
                      Fluid Heading
                    </h1>
                    <p className="fluid-text">
                      This text scales smoothly with
                      viewport size using CSS clamp()
                    </p>
                  </div>
                  <code>
                    font-size: clamp(1rem, 2.5vw,
                    3rem);
                  </code>
                </div>

                <div className="card">
                  <h3>Breakpoint Typography</h3>
                  <div className="responsive-demo breakpoint">
                    <h2 className="breakpoint-heading">
                      Breakpoint Heading
                    </h2>
                    <p className="breakpoint-text">
                      This text changes at specific
                      breakpoints using media queries
                    </p>
                  </div>
                  <code>
                    @media (max-width: 768px) &#123;
                    font-size: 1rem; &#125;
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Advanced Typography Section */}
        {activeSection === "advanced" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">
                  Advanced Typography
                </h2>
                <p className="section-subtitle">
                  Advanced text effects and techniques
                </p>
              </div>

              <div className="grid grid-2">
                <div className="card">
                  <h3>Text Shadows</h3>
                  <div className="advanced-demo">
                    <h1 className="text-shadow-3d">
                      3D Text Effect
                    </h1>
                    <h1 className="text-shadow-glow">
                      Glowing Text
                    </h1>
                  </div>
                  <code>
                    text-shadow: 2px 2px 4px
                    rgba(0,0,0,0.5);
                  </code>
                </div>

                <div className="card">
                  <h3>Gradient Text</h3>
                  <div className="advanced-demo">
                    <h1 className="gradient-text">
                      Gradient Text
                    </h1>
                    <h1 className="animated-gradient-text">
                      Animated Gradient
                    </h1>
                  </div>
                  <code>
                    background: linear-gradient(...);
                    -webkit-background-clip: text;
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
