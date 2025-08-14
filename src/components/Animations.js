/** @format */

import React, { useState } from "react";
import "./AppleDesign.css";
import "./Animations.css";

export default function Animations() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedAnimation, setSelectedAnimation] = useState("fade-in");

  const sections = [
    { id: "overview", title: "Overview", icon: "✨" },
    { id: "transitions", title: "Transitions", icon: "🔄" },
    { id: "keyframes", title: "Keyframes", icon: "🎬" },
    { id: "transforms", title: "Transforms", icon: "🔄" },
    { id: "hover", title: "Hover Effects", icon: "👆" },
    { id: "loading", title: "Loading", icon: "⏳" },
    { id: "scroll", title: "Scroll", icon: "📜" },
    { id: "advanced", title: "Advanced", icon: "🚀" },
    { id: "examples", title: "Examples", icon: "💡" },
  ];

  const animations = [
    { id: "fade-in", name: "Fade In", description: "Smooth fade in effect" },
    { id: "slide-up", name: "Slide Up", description: "Slide up from bottom" },
    { id: "bounce", name: "Bounce", description: "Bouncy animation" },
    { id: "pulse", name: "Pulse", description: "Pulsing effect" },
    { id: "shake", name: "Shake", description: "Shake animation" },
    { id: "rotate", name: "Rotate", description: "Rotation effect" },
  ];

  return (
    <div className="animations-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">CSS Animations</h1>
          <p className="hero-subtitle">
            Bring your designs to life with smooth, engaging animations
          </p>
          
          {/* Animation Preview */}
          <div className="animation-preview">
            <div className="preview-animation">
              <div className="preview-element">✨</div>
              <div className="preview-element">🎨</div>
              <div className="preview-element">🚀</div>
            </div>
            <p className="preview-description">
              Create delightful user experiences with CSS animations and transitions
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
                <h2 className="section-title">Animation Fundamentals</h2>
                <p className="section-subtitle">
                  Master CSS animations for engaging user experiences
                </p>
              </div>
              
              <div className="feature-grid">
                <div className="feature-item">
                  <div className="feature-icon">✨</div>
                  <h3 className="feature-title">Smooth Transitions</h3>
                  <p>Create fluid state changes with CSS transitions</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎬</div>
                  <h3 className="feature-title">Keyframe Animations</h3>
                  <p>Build complex animations with @keyframes</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔄</div>
                  <h3 className="feature-title">Transform Effects</h3>
                  <p>Move, scale, rotate, and skew elements</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📱</div>
                  <h3 className="feature-title">Performance</h3>
                  <p>Hardware-accelerated animations for smooth performance</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Transitions Section */}
        {activeSection === "transitions" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">CSS Transitions</h2>
                <p className="section-subtitle">
                  Smooth state changes with CSS transitions
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>Basic Transition</h3>
                  <div className="transition-demo basic">
                    <div className="transition-element">Hover Me</div>
                  </div>
                  <code>transition: all 0.3s ease;</code>
                </div>
                
                <div className="card">
                  <h3>Property Specific</h3>
                  <div className="transition-demo property">
                    <div className="transition-element">Hover Me</div>
                  </div>
                  <code>transition: background-color 0.3s ease;</code>
                </div>
                
                <div className="card">
                  <h3>Multiple Properties</h3>
                  <div className="transition-demo multiple">
                    <div className="transition-element">Hover Me</div>
                  </div>
                  <code>transition: transform 0.3s ease, box-shadow 0.3s ease;</code>
                </div>
              </div>
              
              <div className="transition-timing">
                <h3>Transition Timing Functions</h3>
                <div className="grid grid-5">
                  <div className="timing-demo">
                    <div className="timing-element ease">Ease</div>
                    <code>ease</code>
                  </div>
                  <div className="timing-demo">
                    <div className="timing-element linear">Linear</div>
                    <code>linear</code>
                  </div>
                  <div className="timing-demo">
                    <div className="timing-element ease-in">Ease In</div>
                    <code>ease-in</code>
                  </div>
                  <div className="timing-demo">
                    <div className="timing-element ease-out">Ease Out</div>
                    <code>ease-out</code>
                  </div>
                  <div className="timing-demo">
                    <div className="timing-element ease-in-out">Ease In Out</div>
                    <code>ease-in-out</code>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Keyframes Section */}
        {activeSection === "keyframes" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Keyframe Animations</h2>
                <p className="section-subtitle">
                  Create complex animations with @keyframes
                </p>
              </div>
              
              <div className="animation-selector">
                <div className="animation-options">
                  {animations.map((animation) => (
                    <button
                      key={animation.id}
                      className={`animation-option ${selectedAnimation === animation.id ? 'active' : ''}`}
                      onClick={() => setSelectedAnimation(animation.id)}
                    >
                      <span className="animation-name">{animation.name}</span>
                      <span className="animation-description">{animation.description}</span>
                    </button>
                  ))}
                </div>
                
                <div className="animation-demo">
                  <div className={`demo-element ${selectedAnimation}`}>
                    {animations.find(a => a.id === selectedAnimation)?.name}
                  </div>
                  <code>animation: {selectedAnimation} 2s infinite;</code>
                </div>
              </div>
              
              <div className="keyframe-examples">
                <h3>Keyframe Examples</h3>
                <div className="grid grid-2">
                  <div className="card">
                    <h4>Fade In Animation</h4>
                    <div className="code-example">
                      <code>
                        @keyframes fadeIn &#123;
                        <br />
                        &nbsp;&nbsp;from &#123; opacity: 0; &#125;
                        <br />
                        &nbsp;&nbsp;to &#123; opacity: 1; &#125;
                        <br />
                        &#125;
                      </code>
                    </div>
                  </div>
                  
                  <div className="card">
                    <h4>Slide Up Animation</h4>
                    <div className="code-example">
                      <code>
                        @keyframes slideUp &#123;
                        <br />
                        &nbsp;&nbsp;from &#123; transform: translateY(100px); &#125;
                        <br />
                        &nbsp;&nbsp;to &#123; transform: translateY(0); &#125;
                        <br />
                        &#125;
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Transforms Section */}
        {activeSection === "transforms" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">CSS Transforms</h2>
                <p className="section-subtitle">
                  Transform elements with CSS transform properties
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>Translate</h3>
                  <div className="transform-demo translate">
                    <div className="transform-element">Move Me</div>
                  </div>
                  <code>transform: translateX(50px) translateY(-20px);</code>
                </div>
                
                <div className="card">
                  <h3>Scale</h3>
                  <div className="transform-demo scale">
                    <div className="transform-element">Scale Me</div>
                  </div>
                  <code>transform: scale(1.2);</code>
                </div>
                
                <div className="card">
                  <h3>Rotate</h3>
                  <div className="transform-demo rotate">
                    <div className="transform-element">Rotate Me</div>
                  </div>
                  <code>transform: rotate(45deg);</code>
                </div>
                
                <div className="card">
                  <h3>Skew</h3>
                  <div className="transform-demo skew">
                    <div className="transform-element">Skew Me</div>
                  </div>
                  <code>transform: skew(10deg, 5deg);</code>
                </div>
                
                <div className="card">
                  <h3>Multiple Transforms</h3>
                  <div className="transform-demo multiple">
                    <div className="transform-element">Transform Me</div>
                  </div>
                  <code>transform: translateX(20px) rotate(15deg) scale(1.1);</code>
                </div>
                
                <div className="card">
                  <h3>3D Transform</h3>
                  <div className="transform-demo transform-3d">
                    <div className="transform-element">3D Me</div>
                  </div>
                  <code>transform: rotateX(45deg) rotateY(45deg);</code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Hover Effects Section */}
        {activeSection === "hover" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Hover Effects</h2>
                <p className="section-subtitle">
                  Interactive hover animations for better UX
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>Lift Effect</h3>
                  <div className="hover-demo lift">
                    <div className="hover-element">Hover Me</div>
                  </div>
                  <code>transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.2);</code>
                </div>
                
                <div className="card">
                  <h3>Glow Effect</h3>
                  <div className="hover-demo glow">
                    <div className="hover-element">Hover Me</div>
                  </div>
                  <code>box-shadow: 0 0 20px rgba(0,122,255,0.5);</code>
                </div>
                
                <div className="card">
                  <h3>Scale Effect</h3>
                  <div className="hover-demo scale">
                    <div className="hover-element">Hover Me</div>
                  </div>
                  <code>transform: scale(1.05);</code>
                </div>
                
                <div className="card">
                  <h3>Border Effect</h3>
                  <div className="hover-demo border">
                    <div className="hover-element">Hover Me</div>
                  </div>
                  <code>border: 2px solid var(--apple-blue);</code>
                </div>
                
                <div className="card">
                  <h3>Color Change</h3>
                  <div className="hover-demo color">
                    <div className="hover-element">Hover Me</div>
                  </div>
                  <code>background: var(--apple-blue); color: white;</code>
                </div>
                
                <div className="card">
                  <h3>Combined Effects</h3>
                  <div className="hover-demo combined">
                    <div className="hover-element">Hover Me</div>
                  </div>
                  <code>Multiple hover effects combined</code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Loading Section */}
        {activeSection === "loading" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Loading Animations</h2>
                <p className="section-subtitle">
                  Engaging loading states for better user experience
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card">
                  <h3>Spinner</h3>
                  <div className="loading-demo">
                    <div className="spinner"></div>
                  </div>
                  <code>@keyframes spin &#123; 100% &#123; transform: rotate(360deg); &#125; &#125;</code>
                </div>
                
                <div className="card">
                  <h3>Pulse</h3>
                  <div className="loading-demo">
                    <div className="pulse"></div>
                  </div>
                  <code>@keyframes pulse &#123; 50% &#123; opacity: 0.5; &#125; &#125;</code>
                </div>
                
                <div className="card">
                  <h3>Bounce</h3>
                  <div className="loading-demo">
                    <div className="bounce"></div>
                  </div>
                  <code>@keyframes bounce &#123; 50% &#123; transform: translateY(-20px); &#125; &#125;</code>
                </div>
                
                <div className="card">
                  <h3>Wave</h3>
                  <div className="loading-demo">
                    <div className="wave">
                      <div className="wave-dot"></div>
                      <div className="wave-dot"></div>
                      <div className="wave-dot"></div>
                    </div>
                  </div>
                  <code>Staggered animation delays</code>
                </div>
                
                <div className="card">
                  <h3>Skeleton</h3>
                  <div className="loading-demo">
                    <div className="skeleton">
                      <div className="skeleton-line"></div>
                      <div className="skeleton-line"></div>
                      <div className="skeleton-line"></div>
                    </div>
                  </div>
                  <code>Gradient animation</code>
                </div>
                
                <div className="card">
                  <h3>Progress Bar</h3>
                  <div className="loading-demo">
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                  </div>
                  <code>Width animation from 0% to 100%</code>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Scroll Section */}
        {activeSection === "scroll" && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Scroll Animations</h2>
                <p className="section-subtitle">
                  Animate elements as they come into view
                </p>
              </div>
              
              <div className="scroll-demo">
                <div className="scroll-item fade-in-on-scroll">
                  <h3>Fade In on Scroll</h3>
                  <p>This element fades in when it comes into view</p>
                </div>
                
                <div className="scroll-item slide-up-on-scroll">
                  <h3>Slide Up on Scroll</h3>
                  <p>This element slides up when it comes into view</p>
                </div>
                
                <div className="scroll-item scale-on-scroll">
                  <h3>Scale on Scroll</h3>
                  <p>This element scales when it comes into view</p>
                </div>
                
                <div className="scroll-item rotate-on-scroll">
                  <h3>Rotate on Scroll</h3>
                  <p>This element rotates when it comes into view</p>
                </div>
              </div>
              
              <div className="scroll-code">
                <h3>Intersection Observer Implementation</h3>
                <div className="code-block">
                  <code>
                    const observer = new IntersectionObserver((entries) =&gt; &#123;
                    <br />
                    &nbsp;&nbsp;entries.forEach(entry =&gt; &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;if (entry.isIntersecting) &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entry.target.classList.add('animate');
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&#125;
                    <br />
                    &nbsp;&nbsp;&#125;);
                    <br />
                    &#125;);
                  </code>
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
                <h2 className="section-title">Advanced Animations</h2>
                <p className="section-subtitle">
                  Complex animation techniques and combinations
                </p>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Morphing Shapes</h3>
                  <div className="advanced-demo">
                    <div className="morphing-shape"></div>
                  </div>
                  <code>clip-path animation with keyframes</code>
                </div>
                
                <div className="card">
                  <h3>Parallax Effect</h3>
                  <div className="advanced-demo">
                    <div className="parallax-container">
                      <div className="parallax-layer back">Back</div>
                      <div className="parallax-layer middle">Middle</div>
                      <div className="parallax-layer front">Front</div>
                    </div>
                  </div>
                  <code>transform: translateZ() with perspective</code>
                </div>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Staggered Animations</h3>
                  <div className="advanced-demo">
                    <div className="staggered-container">
                      <div className="staggered-item">1</div>
                      <div className="staggered-item">2</div>
                      <div className="staggered-item">3</div>
                      <div className="staggered-item">4</div>
                    </div>
                  </div>
                  <code>animation-delay: calc(var(--i) * 0.1s);</code>
                </div>
                
                <div className="card">
                  <h3>Text Animations</h3>
                  <div className="advanced-demo">
                    <div className="text-animation">
                      <span className="text-char">A</span>
                      <span className="text-char">n</span>
                      <span className="text-char">i</span>
                      <span className="text-char">m</span>
                      <span className="text-char">a</span>
                      <span className="text-char">t</span>
                      <span className="text-char">e</span>
                      <span className="text-char">d</span>
                    </div>
                  </div>
                  <code>Individual character animations</code>
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
                  Real-world animation implementations
                </p>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Animated Button</h3>
                  <div className="example-demo">
                    <button className="animated-button">
                                           <span className="button-text">Click Me</span>
                     <span className="button-icon">&#8594;</span>
                    </button>
                  </div>
                  <code>Hover effects with icon animation</code>
                </div>
                
                <div className="card">
                  <h3>Card Flip</h3>
                  <div className="example-demo">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">Front</div>
                        <div className="flip-card-back">Back</div>
                      </div>
                    </div>
                  </div>
                  <code>3D flip animation on hover</code>
                </div>
              </div>
              
              <div className="grid grid-2">
                <div className="card">
                  <h3>Modal Animation</h3>
                  <div className="example-demo">
                    <div className="modal-demo">
                      <div className="modal-content">
                        <h4>Modal Title</h4>
                        <p>This modal animates in and out</p>
                        <button className="modal-close">×</button>
                      </div>
                    </div>
                  </div>
                  <code>Scale and fade animations</code>
                </div>
                
                <div className="card">
                  <h3>Menu Toggle</h3>
                  <div className="example-demo">
                    <div className="menu-toggle">
                      <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <code>Hamburger to X animation</code>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
