export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  expiryDate?: string; // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string; // "/certs/aws-saa.webp"
  imageAlt?: string; // "Badge AWS SAA"
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
 {
  title: "Certificat de Responsive Web Design",
  issuer: "FreeCodeCamp",
  issueDate: "2021-12",
  credentialUrl: "https://freecodecamp.org/certification/rania-zhiri/responsive-web-design",
  skills: ["HTML", "CSS", "Flexbox", "Grid", "Responsive Design"],
  tags: ["Web", "Frontend", "Design"],
  image: "/assets/Certif1.jpg",
  imageAlt: "Badge Responsive Web Design FreeCodeCamp",
  status: "active",
},
  {
    title: "Hibernate & JPA",
    issuer: "mliaedu.toubkalit",
    issueDate: "2025-10",
    skills: [
    "JPA", 
    "Hibernate", 
    "Mapping d’entités", 
    "Associations et héritage", 
    "JPQL/Criteria/SQL", 
    "Optimisation N+1, fetching, batching", 
    "Tests unitaires et intégration"
  ],
  tags: ["Java", "Backend", "ORM", "Persistence"],
  image: "/assets/Certif2.jpg",
  imageAlt: "Badge Hibernate & JPA",
  status: "active",
  },

  {
  title: "Fondamentaux et Concepts Avancés de la Programmation Java",
  issuer: "mliaedu.toubkalit",
  issueDate: "2025-07",
  skills: [
    "Java", 
    "POO", 
    "Collections Framework", 
    "JDBC", 
    "Swing", 
    "Gestion des exceptions", 
    "Flux I/O"
  ],
  tags: ["Java", "Programmation", "Desktop Apps"],
  image: "/assets/Certif3.jpg",
  imageAlt: "Badge Fondamentaux et Concepts Avancés de Java",
  status: "active",
}

];
