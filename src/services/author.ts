import type { Author } from "@/interfaces/author.interface";

const authors = [
  {
    id: 101,
    name: "Alex Rivera",
    img: "https://i.pravatar.cc/150?u=alex",
    categories: ["Tecnología", "IA", "Futuro", "lorem", "ipsum"],
    email: "alexrivero@mail.com",
    description: "Lorem",
    posts: [
      {
        id: 1,
        img: "https://picsum.photos/seed/tech/800/450",
        title: "El futuro de la Inteligencia Artificial en 2026",
        description:
          "Un análisis profundo sobre cómo los modelos multimodales están transformando la industria tecnológica actual.",
        date: 1739644329000,
        categories: ["Diseño", "UX", "UI"],
      },
      {
        id: 4,
        img: "https://picsum.photos/seed/tech/800/450",
        title: "Texto de ejemplo",
        description: "Lorem Ipsum",
        date: 1739644329000,
        categories: ["Diseño", "UX", "UI"],
      },
    ],
  },
  {
    id: 102,
    name: "Elena Garcés",
    img: "https://i.pravatar.cc/150?u=elena",
    categories: ["Diseño", "UX", "UI"],
    email: "elenagarces@mail.com",
    description: "Lorem",
    posts: [
      {
        id: 2,
        img: "https://picsum.photos/seed/design/800/450",
        title: "Principios de Diseño Minimalista",
        description:
          "Menos es más. Descubre cómo aplicar el minimalismo para mejorar la experiencia de usuario en aplicaciones móviles.",
        date: 1739557929000,
        categories: ["Diseño", "UX", "UI"],
      },
    ],
  },
  {
    id: 103,
    name: "Marco Polo",
    img: "https://i.pravatar.cc/150?u=marco",
    categories: ["Programación", "JavaScript", "TypeScript"],
    email: "marcopolo@mail.com",
    description: "Lorem",
    posts: [
      {
        id: 3,
        img: "https://picsum.photos/seed/dev/800/450",
        title: "Dominando TypeScript en proyectos grandes",
        description:
          "Guía práctica para implementar tipos avanzados y mejorar la escalabilidad de tus repositorios en Node.js.",
        date: 1739471529000,
        categories: ["Diseño", "UX", "UI"],
      },
    ],
  },
];

export const getUniqueAuthor = async (id: number) => {
  return authors.find((author) => id === author.id) as Author;
};
