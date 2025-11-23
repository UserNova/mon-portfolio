export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "ENS Marrakech",
    degree: "Master 2",
    field: "Master en  Technologies Emergentes ",
    location: "Marrakech",
    start: "2024-09",
    highlights: ["Actuellement en cours", "Projets et travaux pratiques en Informatique"],
  },
  
  {
    school: "ENS Marrakech",
    degree: "Licence",
    field: "Licence en informatique ",
    location: "Marrakech",
    start: "2021-09",
    end: "2024-07",
    highlights: ["Mention Assez Bien"],
  },
  

 {
    school: "Maghreb Arabi Lycée",
    degree: "Baccalauréat",
    field: "Sciences Physiques",
    location: "Marrakech",
    start:"2017",
    end: "2020",
    highlights: ["Mention Bien"],
  }
];
