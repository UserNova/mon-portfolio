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
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/28-505f2e03-cda0-4cf6-ae88-a8e0e280bf8e-442797",
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
  issueDate: "2025-10",
  credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/6-505f2e03-cda0-4cf6-ae88-a8e0e280bf8e-165065",
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
},

 {
  title: "Développement Front-End Moderne avec React",
  issuer: "mliaedu.toubkalit",
  issueDate: "2025-11",
  credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/26-505f2e03-cda0-4cf6-ae88-a8e0e280bf8e-399520",
  skills: [
    "Hooks (useState, useEffect, useContext)",
    "Routing (React Router)",
    "Gestion d’état globale",
    "HOC (High-Order Components)",
    "Render Props",
    "Tests automatisés",
    "CRUD",
  ],
  tags: ["React", "JavaScript", "Front-End", "Web Development"],
  image: "/assets/Certif3.jpg",
  imageAlt: "Badge Développement Front-End Moderne avec React",
  status: "active"
},

{
  title: "Développement JakartaEE : Spring",
  issuer: "mliaedu.toubkalit",
  issueDate: "2025-11",
  credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/17-505f2e03-cda0-4cf6-ae88-a8e0e280bf8e-446329",
  skills: [
  "JPA & Hibernate (ORM)",
  "Création d’API REST avec Spring Boot",
  "JWT (JSON Web Tokens)",
  "OAuth2 (Google / Keycloak)",
  "Swagger / OpenAPI",
  "Déploiement sur Tomcat",
  "Automatisation avec Bash",
  "Monitoring"
],

  tags: [ "Spring Boot", "Spring MVC", "Spring Security"],
  image: "/assets/Certif5.jpg",
  imageAlt: "Badge Développement JakartaEE : Spring",
  status: "active"
}



];
