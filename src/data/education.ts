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
    school: "Maghreb Arabi Lycée",
    degree: "Baccalauréat",
    field: "Sciences Physiques",
    location: "Marrakech",
    start:"2017",
    end: "2020",
    highlights: ["Mention Bien"],
  },
];
