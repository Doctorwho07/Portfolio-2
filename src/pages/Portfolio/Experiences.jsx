import React from "react";
import experiences from "../../Experiences.js";
import { Link } from "react-router-dom";

const Experiences = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="container mt-5" id="experiences">
      <h1 className="mb-4">Mes Expériences</h1>
      <p className="lead">
        Découvrez mes expériences professionnelles récentes par thématique.
      </p>
      <div className="row">
        {experiences.map((experience, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm" style={{ height: "100%" }}>
                <div
                  style={{
                    height: isMobile ? "200px" : "250px",
                    overflow: "hidden",
                  }}
                >
                  {experience.image ? (
                    <img
                      src={experience.image}
                      className="card-img-top"
                      alt={experience.entreprise}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(90%)",
                        transition: "filter 0.3s ease",
                      }}
                    />
                  ) : (
                    <div
                      className="card-img-top"
                      style={{
                        height: "100%",
                        backgroundColor: "#e9ecef",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span className="text-muted">Image non disponible</span>
                    </div>
                  )}
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {experience.entreprise}
                  </h5>
                  {experience.description && (
                    <p className="card-text text-muted">
                      {experience.description}
                    </p>
                  )}
                  <Link
                    to={`/experiences/${experience.id}`}
                    className="btn mt-3"
                  >
                    Découvrir
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
