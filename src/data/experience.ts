// src/data/experience.ts
export type Experience = {
  title: string;
  period: string;
  organization: string;
  tasks: string[];
  skills: string[];
  icon?: string;
};

export const experiences: Experience[] = [
  {
    title: "DESIGNER",
    period: "2024-2025",
    organization: "Club Bridge ENS Marrakech",
    icon: "🎨",
    tasks: [
      "Création de designs visuels pour les publications, affiches et fiches informatives.",
      "Organisation des évènements à l'ENS"
    ],
    skills: ["Graphic Design", "Adobe Photoshop", "Canva", "Événementiel", "Création de contenu"]
  },
  {
    title: "ENQUÊTRICE - RECENSEMENT GÉNÉRAL",
    period: "Septembre - 2024",
    organization: "Haut-Commissariat ou Plan-Marrakech",
    icon: "📊",
    tasks: [
      "Collecte de données sur la population et les ménages.",
      "Saisie et vérification des informations dans la base de données."
    ],
    skills: ["Collecte de données", "Traitement de données", "Travail en équipe", "Travail de terrain"]
  },
  {
    title: "STAGE EN SERVICE FINANCIER",
    period: "Février - Juin 2024",
    organization: "École normale supérieure de Marrakech",
    icon: "💻",
    tasks: [
      "Conception et développement d'une application web pour la gestion des vacataires et des budgets.",
      "Automatisation du calcul des indemnités et gestion des documents de paiement conformément aux lois en vigueur.",
      "Implémentation d'un calendrier pour le suivi des séances et des jours fériés.",
      "Création d'une base de données et de statistiques pour une gestion optimisée des ressources."
    ],
    skills: ["Développement Web", "Gestion des bases de données", "Analyse et résolution de problèmes", "Automatisation", "Esprit d’innovation", "Travail en équipe"]
  },
  {
    title: "STAGE ASSISTANTE SURVEILLANTE",
    period: "Mars 2023 - Juillet 2024",
    organization: "École Nahda Marrakech / École Maghreb Arabi Marrakech",
    icon: "📚",
    tasks: [
      "Collecte et mise à jour des données des élèves sur la plateforme MASSAR.",
      "Création et gestion de fichiers Excel pour le suivi des absences et emplois du temps.",
      "Enregistrement des notes d'assiduité et de conduite dans la plateforme MASSAR.",
      "Extraction et préparation de données pour les rapports administratifs."
    ],
    skills: ["Gestion administrative", "Plateforme MASSAR", "Excel", "Gestion des données"]
  },
  {
    title: "STAGE D'OBSERVATION",
    period: "Juin - Juillet 2022",
    organization: "TENMAR-Marrakech",
    icon: "🔍",
    tasks: [
      "Découverte des étapes de création d'une application et participation aux réunions d'équipe.",
      "Observation du déroulement des procédures et des tâches au sein de chaque service."
    ],
    skills: ["Observation des processus d’entreprise", "Communication professionnelle ", "Gestion du temps et des tâches", "Analyse des processus"]
  }
];
