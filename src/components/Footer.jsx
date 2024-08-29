import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = ({ view }) => {
  return (
    <footer className="footer pt-4">
      <div className="container">
        <div className="row">
          {view === "blog" ? (
            <>
              <div className="col-md-4">
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

              <div className="col-md-4">
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
                  <li>
                    <Link to="/contact" className="text-dark">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="col-md-4">
                <h5>Présentation personnelle</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/profil" className="text-dark">
                      Mon profil
                    </Link>
                  </li>
                  <li>
                    <Link to="/competences" className="text-dark">
                      Compétences
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-dark">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <h5>Présentation réalisations</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/recommandations" className="text-dark">
                      Recommandations
                    </Link>
                  </li>
                  <li>
                    <Link to="/experiences" className="text-dark">
                      Expériences
                    </Link>
                  </li>
                  <li>
                    <Link to="/projets" className="text-dark">
                      Projets
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}

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
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Alexis ROUCHES. Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
