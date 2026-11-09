/* ============================================================
   TOUT LE CONTENU DU SITE EST ICI. Modifie ce fichier pour
   changer les textes, ajouter un projet ou une compétence.
   Les pages se mettent à jour et les liens se créent seuls.
   ============================================================ */

const SITE = {
  nom: "Arthur Lavigne",
  titre: "Étudiant en informatique",
  recherche: "Stage & alternance en développement logiciel",
  lieu: "Toulouse et alentours",
  github: "https://github.com/ARTHUR-313",
  linkedin: "https://www.linkedin.com/in/VOTRE-PROFIL",   // À REMPLACER
  email: "VOTRE_EMAIL@exemple.fr",                        // À REMPLACER (sert au formulaire)
  cv: "assets/cv.pdf",
  photo: "img/photo.jpg"
};

/* ---------- COMPÉTENCES ----------
   projets : liste d'identifiants de PROJETS (lien automatique) */
const COMPETENCES = [
  { id: "dev", titre: "Développer des applications",
    resume: "Concevoir et programmer des applications fiables, de l’algorithme jusqu’à l’interface.",
    debut: "Premiers programmes simples en Java, avec un cadre très guidé.",
    maintenant: "Applications complètes avec interfaces, travail sur GitHub, et développement en entreprise en Python.",
    apport: "Je peux prendre en charge une fonctionnalité de bout en bout et livrer un code lisible.",
    outils: ["Java", "Python", "C#", "HTML/CSS", "JavaScript", "PHP", "Angular"],
    projets: ["app", "algo", "stage"] },
  { id: "algo", titre: "Optimiser et comparer des solutions",
    resume: "Choisir la solution la plus efficace en mesurant et en comparant les performances.",
    debut: "Écrire un algorithme qui fonctionne.",
    maintenant: "Comparer plusieurs algorithmes en Java et présenter les résultats dans un document technique.",
    apport: "Je justifie mes choix techniques avec des mesures plutôt qu’au ressenti.",
    outils: ["Java", "Analyse de complexité", "Documentation technique"],
    projets: ["algo"] },
  { id: "bdd", titre: "Concevoir et exploiter des données",
    resume: "Modéliser, créer et interroger des bases de données relationnelles et NoSQL.",
    debut: "Requêtes SQL de base.",
    maintenant: "Schémas relationnels complets, programmation PL/SQL et découverte de MongoDB en stage.",
    apport: "Je structure les données pour qu’elles restent cohérentes et exploitables.",
    outils: ["SQL", "PL/SQL", "Oracle", "MongoDB"],
    projets: ["bdd", "stage"] },
  { id: "admin", titre: "Administrer et déployer",
    resume: "Travailler sous Linux, automatiser avec Bash, versionner avec Git, conteneuriser avec Docker.",
    debut: "Utilisation de base du terminal.",
    maintenant: "Développement sous Linux dans un environnement de calcul haute performance (HPC).",
    apport: "Je suis à l’aise dans un environnement serveur et dans une chaîne DevOps.",
    outils: ["Linux", "Bash", "Git", "Docker"],
    projets: ["stage"] },
  { id: "gestion", titre: "Piloter un projet",
    resume: "Proposer des solutions, planifier, répartir les tâches et suivre l’avancement.",
    debut: "Réaliser mes propres tâches dans les délais.",
    maintenant: "Proposer des solutions techniques et organiser le travail d’une équipe de trois.",
    apport: "Je tiens les délais et je sais alerter tôt quand un point bloque.",
    outils: ["GitHub", "Planification", "Méthodes agiles"],
    projets: ["app"] },
  { id: "equipe", titre: "Travailler en équipe",
    resume: "Communiquer, partager le code et rédiger une documentation claire pour les autres.",
    debut: "Projets à deux avec une répartition simple.",
    maintenant: "Projets à trois avec Git, documentation technique et échanges avec une équipe en entreprise.",
    apport: "Je m’intègre vite et je facilite le travail des autres grâce à une bonne documentation.",
    outils: ["Git / GitHub", "Documentation", "Communication"],
    projets: ["app", "bdd", "algo", "stage"] }
];

/* ---------- PROJETS ----------
   img : mets une capture dans img/projets/ et indique son chemin
   lien : adresse du dépôt GitHub (laisse "" s'il n'y en a pas)
   comps : identifiants de COMPETENCES */
const PROJETS = [
  { id: "app", titre: "Application en équipe", periode: "Mai – Juin", equipe: "Équipe de 3", type: "Projet universitaire",
    contexte: "Projet universitaire réalisé en équipe de trois personnes.",
    besoin: "Développer une application avec une interface utilisateur claire et agréable.",
    solution: "Conception des interfaces (IHM), propositions de solutions techniques et collaboration quotidienne via GitHub.",
    resultat: "Une application fonctionnelle livrée dans les délais, et un travail d’équipe bien organisé.",
    tech: ["GitHub", "IHM"], comps: ["dev", "gestion", "equipe"], img: "", lien: "" },
  { id: "bdd", titre: "Création d’une base de données", periode: "Novembre", equipe: "Binôme", type: "Projet universitaire",
    contexte: "Projet de modélisation réalisé en binôme.",
    besoin: "Structurer et stocker des données de façon cohérente.",
    solution: "Création des schémas relationnels, puis développement de la base de données en SQL.",
    resultat: "Une base opérationnelle, prête à être interrogée.",
    tech: ["SQL", "Oracle", "Schémas relationnels"], comps: ["bdd", "equipe"], img: "", lien: "" },
  { id: "algo", titre: "Comparaison d’algorithmes", periode: "Septembre", equipe: "Équipe de 3", type: "Projet universitaire",
    contexte: "Étude de performance réalisée en équipe de trois.",
    besoin: "Déterminer quelle solution est la plus efficace.",
    solution: "Développement des algorithmes en Java, organisation du travail d’équipe et rédaction d’un document technique.",
    resultat: "Une comparaison argumentée et documentée.",
    tech: ["Java", "Document technique"], comps: ["algo", "dev", "equipe"], img: "", lien: "" },
  { id: "stage", titre: "Stage chez Bull (HPC)", periode: "Mars – Avril 2026", equipe: "Équipe en entreprise", type: "Stage",
    contexte: "Stage dans le domaine du calcul haute performance (High Performance Computing).",
    besoin: "Faire évoluer l’application client/serveur HFIT.",
    solution: "Compréhension du domaine, puis modifications de l’application avec Linux, Python et MongoDB.",
    resultat: "Des évolutions intégrées à l’application existante.",
    tech: ["Linux", "Python", "MongoDB"], comps: ["admin", "dev", "bdd"], img: "", lien: "" }
];

/* ---------- POURSUITE D'ÉTUDES ---------- */
const FORMATIONS = [
  { titre: "Diplôme d’ingénieur informatique", ecole: "CESI Toulouse (Labège) · Bac+5 · alternance",
    contenu: ["Architecture logicielle, microservices, agilité", "Docker, Kubernetes, CI/CD, administration Linux", "Bases de données, cybersécurité applicative"],
    atouts: "Java, Python, C#, Angular, Oracle/PL-SQL, Git et Docker, acquis en BUT et pratiqués en projets d’équipe.",
    debouches: "Ingénieur développement ou DevOps, puis Lead Developer ou architecte logiciel.",
    entree: "Dossier, tests (dont anglais), entretien et contrat d’alternance." },
  { titre: "Master Informatique – Conception et Développement Logiciel", ecole: "Université Toulouse III – Paul Sabatier · Bac+5",
    contenu: ["Programmation avancée et qualité du code", "Modélisation et optimisation de bases de données", "Web moderne, services REST, sécurité"],
    atouts: "Bases solides en développement objet et web, et en conception de bases de données.",
    debouches: "Développeur full-stack, ingénieur d’études, puis architecte applicatif ou expert technique.",
    entree: "Candidature MonMaster, dossier académique et entretien." }
];
