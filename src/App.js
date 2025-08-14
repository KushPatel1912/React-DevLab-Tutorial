/** @format */

import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/AppleDesign.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";

import Grid from "./components/Grid";
import Flex from "./components/Flex";
import Animations from "./components/Animations";
import Gradients from "./components/Gradients";
import Shadows from "./components/Shadows";
import Typography from "./components/Typography";
import Responsive from "./components/Responsive";
import ReactHooks from "./components/ReactHooks";

function App() {
  const [currentPage, setCurrentPage] =
    useState("dashboard");
  const [isTransitioning, setIsTransitioning] =
    useState(false);
  const [pageHistory, setPageHistory] = useState([
    "dashboard",
  ]);

  const navigateToPage = (pageId) => {
    if (pageId === currentPage) return;

    setIsTransitioning(true);
    setPageHistory((prev) => [...prev, pageId]);

    setTimeout(() => {
      setCurrentPage(pageId);
      setIsTransitioning(false);
    }, 150);
  };

  const goBack = () => {
    if (pageHistory.length > 1) {
      setIsTransitioning(true);
      const newHistory = pageHistory.slice(0, -1);
      const previousPage =
        newHistory[newHistory.length - 1];

      setTimeout(() => {
        setCurrentPage(previousPage);
        setPageHistory(newHistory);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const canGoBack = pageHistory.length > 1;

  const renderCurrentPage = () => {
    const commonProps = {
      onNavigate: navigateToPage,
      canGoBack,
      goBack,
    };

    switch (currentPage) {
      case "dashboard":
        return <Dashboard {...commonProps} />;

      case "grid":
        return (
          <div
            className={`page-container ${
              isTransitioning ? "transitioning" : ""
            }`}
          >
            <NavigationHeader
              title="CSS Grid Examples"
              onBack={goBack}
              canGoBack={canGoBack}
            />
            <Grid />
          </div>
        );

      case "flex":
        return (
          <div
            className={`page-container ${
              isTransitioning ? "transitioning" : ""
            }`}
          >
            <NavigationHeader
              title="CSS Flexbox Examples"
              onBack={goBack}
              canGoBack={canGoBack}
            />
            <Flex />
          </div>
        );

      case "animations":
        return (
          <div
            className={`page-container ${
              isTransitioning ? "transitioning" : ""
            }`}
          >
            <NavigationHeader
              title="CSS Animations"
              onBack={goBack}
              canGoBack={canGoBack}
            />
            <Animations />
          </div>
        );

      case "gradients":
        return (
          <div
            className={`page-container ${
              isTransitioning ? "transitioning" : ""
            }`}
          >
            <NavigationHeader
              title="CSS Gradients"
              onBack={goBack}
              canGoBack={canGoBack}
            />
            <Gradients />
          </div>
        );

      case "shadows":
        return (
          <div
            className={`page-container ${
              isTransitioning ? "transitioning" : ""
            }`}
          >
            <NavigationHeader
              title="CSS Shadows"
              onBack={goBack}
              canGoBack={canGoBack}
            />
            <Shadows />
          </div>
        );

      case "typography":
        return (
          <div
            className={`page-container ${
              isTransitioning ? "transitioning" : ""
            }`}
          >
            <NavigationHeader
              title="Typography Examples"
              onBack={goBack}
              canGoBack={canGoBack}
            />
            <Typography />
          </div>
        );

      case "responsive":
        return (
          <div
            className={`page-container ${
              isTransitioning ? "transitioning" : ""
            }`}
          >
            <NavigationHeader
              title="Responsive Design"
              onBack={goBack}
              canGoBack={canGoBack}
            />
            <Responsive />
          </div>
        );

      case "reacthooks":
        return (
          <div
            className={`page-container ${
              isTransitioning ? "transitioning" : ""
            }`}
          >
            <NavigationHeader
              title="React Hooks"
              onBack={goBack}
              canGoBack={canGoBack}
            />
            <ReactHooks />
          </div>
        );

      default:
        return <Dashboard {...commonProps} />;
    }
  };

  return (
    <div
      className={`App ${
        isTransitioning ? "transitioning" : ""
      }`}
    >
      {renderCurrentPage()}
    </div>
  );
}

// Enhanced Navigation Header Component
function NavigationHeader({
  title,
  onBack,
  canGoBack,
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`navigation-header ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="nav-content">
        <button
          className={`back-button ${
            canGoBack ? "active" : "disabled"
          }`}
          onClick={onBack}
          disabled={!canGoBack}
        >
          <span className="back-icon">←</span>
          <span className="back-text">Back</span>
        </button>

        <h1 className="page-title">{title}</h1>

        <div className="nav-actions">
          <button
            className="home-button"
            onClick={() => window.location.reload()}
            title="Go to Dashboard"
          >
            🏠
          </button>
        </div>
      </div>
    </header>
  );
}

export default App;
