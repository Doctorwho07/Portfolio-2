const projets = [
  {
    id: 0,
    theme: "Développement Web",
    image: "/projets_screenshot/volontaide.jpg",
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
    ],
  },
  {
    id: 1,
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
    id: 2,
    theme: "Applications Diverses",
    image: "/projets_screenshot/ydays.png",
    posts: [
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
    id: 3,
    theme: "Infrastructure Réseau",
    image: "/customer/VW/VW-Baie.jpg",
    posts: [
      {
        nom: "Installation de PC sur KVM",
        annee: "2024",
        brief:
          "Configuration de PC avec un dispositif KVM pour utiliser plusieurs ordinateurs avec un seul ensemble de périphériques.",
        description:
          "Installation et configuration de trois PC en utilisant un dispositif KVM, avec une configuration optimisée pour une productivité accrue.",
        url: "",
        screenShot: "/work/kvm.png",
      },
      {
        nom: "Mise en place du serveur pour ArcServe",
        annee: "2024",
        brief:
          "Installation et configuration d'un serveur pour gérer les sauvegardes avec ArcServe.",
        description:
          "Configuration d'un serveur pour ArcServe SPX, y compris l'installation de logiciels nécessaires pour gérer les sauvegardes et restaurations.",
        url: "",
        screenShot: "/work/arcserve-installation.png",
      },
      {
        nom: "Remplacement d'un switch",
        annee: "2024",
        brief:
          "Remplacement d'un switch réseau avec un modèle plus performant.",
        description:
          "Remplacement d'un switch réseau défectueux par un modèle plus grand et reconfiguration des connexions.",
        url: "",
        screenShot: "/work/switch-24ports+4.jpg",
      },
    ],
  },
  {
    id: 4,
    theme: "Cybersécurité",
    image: "/work/openvpn-pfsense.png",
    posts: [
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
        screenShot: "/work/backup-job.png",
      },
    ],
  },
  {
    id: 5,
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
  {
    id: 6,
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
    id: 7,
    theme: "Certification",
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
];

export default projets;
