import React from "react";
import projets from "../../data/Projets.js";
import { Link } from "react-router-dom";

const Projets = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="container mt-5" id="articles">
      <h1 className="mb-4">Mes Articles</h1>
      <p className="lead">
        Découvrez mes projets et réalisations récents par thématique.
      </p>
      <div className="row">
        {projets.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ height: "100%" }}>
              <div
                style={{
                  height: isMobile ? "200px" : "250px",
                  overflow: "hidden",
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.theme}
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
                  {project.theme}
                </h5>
                {project.description && (
                  <p className="card-text text-muted">{project.description}</p>
                )}
                <Link to={`/projets/${project.id}`} className="btn mt-3">
                  Découvrir
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
