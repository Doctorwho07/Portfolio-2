import React from "react";

const Profil = () => (
  <div className="container mt-5" id="profil">
        <h1 className="mb-4">Profil</h1>
    <div className="row">
      <div className="col-md-4 d-flex">
        <div className="card mb-4 flex-fill">
          <div className="card-body">
            <div className="card-header mb-4">
              <h2>
                <strong>💻 Alexis Rouches 🔐</strong>
              </h2>
            </div>
            <p className="card-text">
              Étudiant en <span>3ème année</span> de Bachelor. Spécialité
              <span> infrastructure réseaux</span> & <span>cybersécurité</span> à
              Lyon Ynov Campus. Actuellement à la recherche d'une
              <span>alternance</span> en cybersécurité pour octobre 2024.
            </p>
            <p>
              <strong>Email :</strong>
              <a href="mailto:alexis.rouches@icloud.com">
                alexis.rouches@icloud.com
              </a>
            </p>
            <p>
              <strong>Téléphone :</strong>
              <a href="tel:0778221121">0778221121</a>
            </p>
            <p>
              <strong>Portefeuille numérique :</strong>
              <a
                href="https://alexis-r.link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alexis-R
              </a>
            </p>
            <p>
              <strong>Lieu :</strong> Lyon, Auvergne-Rhône-Alpes, France
            </p>
            <p>
              <strong>Permis :</strong> Permis B
            </p>
            <p>
              <strong>Langue :</strong> Anglais B2
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-8 d-flex align-items-stretch">
        <div className="card mb-4 flex-fill">
          <div className="card-header">
            <h2 className="card-title mb-0">À propos de moi</h2>
          </div>
          <div className="card-body">
            <p className="card-text">
              Actuellement en formation à Lyon Ynov Campus, j'aspire à
              approfondir mes compétences en cybersécurité pour contribuer à la
              protection des systèmes d'information. Mes expériences académiques
              et professionnelles m'ont permis de développer une solide
              expertise technique et un esprit critique, essentiel pour réussir
              dans ce domaine.
            </p>
            <p className="card-text">
              En parallèle, je m'engage activement dans des plateformes de
              cybersécurité telles que Root-Me, où je continue d'affiner mes
              compétences en Red-Teaming et Blue-Teaming. Je participe également
              à des événements comme les Hackathons, où j'ai pu collaborer avec
              des équipes pour résoudre des défis en sécurité informatique.
            </p>
            <p className="card-text">
              Mon intérêt pour l'informatique ne se limite pas à la
              cybersécurité, je m'intéresse aussi au développement logiciel,
              particulièrement en Python et en JavaScript, ainsi qu'à
              l'administration système sous Linux, où j'ai pu configurer et
              sécuriser divers environnements serveurs.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="row mb-4">
      <div className="col-md-12">
        <div className="card mb-4">
          <div className="card-header">
            <h2 className="card-title mb-0">Formation</h2>
          </div>
          <div className="card-body">
            <p className="card-text">
              <strong>Master 2</strong> - Lyon Ynov Campus, Lyon - 2025 - 2027
            </p>
            <p className="card-text">
              Spécialités : Infrastructure & SI / Cybersécurité
            </p>
            <hr />
            <p className="card-text">
              <strong>Bachelor Informatique 1 & 2</strong> - Lyon Ynov Campus,
              Lyon - 2022 - Présent
            </p>
            <p className="card-text">
              <strong>Programme Bachelor :</strong>
            </p>
            <p className="card-text">
              <strong>1ère année :</strong>
            </p>
            <ul>
              <li>
                Développement : Programmation Java, Programmation Orientée Objet
                (C++ / Java…)
              </li>
              <li>
                Infrastructure & SI : Administration Poste Client,
                Fonctionnement des réseaux, Linux
              </li>
            </ul>
            <p className="card-text">
              <strong>2ème année :</strong>
            </p>
            <ul>
              <li>Développement : C#, PHP, Gameprogramming avec Unity</li>
              <li>
                Conception produit : Architecture IoT, Programmation
                micro-contrôleur, Accessibilité et qualité web
              </li>
              <li>Data : SQL, Python, Analyse et manipulation de données</li>
              <li>
                Infrastructure & SI : Linux, Services réseaux, Windows Server,
                Réseaux, Introduction à la cybersécurité
              </li>
              <li>
                Mises en situation professionnelle : Ydays, Ylabs, Challenge 48h
              </li>
            </ul>
            <hr />
            <p className="card-text">
              <strong>Baccalauréat Scientifique</strong> - Aux Lazaristes, Lyon
              - 2022
            </p>
            <p className="card-text">
              Spécialités : Mathématiques, Physique-Chimie, Sciences de
              l’ingénieur, Maths expertes
            </p>
            <hr />
            <p className="card-text">
              <strong>
                BAFA (Brevet d'Aptitude aux Fonctions d'Animateur)
              </strong>
              - STAJ Rhône-Alpes, Montélimar - 2021 - 2022
            </p>
            <p className="card-text">
              Formation : Handicap et différences / Petite enfance
            </p>
            <hr />
            <p className="card-text">
              <strong>Brevet d'Initiation à l'Aéronautique (BIA)</strong> - Aux
              Lazaristes, Lyon - 2020
            </p>
            <hr />

            <p className="card-text">
              <strong>Certifications :</strong>
            </p>
            <ul>
              <li>
                <strong>Certification ArcServe</strong> - en cours
              </li>
              <li>
                <strong>Bac +1 & +2</strong> - obtenu
              </li>
              <li>
                <strong>Bac</strong> - obtenu
              </li>
              <li>
                <strong>BAFA</strong> - obtenu
              </li>
              <li>
                <strong>BIA</strong> - obtenu
              </li>
            </ul>
            <hr />
            <p className="card-text">
              <strong>Formations supplémentaires :</strong>
            </p>
            <ul>
              <li>
                <strong>ArcServe ShadowProtect</strong> - Cybersecurity
                Recovery, 2022
              </li>
              <li>
                <strong>Ateliers de Pen-Test</strong> - Participation à des
                ateliers de penetration testing, 2024
              </li>
              <li>
                <strong>Projets personnels</strong> - Coding new Languages, 2022
                - en cours
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-stretch">
        <div className="card mb-4 flex-fill">
          <div className="card-header">
            <h2 className="card-title mb-0">Mes Passions</h2>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Nouvelles technologies:</strong> Hardware, IA
              </li>
              <li className="list-group-item">
                <strong>Sports:</strong> Tennis, Badminton, VTT
              </li>
              <li className="list-group-item">
                <strong>Voyages:</strong> Culture, Paysages
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-6 d-flex align-items-stretch">
        <div className="card mb-4 flex-fill">
          <div className="card-header">
            <h2 className="card-title mb-0">Mes Engagements</h2>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Embassadeur Ynov:</strong> Lyon Ynov Campus (2022 -
                2023)
              </li>
              <li className="list-group-item">
                <strong>Aide informatique:</strong> Reventin-Vaugris (2022 -
                2024)
              </li>
              <li className="list-group-item">
                <strong>Scout et Guides de France:</strong> Lyon (2021)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Profil;
