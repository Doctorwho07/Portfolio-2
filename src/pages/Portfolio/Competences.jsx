import React from "react";
import "../../styles/competences.css";
import softSkills from "../../data/SoftSkills.js";

const Competences = () => (
  <div className="container mt-5" id="competences">
    <h1 className="mb-4">Compétences</h1>
    <div className="row mb-4">
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
              {softSkills.map((entry, index) => (
                <li key={index} className="list-group-item">
                  <strong>
                    {entry.author} - {entry.entreprise}
                  </strong>
                  <ul className="list-group">
                    {entry.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="list-group-item">
                        <strong>{skill.skill}</strong> - {skill.description}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Competences;
