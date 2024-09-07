const projets = [
  {
    id: 0,
    theme: "Infrastructure Réseau",
    image: "/customer/VW/VW-Baie.jpg",
    posts: [
      {
        nom: "Mise en place du serveur pour ArcServe",
        annee: "2024",
        brief:
          "Installation et configuration d'un serveur pour gérer les sauvegardes avec ArcServe.",
        description:
          "Configuration d'un serveur Windows Server 2022 pour ArcServe SPX, y compris l'installation de logiciels nécessaires pour gérer les sauvegardes Image Manager et restaurations Secure Recovery Environment.",
        url: "",
        screenShot: "/work/arcserve-installation.png",
      },
      {
        nom: "Switch",
        annee: "2024",
        brief: "Configuration / Optimisation / Gestion ",
        description:
          "Configuration des VLANs (Virtual Local Area Networks) : Segmenter le réseau en plusieurs VLANs pour isoler les différents départements ou services. Optimisation du Spanning Tree Protocol (STP) : Assurer la redondance et éviter les boucles dans le réseau. Configuration de l'agrégation de liens (Link Aggregation) : Combiner plusieurs interfaces réseau pour augmenter la bande passante et fournir une redondance. Gestion des ports : Activer/désactiver des ports, configurer la sécurité des ports pour limiter les connexions non autorisées. Supervision et diagnostic : Utiliser SNMP pour surveiller les performances des Switches et diagnostiquer les éventuels problèmes.",
        url: "",
        screenShot: "/work/switch-24ports+4.jpg",
      },
      {
        nom: "Firewall",
        annee: "2024",
        brief: "Configuration / Surveillance / Mise à jour ",
        description:
          "Configuration des règles de filtrage : Définir des règles pour autoriser ou bloquer le trafic en fonction des adresses IP, des ports ou des protocoles. Mise en place du NAT (Network Address Translation) : Configurer le NAT pour permettre l'accès à Internet depuis le réseau interne tout en masquant les adresses IP privées. Déploiement des VPN (Virtual Private Network) : Configurer des tunnels VPN pour permettre l'accès sécurisé des employés distants au réseau de l'entreprise. Surveillance des logs de sécurité : Analyser les journaux pour identifier et répondre aux tentatives d'intrusion ou aux anomalies de trafic. Mise à jour des signatures IPS/IDS : Assurer que le système de prévention et de détection d'intrusion est à jour pour protéger contre les menaces récentes.",
        url: "",
        screenShot: "/projets_screenshot/vav.jpg",
        info1: "",
      },
      {
        nom: "Switch",
        annee: "2024",
        brief: "Configuration / Gestion / Surveillance ",
        description:
          "Configuration du routage statique et dynamique : Mettre en place des routes pour diriger le trafic réseau vers les destinations appropriées, utiliser des protocoles de routage comme OSPF ou BGP. Mise en place du QoS (Quality of Service) : Configurer la QoS pour prioriser certains types de trafic, comme la voix sur IP (VoIP). Gestion des ACL (Access Control Lists) : Créer des ACL pour contrôler le trafic entrant et sortant du routeur en fonction de critères spécifiques. Surveillance des performances : Utiliser des outils comme NetFlow pour surveiller et analyser le trafic réseau sur le routeur. Configuration de la redondance et du basculement : Mettre en place des protocoles comme VRRP (Virtual Router Redundancy Protocol) pour assurer la continuité du service en cas de défaillance d'un routeur.",
        url: "",
        screenShot: "/projets_screenshot/vav.jpg",
        info1: "",
      },
    ],
  },
  {
    id: 1,
    theme: "Cybersécurité",
    image: "/work/openvpn-pfsense.png",
    posts: [
      {
        nom: "La Cryptographie : Un Pilier de la Sécurité Informatique",
        annee: "2024",
        brief:
          "Comprendre la Cryptographie : Un Pilier de la Sécurité Informatique.",
        introduction:
          "La cryptographie est au cœur de la sécurité informatique moderne, permettant de protéger les informations sensibles contre les accès non autorisés. Dans cet article, nous explorerons les concepts clés de la cryptographie, notamment le chiffrement symétrique et asymétrique, les algorithmes de hachage, la gestion des clés et l'infrastructure à clé publique (PKI), ainsi que les protocoles de sécurité tels que SSL/TLS et IPSec.",
        description:
          "Mise en place d'un VPN avec certificat sur pfSense pour sécuriser l'accès à distance aux données et aux ressources des serveurs.",
        partie1:
          "Chiffrement Symétrique et Asymétrique Chiffrement Symétrique Le chiffrement symétrique utilise une seule clé pour chiffrer et déchiffrer les données. Cette méthode est rapide et efficace pour le traitement de grandes quantités de données. L'un des algorithmes les plus connus dans ce domaine est l'AES (Advanced Encryption Standard), largement utilisé pour sécuriser les communications et les données. Avantages : Rapidité, faible complexité. Inconvénients : Distribution sécurisée des clés, vulnérabilité si la clé est compromise. Chiffrement Asymétrique Le chiffrement asymétrique, en revanche, utilise une paire de clés – une clé publique pour le chiffrement et une clé privée pour le déchiffrement. RSA (Rivest-Shamir-Adleman) est l'algorithme asymétrique le plus couramment utilisé. Cette méthode est cruciale pour les transactions sécurisées en ligne, comme dans les signatures numériques et les échanges de clés. Avantages : Distribution plus sûre des clés, supporte les signatures numériques. Inconvénients : Plus lent que le chiffrement symétrique, nécessite une gestion plus complexe des clés.",
        partie2:
          "Algorithmes de Hachage Les algorithmes de hachage sont des fonctions cryptographiques qui transforment une entrée en une chaîne de caractères de longueur fixe, appelée empreinte ou digest. Le hachage est principalement utilisé pour garantir l'intégrité des données et est fondamental dans les signatures numériques et l'authentification. SHA-256 (Secure Hash Algorithm) : L'un des algorithmes de hachage les plus sécurisés, utilisé dans divers protocoles de sécurité comme SSL/TLS. MD5 (Message Digest Algorithm 5) : Bien qu'il soit plus rapide, il est aujourd'hui considéré comme obsolète en raison de ses vulnérabilités. Les principales propriétés d'un bon algorithme de hachage sont la résistance aux collisions (deux entrées différentes ne doivent pas produire le même hash) et la résistance à la préimage (il doit être impossible de retrouver l'entrée d'origine à partir du hash). Gestion des Clés et Infrastructure à Clé Publique (PKI) La gestion des clés est un aspect critique de la cryptographie, impliquant la génération, la distribution, le stockage et la révocation des clés. L'infrastructure à clé publique (PKI) est un cadre qui permet de gérer ces clés de manière sécurisée. Elle repose sur les certificats numériques, émis par une autorité de certification (CA), pour lier les clés publiques à l'identité des utilisateurs. Certificats numériques : Garantissent l'authenticité d'une clé publique. Autorités de Certification (CA) : Entités de confiance qui délivrent des certificats numériques. Révocation des certificats : Processus de désactivation des certificats compromis. La PKI est essentielle pour les transactions sécurisées sur Internet, notamment pour les connexions HTTPS, les signatures électroniques, et la gestion des communications sécurisées dans les entreprises.",
        partie3:
          "Protocoles de Sécurité : SSL/TLS et IPSec SSL/TLS (Secure Sockets Layer / Transport Layer Security) SSL et son successeur TLS sont des protocoles qui assurent la sécurité des communications sur Internet. Ils utilisent une combinaison de chiffrement symétrique et asymétrique pour établir une connexion sécurisée entre un client et un serveur, garantissant ainsi la confidentialité et l'intégrité des données échangées. Fonctionnement : Échange de clés via chiffrement asymétrique, suivi d'un chiffrement symétrique pour la session. Applications : Sécurisation des sites web (HTTPS), des emails, des transactions en ligne. IPSec (Internet Protocol Security) IPSec est un protocole utilisé pour sécuriser les communications au niveau du réseau, souvent dans les VPN (Virtual Private Networks). Il permet de chiffrer et d'authentifier les paquets de données envoyés entre deux entités, protégeant ainsi les données sensibles contre les interceptions et les attaques. Fonctionnalités : Authentification de l'origine des paquets, chiffrement des données, protection contre les attaques de relecture. Applications : Sécurisation des communications entre réseaux, tunnels VPN.",
        conclusion:
          "La cryptographie joue un rôle essentiel dans la protection des données et la sécurisation des communications à l'ère numérique. Comprendre les concepts de chiffrement symétrique et asymétrique, les algorithmes de hachage, la gestion des clés et les protocoles de sécurité comme SSL/TLS et IPSec est crucial pour toute organisation souhaitant renforcer sa posture de sécurité. En appliquant ces technologies de manière efficace, il est possible de garantir la confidentialité, l'intégrité et l'authenticité des informations dans un monde de plus en plus connecté.",
        url: "",
        screenShot: "/work/openvpn-pfsense.png",
      },
      {
        nom: "Création d'un VPN avec certificat pour accès à distance",
        annee: "2024",
        brief:
          "Configuration d'un VPN pour permettre un accès sécurisé à distance aux ressources du serveur.",
        description:
          "Mise en place d'un VPN avec certificat sur pfSense pour sécuriser l'accès à distance aux données et aux ressources des serveurs.",
        url: "",
        screenShot: "/work/openvpn-pfsense.png",
      },
      {
        nom: "Cours de cybersécurité",
        annee: "2024",
        brief:
          "Formation en cybersécurité pour améliorer les compétences et connaissances.",
        description:
          "Formation dispensée par un expert en cybersécurité, couvrant les vulnérabilités, les menaces, et les techniques de protection.",
        url: "",
        screenShot: "/projets_screenshot/vav.jpg",
      },
    ],
  },

  {
    id: 2,
    theme: "Certifications",
    image: "/work/arcserve-spx.png",
    posts: [
      {
        nom: "Passage de la certification ArcServe",
        annee: "2024",
        brief:
          "Obtention de la certification ArcServe pour la gestion des sauvegardes.",
        description:
          "Préparation et passage de la certification ArcServe pour valider les compétences en gestion des sauvegardes, avec une concentration sur les sauvegardes incrémentielles auto-réparatrices.",
        url: "",
        screenShot: "/work/arcserve-spx.png",
      },
    ],
  },
  {
    id: 3,
    theme: "Développement Web",
    image: "/projets_screenshot/vav.jpg",
    posts: [
      {
        nom: "Volontaide",
        annee: "2023-2024",
        brief:
          "Application qui met en relation des volontaires ou bénévoles avec des particuliers et des associations.",
        description:
          "Volontaide est une application qui permet aux utilisateurs de trouver des opportunités de bénévolat ou d'aide dans leur communauté. Elle connecte les associations et les particuliers avec des volontaires motivés.",
        url: "",
        screenShot: "/projets_screenshot/vav.jpg",
        techno: "",
        competences: "",
      },
      {
        nom: "Troc-Mon-Toit",
        annee: "2023-2024",
        brief:
          "A platform for housing rentals offering a variety of accommodations.",
        description:
          "Troc-Mon-Toit est une plateforme qui permet de rechercher et de réserver des logements. Elle offre des filtres avancés pour trouver le logement idéal, de l'appartement à l'igloo.",
        url: "https://github.com/B2-Info-23-24/php-Doctorwho07",
        screenShot: "/projets_screenshot/trocmontoit.png",
      },
      {
        nom: "Ydays",
        annee: "2022 - 2023",
        brief: "Site vitrine",
        description:
          "Le site vitrine permet de présenter toutes les figurines réalisées depuis la création du projet et jusqu'à sa fin.",
        url: "https://github.com/Gougouli69/YDetailedFigures",
        screenShot: "/projets_screenshot/ydays.png",
      },
      {
        nom: "Groupie tracker",
        annee: "2023",
        brief: "Recueil et découverte d'artiste",
        description:
          "Le projet Groupie Tracker permet de découvrir de nouveaux artistes grâce à une base de données musicale.",
        url: "",
        screenShot: "/projets_screenshot/groupie-tracker.png",
      },
    ],
  },
  {
    id: 4,
    theme: "Jeux Vidéo",
    image: "/projets_screenshot/hangman-web.png",
    posts: [
      {
        nom: "Hangman Web",
        annee: "2023",
        brief: "Jeu du pendu web.",
        description:
          "Un jeu du pendu accessible depuis un navigateur web. Simple et amusant, il reprend le concept classique du pendu.",
        url: "https://github.com/Doctorwho07/Hangman-web",
        screenShot: "/projets_screenshot/hangman-web.png",
      },
      {
        nom: "Cookie Clicker",
        annee: "2023",
        brief: "Clicker",
        description:
          "Petit jeu de clicker où l'objectif est de cliquer sur des cookies pour accumuler des points.",
        url: "",
        screenShot: "/projets_screenshot/cookie.png",
      },
    ],
  },
  {
    id: 5,
    theme: "Maintenance Matériel",
    image: "/customer/PC-fixe-composants.jpg",
    posts: [
      {
        nom: "Test des disques durs serveurs S.M.A.R.T",
        annee: "2024",
        brief:
          "Évaluation de l'état des disques durs avant restauration de serveur.",
        description:
          "Utilisation des outils CrystalDisk et Dell Data Center pour vérifier la santé des disques durs avant une restauration importante.",
        url: "",
        screenShot: "/work/hd-tune/test.png",
      },
      {
        nom: "Remplacement de composants défectueux",
        annee: "2024",
        brief:
          "Remplacement de composants matériels défectueux dans un serveur.",
        description:
          "Diagnostic et remplacement des composants défectueux dans un serveur, suivi de tests pour assurer la stabilité du système.",
        url: "",
        screenShot: "/customer/PC-fixe-composants.jpg",
      },
    ],
  },
  {
    id: 6,
    theme: "Support Technique",
    image: "/work/Atelier.jpg",
    posts: [
      {
        nom: "Intervention client",
        annee: "2024",
        brief:
          "Intervention pour configurer un nouveau bureau et mettre en place des équipements réseau.",
        description:
          "Installation et configuration d'un ordinateur et d'un réseau Ethernet pour un client, ainsi que la gestion des ports Ethernet.",
        url: "",
        screenShot: "/customer/PC-asso lyon.jpg",
      },
      {
        nom: "Diagnostic de pannes à distance",
        annee: "2024",
        brief:
          "Diagnostic de divers problèmes à distance en utilisant des outils de gestion à distance.",
        description:
          "Utilisation des logiciels Atera et Helper.exe pour résoudre les problèmes de connexion, d'impression, et de gestion des comptes utilisateurs.",
        url: "",
        screenShot: "/work/helper.png",
      },
    ],
  },
];

export default projets;
