import React from "react";
import "../../styles/competences.css";

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
                <strong>Operating Systems:</strong> Linux Kali, Ubuntu, Windows
                10/11, Windows Server, MacOS
              </li>
              <li className="list-group-item">
                <strong>Network & Security:</strong> Nmap, Burp Suite,
                Wireshark, Cisco, OpenVPN, pfSense, Firewall configuration,
                Network troubleshooting
              </li>
              <li className="list-group-item">
                <strong>Programming Languages:</strong> Python, Java, C#,
                JavaScript, PHP, SQL, HTML, CSS, Flutter, Vue.js, Node.js, Shell
                scripting
              </li>
              <li className="list-group-item">
                <strong>Development Tools:</strong> Anaconda, Docker, Git,
                GitHub, Parallels, Cisco Packet Tracer, Visual Studio Code
              </li>
              <li className="list-group-item">
                <strong>System Administration:</strong> Windows Server setup,
                Active Directory management, Virtualization (VMware, VirtualBox,
                Hyper-V), switch management
              </li>
              <li className="list-group-item">
                <strong>Database Management:</strong> MySQL, PostgreSQL, SQL
                Server, SSMS, Data backup and recovery
              </li>
              <li className="list-group-item">
                <strong>Cloud Technologies:</strong>Google Cloud Platform,
                Microsoft OneDrive
              </li>
              <li className="list-group-item">
                <strong>Hardware Maintenance:</strong> Server maintenance, Disk
                health monitoring (S.M.A.R.T), RAM upgrade, Hardware replacement
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-6 d-flex align-items-stretch" id="soft">
        <div className="card flex-fill custom-card">
          <div className="card-header">
            <h2 className="card-title mb-0">Soft Skills</h2>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                data-author="DI RIENZO Antoine"
                data-entreprise="CIMRA INFORMATIQUE SERVICES"
              >
                <strong>Esprit critique</strong> - Alexis a montré une capacité
                remarquable à comprendre rapidement les enjeux techniques.
              </li>
              <li
                className="list-group-item"
                data-author="Anthony Pereira"
                data-entreprise="McDonald's Chasse-sur-Rhône"
              >
                <strong>Attitude positive</strong> - Toujours souriant et prêt à
                aider, il a su s’intégrer rapidement au sein des équipes.
              </li>
              <li
                className="list-group-item"
                data-author="Anthony Pereira"
                data-entreprise="McDonald's Chasse-sur-Rhône"
              >
                <strong>Organisation & méthodologie</strong> - Alexis a su gérer
                ses tâches avec rigueur et efficacité, tout en jonglant avec ses
                études.
              </li>
              <li
                className="list-group-item"
                data-author="Anthony Pereira"
                data-entreprise="McDonald's Chasse-sur-Rhône"
              >
                <strong>Professionnalisme</strong> - Sa capacité à rester calme
                sous pression et à offrir un service attentionné a été largement
                reconnue.
              </li>
              <li
                className="list-group-item"
                data-author="DI RIENZO Antoine"
                data-entreprise="CIMRA INFORMATIQUE SERVICES"
              >
                <strong>Sens du collectif</strong> - Son excellent esprit
                d’équipe et son sens de l’initiative ont été très appréciés par
                ses collègues.
              </li>
              <li
                className="list-group-item"
                data-author="Xavier Guillermin"
                data-entreprise="BTX Cases"
              >
                <strong>Curiosité</strong> - Alexis est constamment motivé pour
                apprendre et améliorer ses compétences.
              </li>
              <li
                className="list-group-item"
                data-author="Anthony Pereira"
                data-entreprise="McDonald's Chasse-sur-Rhône"
              >
                <strong>Sens des responsabilités</strong> - Il a montré une
                grande capacité à prendre des initiatives et à assumer des
                responsabilités supplémentaires.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Competences;
