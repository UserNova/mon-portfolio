export type Project = {
  title: string; period?: string; tags: string[];
  summary: string; link?: string; repo?: string; image?: string;
};

export const projects: Project[] = [
  {
    title: "BudENS",
    period: "2024",
    tags: ["SQL","Laravel","Chart.js","Breeze","Spatie","Tailwindcs","Livewire","DOMPDF","Full Calendar"],
    summary: "Application Web pour la  gestion de budget : cas d’ENS Marrakech .",
    repo: "https://github.com/ynaitmalek/Gestion-budget-ENS.git"
  },

  {
    title: "Gestion de Conference",
    period: "2023",
    tags: ["SQL","Laravel","PHP", "Chart.js", "HTML/CSS/Bootstrap"],
    summary: "Application Web pour Gestion des conférences et séminaires .",
    repo: ""
  },

  {
    title: "TriDechets",
    period: "2025",
    tags: ["VR","AR","C#","Unity"],
    summary: "Ce mini-projet a été réalisé dans le cadre d’un travail pratique de cours. L’objectif est de créer une activité interactive d’apprentissage autour du tri des déchets, en utilisant Unity 3D.",
    repo: "https://github.com/UserNova/VR-AR/tree/588e953b93f6cd5ff27f124abee552a2ad40b645/TriDechets_VR"
  },

  {
    title: "Gestion de biblio",
    period: "2025",
    tags: ["Spring Data JPA / Hibernate","Thymeleaf","HTML5","CSS3", "Bootstrap 5"],
    summary: "L’application permet de gérer les livres, leurs auteurs et les emprunts, tout en affichant les statuts (disponible / emprunté).",
    repo: "https://github.com/UserNova/GestionBiblio.git"
  }




 
];