import React, { useState } from "react";
import experiences from "../../data/Experiences.js";
import { Link } from "react-router-dom";

const Experiences = () => {
  const [sortBy, setSortBy] = useState(""); // Critère de tri
  const [sortOrder, setSortOrder] = useState("desc"); // Ordre de tri
  const [viewMode, setViewMode] = useState("grid"); // Mode d'affichage
  const [selectedTheme, setSelectedTheme] = useState(""); // Filtre par thème
  const [selectedDuration, setSelectedDuration] = useState(""); // Filtre par durée
  const [searchTerm, setSearchTerm] = useState(""); // Recherche par entreprise, poste, auteur
  const [showSuggestions, setShowSuggestions] = useState(false); // Afficher les suggestions
  const isMobile = window.innerWidth <= 768;

  // Fonction pour trier par date
  const sortByDate = (experiences, order) => {
    return experiences.sort((a, b) =>
      order === "asc"
        ? new Date(a.startDate) - new Date(b.startDate)
        : new Date(b.startDate) - new Date(a.startDate)
    );
  };

  // Fonction pour obtenir les suggestions de recherche
  const getSearchSuggestions = () => {
    if (!searchTerm) return [];

    return experiences
      .filter(
        (exp) =>
          exp.entreprise.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exp.poste.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exp.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5); // Limiter aux 5 premiers résultats
  };

  // Déterminer la liste triée et filtrée en fonction des critères
  const filteredAndSortedExperiences = () => {
    let filtered = experiences;

    // Filtrage par thème
    if (selectedTheme) {
      filtered = filtered.filter((exp) => exp.theme === selectedTheme);
    }

    // Filtrage par durée
    if (selectedDuration) {
      filtered = filtered.filter(
        (exp) => exp.duration === parseInt(selectedDuration)
      );
    }

    // Recherche par entreprise, poste, auteur
    if (searchTerm) {
      filtered = filtered.filter(
        (exp) =>
          exp.entreprise.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exp.poste.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exp.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Tri
    switch (sortBy) {
      case "date":
        return sortByDate([...filtered], sortOrder);
      default:
        return filtered;
    }
  };

  // Fonction pour réinitialiser les filtres
  const resetFilters = () => {
    setSortBy("");
    setSortOrder("desc");
    setSelectedTheme("");
    setSelectedDuration("");
    setSearchTerm("");
    setShowSuggestions(false);
  };

  return (
    <div className="container mt-5" id="experiences">
      <h1 className="mb-4">Mes Expériences</h1>
      <p className="lead">
        Découvrez mes expériences professionnelles récentes par thématique.
      </p>

      {/* Contrôles pour les filtres */}
      <div className="mb-4">
        {/* Filtre par thème */}
        <select
          className="form-control mb-2"
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
        >
          <option value="">Sélectionner un Thème</option>
          {/* Ajouter les options dynamiquement si possible */}
          <option value="Thème1">Thème1</option>
          <option value="Thème2">Thème2</option>
        </select>

        {/* Filtre par durée */}
        <select
          className="form-control mb-2"
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
        >
          <option value="">Sélectionner une Durée</option>
          <option value="0">0 mois</option>
          <option value="6">6 mois</option>
          <option value="8">8 mois</option>
        </select>

        {/* Recherche */}
        <div className="position-relative mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher par entreprise, poste ou auteur"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true); // Afficher les suggestions lors de la saisie
            }}
            onFocus={() => setShowSuggestions(true)} // Afficher les suggestions lorsque le champ est focalisé
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Masquer les suggestions après un court délai
          />
          {showSuggestions && searchTerm && (
            <ul
              className="list-group position-absolute w-100"
              style={{ zIndex: 1000 }}
            >
              {getSearchSuggestions().map((exp) => (
                <li key={exp.id} className="list-group-item">
                  <Link
                    to={`/experiences/${exp.id}`}
                    onClick={() => setShowSuggestions(false)}
                  >
                    {exp.entreprise} - {exp.poste} ({exp.author})
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Contrôles pour sélectionner le critère de tri */}
        <div className="mb-4">
          <button
            className={`btn btn-secondary ${sortBy === "date" ? "active" : ""}`}
            onClick={() => {
              setSortBy("date");
              setSortOrder(sortOrder === "desc" ? "asc" : "desc");
            }}
          >
            Trier par Date ({sortOrder === "desc" ? "Décroissant" : "Croissant"}
            )
          </button>
          <button className="btn btn-secondary ml-2" onClick={resetFilters}>
            Réinitialiser les Filtres
          </button>
          {/* Boutons pour changer le mode d'affichage */}
          <button
            className={`btn btn-secondary ml-2 ${
              viewMode === "grid" ? "active" : ""
            }`}
            onClick={() => setViewMode("grid")}
          >
            Grille
          </button>
          <button
            className={`btn btn-secondary ml-2 ${
              viewMode === "list" ? "active" : ""
            }`}
            onClick={() => setViewMode("list")}
          >
            Liste
          </button>
        </div>
      </div>

      {/* Contenu avec affichage conditionnel */}
      <div className={`row ${viewMode === "list" ? "d-flex flex-column" : ""}`}>
        {filteredAndSortedExperiences().map((experience, index) => (
          <div
            key={index}
            className={`col-md-4 mb-4 ${
              viewMode === "list" ? "d-flex flex-row" : ""
            }`}
            style={
              viewMode === "list" ? { borderBottom: "1px solid #ddd" } : {}
            }
          >
            <div
              className={`card shadow-sm ${viewMode === "list" ? "w-100" : ""}`}
              style={{ height: viewMode === "list" ? "auto" : "100%" }}
            >
              <div
                style={{
                  height:
                    viewMode === "list"
                      ? "150px"
                      : isMobile
                      ? "200px"
                      : "250px",
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
                <Link to={`/experiences/${experience.id}`} className="btn mt-3">
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

export default Experiences;
