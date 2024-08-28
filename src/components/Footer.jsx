import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => (
  <footer className="footer pt-4">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h5>Navigation</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="text-dark">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-dark">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/entreprise" className="text-dark">
                Entreprise
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3">
          <h5>Articles et Ressources</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/articles" className="text-dark">
                Articles
              </Link>
            </li>
            <li>
              <Link to="/bilan" className="text-dark">
                Bilan
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3">
          <h5>Informations Légales</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/mentions-legales" className="text-dark">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/remerciements" className="text-dark">
                Remerciements
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3">
          <h5>Contact</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/contact" className="text-dark">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>&copy; 2024 Alexis ROUCHES. Tous droits réservés</p>
      </div>
    </div>
  </footer>
);

export default Footer;
