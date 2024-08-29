import React from "react";

const Experiences = () => (
  <div className="container mt-5" id="experiences">
    <h1 className="mb-4">Expériences</h1>
    <div className="row mb-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title mb-0">Projets & Réalisations</h2>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Projet infrastructure réseau Cloud et VPN:</strong>{" "}
                Création d’un tunnel VPN pour sécuriser les échanges entre
                l’infrastructure locale et le cloud. (OpenVPN, OpenMediaVault,
                NextCloud)
              </li>
              <li className="list-group-item">
                <strong>Reverse engineering réseau Yi Action Camera:</strong>{" "}
                Utilisation d’une librairie Python pour contrôler une caméra
                portable depuis une interface web. (Wireshark, Python, JS,
                BurpSuite, OBS, Ghidra)
              </li>
              <li className="list-group-item">
                <strong>Implémentation Active Directory:</strong> Mise en place
                des services, attribution de rôles et restrictions, application
                des mesures recommandées par l’ANSSI.
              </li>
              <li className="list-group-item">
                <strong>Création d’un site web de réservation d’hôtel:</strong>{" "}
                Mise en place d’un site Web en appliquant le OWASP Top 10 et
                configuration d’un firewall. (Docker, PHP, SQL, Twig)
              </li>
              <li className="list-group-item">
                <strong>Projet Red Team & Blue Team:</strong> Scan réseau,
                exploitation de vulnérabilités avec Metasploit, déploiement de
                DVWA, injection SQL/XSS et contre-mesures.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Experiences;
