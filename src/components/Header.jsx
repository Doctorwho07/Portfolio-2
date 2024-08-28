import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import "../styles/header.css";
import LottieArrow from "./LottieArrow";
import arrowWhiteAnimation from "./arrow-white.json";
import arrowPrimaryAnimation from "./arrow-primary.json";

const Header = ({ view, setView }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const savedView = Cookies.get("siteView");
    if (savedView) {
      setView(savedView);
    }
  }, [setView]);

  const handleViewChange = (newView) => {
    setView(newView);
    Cookies.set("siteView", newView); // Mise à jour du cookie
    setIsMenuOpen(false); // Ferme le menu après le clic
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="/logo/logo.png" alt="logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav mr-auto">
              {view === "blog" ? (
                <>
                  <li className="nav-item">
                    <Link
                      to="/about"
                      className={`nav-link button-link ${
                        currentPath === "/about" ? "active-link" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      À propos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/entreprise"
                      className={`nav-link button-link ${
                        currentPath === "/entreprise" ? "active-link" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Entreprise
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/articles"
                      className={`nav-link button-link ${
                        currentPath === "/articles" ? "active-link" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Articles
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/contact"
                      className={`nav-link button-link ${
                        currentPath === "/contact" ? "active-link" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/bilan"
                      className={`nav-link button-link ${
                        currentPath === "/bilan" ? "active-link" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Bilan
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to="/profil"
                      className={`nav-link button-link ${
                        currentPath === "/profil" ? "active-link" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Mon Profil
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/lettres-recommandation"
                      className={`nav-link button-link ${
                        currentPath === "/lettres-recommandation"
                          ? "active-link"
                          : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Recommandations
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/competences"
                      className={`nav-link button-link ${
                        currentPath === "/competences" ? "active-link" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Compétences
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/contact"
                      className={`nav-link button-link ${
                        currentPath === "/contact" ? "active-link" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <Link
              to={view === "blog" ? "/portfolio" : "/blog"}
              className="btn my-2 my-sm-0 line"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ display: "flex", alignItems: "center" }}
              onClick={() =>
                handleViewChange(view === "blog" ? "portfolio" : "blog")
              }
            >
              <LottieArrow
                animationData={
                  isHovered ? arrowPrimaryAnimation : arrowWhiteAnimation
                }
              />
              {view === "blog" ? "Portfolio" : "Blog"}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
