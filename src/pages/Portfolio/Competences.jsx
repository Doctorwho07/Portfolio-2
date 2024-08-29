import React from "react";

const Competences = () => (
  <div className="container mt-5" id="competences">
    <h1 className="mb-4">Compétences</h1>
    <div className="row mb-5">
      <div className="col-md-6 d-flex align-items-stretch">
        <div className="card flex-fill custom-card">
          <div className="card-header">
            <h2 className="card-title mb-0">Hard Skills</h2>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>OS:</strong> Linux Kali, Windows Serveur, MacOS
              </li>
              <li className="list-group-item">
                <strong>Network:</strong> Nmap, Burp, Wireshark, Cisco, OpenVPN
              </li>
              <li className="list-group-item">
                <strong>Languages:</strong> Python, Java, C#, JS, PHP, SQL,
                HTML, CSS, Flutter, Vue, NodeJS
              </li>
              <li className="list-group-item">
                <strong>Tools:</strong> Anaconda, Docker, Parallels, Cisco
                Packet Tracer, Linux
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-6 d-flex align-items-stretch">
        <div className="card flex-fill custom-card">
          <div className="card-header">
            <h2 className="card-title mb-0">Soft Skills</h2>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Esprit critique</strong>
              </li>
              <li className="list-group-item">
                <strong>Attitude positive</strong>
              </li>
              <li className="list-group-item">
                <strong>Organisation & méthodologie</strong>
              </li>
              <li className="list-group-item">
                <strong>Professionnalisme</strong>
              </li>
              <li className="list-group-item">
                <strong>Sens du collectif</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="col-md-6 d-flex align-items-stretch">
        <div className="card flex-fill custom-card">
          <div className="card-header">
            <h2 className="card-title mb-0">Expériences Professionnelles</h2>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Hôte Principal:</strong> McDonald's – Chasse sur Rhône
                (2023 - 2024)
                <p>Responsable satisfaction et bien-être client</p>
              </li>
              <li className="list-group-item">
                <strong>Animateur BAFA:</strong> Montélimar – Lyon (2021 - 2022)
                <p>
                  Responsable de créer et animer des activités ludiques et
                  éducatives pour les enfants
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> */}

    {/* <div className="row mb-5">
      <div className="col-md-12 d-flex align-items-stretch">
        <div className="card flex-fill custom-card">
          <div className="card-header">
            <h2 className="card-title mb-0">Projets Réalisés</h2>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Volontaide (2023-2024)</li>
              <li className="list-group-item">Troc-Mon-Toit (2023-2024)</li>
              <li className="list-group-item">TechnoTalk (2023)</li>
              <li className="list-group-item">Swopy-fun (2023)</li>
              <li className="list-group-item">Hangman Web (2023)</li>
              <li className="list-group-item">Word-search-solver (2023)</li>
              <li className="list-group-item">Cookie Clicker (2023)</li>
              <li className="list-group-item">Ydays (2022 - 2023)</li>
              <li className="list-group-item">Quad (2022)</li>
              <li className="list-group-item">Sortable (2023)</li>
              <li className="list-group-item">Boxxle (2023)</li>
              <li className="list-group-item">Hangman Classique (2023)</li>
              <li className="list-group-item">Groupie tracker (2023)</li>
            </ul>
          </div>
        </div>
      </div>
    </div> */}
  </div>
);

export default Competences;
