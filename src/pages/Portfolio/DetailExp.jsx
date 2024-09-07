import React from "react";
import { Link, useParams } from "react-router-dom";
import experiences from "../../data/Experiences.js";
import softSkills from "../../data/SoftSkills.js";

const Detail = () => {
  const { id } = useParams();
  const experience = experiences.find((exp) => exp.id === parseInt(id));
  const skills =
    softSkills.find((item) => item.entreprise === experience?.entreprise)
      ?.skills || [];

  if (!experience) {
    return <h2>Expérience non trouvée</h2>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">{experience.entreprise}</h1>

      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title mb-0">Détails de l'Expérience</h2>
            </div>
            <div className="card-body">
              {experience.author && (
                <p>
                  <strong>Responsable :</strong> {experience.author}
                </p>
              )}
              {experience.poste && (
                <p>
                  <strong>Poste :</strong> {experience.poste}
                </p>
              )}
              {experience.address && (
                <p>
                  <strong>Adresse :</strong> {experience.address}
                </p>
              )}
              {experience.tel && (
                <p>
                  <strong>Téléphone :</strong> {experience.tel}
                </p>
              )}
              {experience.mail && (
                <p>
                  <strong>Email :</strong>{" "}
                  <a href={`mailto:${experience.mail}`}>{experience.mail}</a>
                </p>
              )}
              {experience.startDate && (
                <p>
                  <strong>Date de début :</strong> {experience.startDate}
                </p>
              )}
              {experience.endDate && (
                <p>
                  <strong>Date de fin :</strong> {experience.endDate}
                </p>
              )}
              {experience.duration && (
                <p>
                  <strong>Durée :</strong> {experience.duration} semaines
                </p>
              )}
              {experience.letter && (
                <p>
                  <strong>Lettre de recommandation :</strong>{" "}
                  <a
                    href={experience.letter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir la lettre
                  </a>
                </p>
              )}

              {skills.length > 0 && (
                <div className="mt-4">
                  <h6>Compétences :</h6>
                  <ul className="list-unstyled">
                    {skills.map((skill, index) => (
                      <li key={index}>
                        <strong>{skill.skill} :</strong> {skill.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Link to="/experiences" className="btn btn-lg mt-4 mb-4">
        Retour aux expériences
      </Link>
    </div>
  );
};

export default Detail;
