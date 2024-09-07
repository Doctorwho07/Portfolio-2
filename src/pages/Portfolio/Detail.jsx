import React from "react";
import { Link, useParams } from "react-router-dom";
import projets from "../../data/Projets";

const Detail = () => {
  const { id } = useParams();
  const project = projets[id];

  if (!project) {
    return <h2>Projets non trouvés</h2>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">{project.theme}</h1>

      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title mb-0">Détails des Projets</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {project.posts.map((post, index) => (
                  <li key={index} className="list-group-item">
                    {post.nom && <h4>{post.nom}</h4>}
                    {post.annee && (
                      <p>
                        <strong>Année :</strong> {post.annee}
                      </p>
                    )}
                    {post.brief && (
                      <p>
                        <strong>Résumé :</strong> {post.brief}
                      </p>
                    )}
                    {post.description && (
                      <p>
                        <strong>Description :</strong> {post.description}
                      </p>
                    )}
                    {post.url && (
                      <p>
                        <strong>Url :</strong>{" "}
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {post.url}
                        </a>
                      </p>
                    )}
                    {post.techno && (
                      <p>
                        <strong>Technologies :</strong> {post.techno}
                      </p>
                    )}
                    {post.competences && (
                      <p>
                        <strong>Compétences :</strong> {post.competences}
                      </p>
                    )}
                    {post.screenShot && (
                      <img
                        src={post.screenShot}
                        alt="image"
                        style={{
                          width: "30vw",
                          height: "auto",
                          maxWidth: "100%",
                        }}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Link to="/projets" className="btn btn-lg mt-4 mb-4">
        Retour aux projets
      </Link>
    </div>
  );
};

export default Detail;
