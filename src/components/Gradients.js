/** @format */

import React, { useState } from "react";
import "./AppleDesign.css";
import "./Gradients.css";

export default function Gradients() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedGradient, setSelectedGradient] = useState("linear");

  const sections = [
    { id: "overview", title: "Overview", icon: "🌈" },
    { id: "linear", title: "Linear Gradients", icon: "📐" },
    { id: "radial", title: "Radial Gradients", icon: "⭕" },
    { id: "conic", title: "Conic Gradients", icon: "🔄" },
    { id: "advanced", title: "Advanced", icon: "🚀" },
    { id: "examples", title: "Examples", icon: "💡" },
  ];

  const gradientTypes = [
    { id: "linear", name: "Linear", description: "Straight line gradients" },
    { id: "radial", name: "Radial", description: "Circular gradients" },
    { id: "conic", name: "Conic", description: "Angular gradients" },
  ];

  return (
    <div className="gradients-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">CSS Gradients</h1>
          <p className="hero-subtitle">
            Create beautiful, smooth color transitions with CSS gradients
          </p>
          
          {/* Gradient Preview */}
          <div className="gradient-preview">
            <div className="preview-gradient">
              <div className="gradient-demo linear-demo"></div>
              <div className="gradient-demo radial-demo"></div>
              <div className="gradient-demo conic-demo"></div>
            </div>
            <p className="preview-description">
              Smooth color transitions that add depth and visual interest to your designs
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
                <h2 className="section-title">Gradient Fundamentals</h2>
                <p className="section-subtitle">
                  Master CSS gradients for stunning visual effects
                </p>
              </div>
              
              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">📐</div>
                  <h3 className="feature-title">Linear Gradients</h3>
                  <p>Straight line color transitions in any direction</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">⭕</div>
                  <h3 className="feature-title">Radial Gradients</h3>
                  <p>Circular color transitions from center outward</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔄</div>
                  <h3 className="feature-title">Conic Gradients</h3>
                  <p>Angular color transitions around a center point</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎨</div>
                  <h3 className="feature-title">Color Stops</h3>
                  <p>Precise control over color positions and transitions</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Linear Gradients Section */}
        {activeSection === "linear" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Linear Gradients</h2>
                <p className="section-subtitle">
                  Create straight line color transitions
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>Top to Bottom</h3>
                  <div className="gradient-demo linear-top-bottom"></div>
                  <code>linear-gradient(to bottom, #007AFF, #5856D6)</code>
                </div>
                
                <div className="card">
                  <h3>Left to Right</h3>
                  <div className="gradient-demo linear-left-right"></div>
                  <code>linear-gradient(to right, #007AFF, #5856D6)</code>
                </div>
                
                <div className="card">
                  <h3>Diagonal</h3>
                  <div className="gradient-demo linear-diagonal"></div>
                  <code>linear-gradient(45deg, #007AFF, #5856D6)</code>
                </div>
                
                <div className="card">
                  <h3>Multiple Colors</h3>
                  <div className="gradient-demo linear-multiple"></div>
                  <code>linear-gradient(to right, #007AFF, #5856D6, #FF2D92)</code>
                </div>
                
                <div className="card">
                  <h3>Color Stops</h3>
                  <div className="gradient-demo linear-stops"></div>
                  <code>linear-gradient(to right, #007AFF 0%, #5856D6 50%, #FF2D92 100%)</code>
                </div>
                
                <div className="card">
                  <h3>Transparency</h3>
                  <div className="gradient-demo linear-transparency"></div>
                  <code>linear-gradient(to right, rgba(0,122,255,0.8), rgba(88,86,214,0.6))</code>
                </div>
              </div>
              
              <div className="gradient-direction">
                <h3>Gradient Directions</h3>
                <div className="grid grid-4">
                  <div className="direction-demo">
                    <div className="direction-gradient to-top"></div>
                    <code>to top</code>
                  </div>
                  <div className="direction-demo">
                    <div className="direction-gradient to-right"></div>
                    <code>to right</code>
                  </div>
                  <div className="direction-demo">
                    <div className="direction-gradient to-bottom"></div>
                    <code>to bottom</code>
                  </div>
                  <div className="direction-demo">
                    <div className="direction-gradient to-left"></div>
                    <code>to left</code>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Radial Gradients Section */}
        {activeSection === "radial" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Radial Gradients</h2>
                <p className="section-subtitle">
                  Create circular color transitions
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>Circle (Default)</h3>
                  <div className="gradient-demo radial-circle"></div>
                  <code>radial-gradient(circle, #007AFF, #5856D6)</code>
                </div>
                
                <div className="card">
                  <h3>Ellipse</h3>
                  <div className="gradient-demo radial-ellipse"></div>
                  <code>radial-gradient(ellipse, #007AFF, #5856D6)</code>
                </div>
                
                <div className="card">
                  <h3>Center Position</h3>
                  <div className="gradient-demo radial-center"></div>
                  <code>radial-gradient(circle at center, #007AFF, #5856D6)</code>
                </div>
                
                <div className="card">
                  <h3>Top Left</h3>
                  <div className="gradient-demo radial-top-left"></div>
                  <code>radial-gradient(circle at top left, #007AFF, #5856D6)</code>
                </div>
                
                <div className="card">
                  <h3>Bottom Right</h3>
                  <div className="gradient-demo radial-bottom-right"></div>
                  <code>radial-gradient(circle at bottom right, #007AFF, #5856D6)</code>
                </div>
                
                <div className="card">
                  <h3>Multiple Colors</h3>
                  <div className="gradient-demo radial-multiple"></div>
                  <code>radial-gradient(circle, #007AFF, #5856D6, #FF2D92)</code>
                </div>
              </div>
              
              <div className="radial-shapes">
                <h3>Radial Gradient Shapes</h3>
                <div className="grid grid-3">
                  <div className="shape-demo">
                    <div className="shape-gradient circle-shape"></div>
                    <code>circle</code>
                  </div>
                  <div className="shape-demo">
                    <div className="shape-gradient ellipse-shape"></div>
                    <code>ellipse</code>
                  </div>
                  <div className="shape-demo">
                    <div className="shape-gradient closest-side-shape"></div>
                    <code>closest-side</code>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Conic Gradients Section */}
        {activeSection === "conic" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Conic Gradients</h2>
                <p className="section-subtitle">
                  Create angular color transitions
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>Basic Conic</h3>
                  <div className="gradient-demo conic-basic"></div>
                  <code>conic-gradient(#007AFF, #5856D6, #FF2D92, #007AFF)</code>
                </div>
                
                <div className="card">
                  <h3>From Angle</h3>
                  <div className="gradient-demo conic-from"></div>
                  <code>conic-gradient(from 45deg, #007AFF, #5856D6)</code>
                </div>
                
                <div className="card">
                  <h3>Center Position</h3>
                  <div className="gradient-demo conic-center"></div>
                  <code>conic-gradient(from 0deg at center, #007AFF, #5856D6)</code>
                </div>
                
                <div className="card">
                  <h3>Color Stops</h3>
                  <div className="gradient-demo conic-stops"></div>
                  <code>conic-gradient(from 0deg, #007AFF 0deg, #5856D6 180deg)</code>
                </div>
                
                <div className="card">
                  <h3>Repeating</h3>
                  <div className="gradient-demo conic-repeating"></div>
                  <code>repeating-conic-gradient(#007AFF 0deg 60deg, #5856D6 60deg 120deg)</code>
                </div>
                
                <div className="card">
                  <h3>Complex Pattern</h3>
                  <div className="gradient-demo conic-complex"></div>
                  <code>Multiple color stops with precise angles</code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Advanced Section */}
        {activeSection === "advanced" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Advanced Gradient Techniques</h2>
                <p className="section-subtitle">
                  Complex gradient patterns and effects
                </p>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Multiple Gradients</h3>
                  <div className="gradient-demo multiple-gradients"></div>
                  <code>background: linear-gradient(...), radial-gradient(...);</code>
                </div>
                
                <div className="card">
                  <h3>Gradient Borders</h3>
                  <div className="gradient-demo gradient-border"></div>
                  <code>border-image: linear-gradient(...) 1;</code>
                </div>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Gradient Text</h3>
                  <div className="gradient-demo gradient-text">
                    <h2>Gradient Text</h2>
                  </div>
                  <code>background: linear-gradient(...); -webkit-background-clip: text;</code>
                </div>
                
                <div className="card">
                  <h3>Animated Gradients</h3>
                  <div className="gradient-demo animated-gradient"></div>
                  <code>@keyframes with background-position</code>
                </div>
              </div>
              
              <div className="gradient-generator">
                <h3>Interactive Gradient Generator</h3>
                <div className="generator-controls">
                  <div className="control-group">
                    <label>Type:</label>
                    <select 
                      value={selectedGradient} 
                      onChange={(e) => setSelectedGradient(e.target.value)}
                    >
                      {gradientTypes.map(type => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="control-group">
                    <label>Colors:</label>
                    <div className="color-inputs">
                      <input type="color" defaultValue="#007AFF" />
                      <input type="color" defaultValue="#5856D6" />
                      <input type="color" defaultValue="#FF2D92" />
                    </div>
                  </div>
                </div>
                
                <div className="generator-preview">
                  <div className={`preview-gradient ${selectedGradient}-preview`}></div>
                  <div className="generator-code">
                    <code>Generated CSS code will appear here</code>
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
                  Real-world gradient implementations
                </p>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Button Gradients</h3>
                  <div className="example-demo">
                    <button className="gradient-button primary">Primary Button</button>
                    <button className="gradient-button secondary">Secondary Button</button>
                    <button className="gradient-button accent">Accent Button</button>
                  </div>
                  <code>Linear gradients for button backgrounds</code>
                </div>
                
                <div className="card">
                  <h3>Card Backgrounds</h3>
                  <div className="example-demo">
                    <div className="gradient-card card-1">Card 1</div>
                    <div className="gradient-card card-2">Card 2</div>
                    <div className="gradient-card card-3">Card 3</div>
                  </div>
                  <code>Subtle gradients for card backgrounds</code>
                </div>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Header Backgrounds</h3>
                  <div className="example-demo">
                    <div className="gradient-header header-1">Header 1</div>
                    <div className="gradient-header header-2">Header 2</div>
                    <div className="gradient-header header-3">Header 3</div>
                  </div>
                  <code>Hero section and header backgrounds</code>
                </div>
                
                <div className="card">
                  <h3>Icon Backgrounds</h3>
                  <div className="example-demo">
                    <div className="gradient-icon icon-1">🚀</div>
                    <div className="gradient-icon icon-2">💡</div>
                    <div className="gradient-icon icon-3">🎯</div>
                  </div>
                  <code>Circular gradients for icon backgrounds</code>
                </div>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Form Elements</h3>
                  <div className="example-demo">
                    <input type="text" className="gradient-input" placeholder="Gradient Input" />
                    <textarea className="gradient-textarea" placeholder="Gradient Textarea"></textarea>
                  </div>
                  <code>Subtle gradients for form elements</code>
                </div>
                
                <div className="card">
                  <h3>Progress Bars</h3>
                  <div className="example-demo">
                    <div className="gradient-progress">
                      <div className="progress-fill"></div>
                    </div>
                    <div className="gradient-progress">
                      <div className="progress-fill"></div>
                    </div>
                  </div>
                  <code>Animated gradient progress bars</code>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
