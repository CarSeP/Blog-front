import type { Post } from "@/interfaces/post.interface";

const posts = [
  {
    id: 1,
    img: "https://picsum.photos/seed/tech/800/450",
    title: "El futuro de la Inteligencia Artificial en 2026",
    description:
      "Un análisis profundo sobre cómo los modelos multimodales están transformando la industria tecnológica actual.",
    categories: ["Tecnología", "IA", "Futuro"],
    date: 1739644329000,
    author: {
      id: 101,
      name: "Alex Rivera",
      img: "https://i.pravatar.cc/150?u=alex",
    },
  },
  {
    id: 2,
    img: "https://picsum.photos/seed/design/800/450",
    title: "Principios de Diseño Minimalista",
    description:
      "Menos es más. Descubre cómo aplicar el minimalismo para mejorar la experiencia de usuario en aplicaciones móviles.",
    categories: ["Diseño", "UX", "UI"],
    date: 1739557929000,
    author: {
      id: 102,
      name: "Elena Garcés",
      img: "https://i.pravatar.cc/150?u=elena",
    },
  },
  {
    id: 3,
    img: "https://picsum.photos/seed/dev/800/450",
    title: "Dominando TypeScript en proyectos grandes",
    description:
      "Guía práctica para implementar tipos avanzados y mejorar la escalabilidad de tus repositorios en Node.js.",
    categories: ["Programación", "JavaScript", "TypeScript"],
    date: 1739471529000,
    author: {
      id: 103,
      name: "Marco Polo",
      img: "https://i.pravatar.cc/150?u=marco",
    },
  },
  {
    id: 4,
    img: "https://picsum.photos/seed/tech/800/450",
    title: "Texto de ejemplo",
    description: "Lorem Ipsum",
    categories: ["lorem", "ipsum"],
    date: 1739644329000,
    author: {
      id: 101,
      name: "Alex Rivera",
      img: "https://i.pravatar.cc/150?u=alex",
    },
  },
];

export const getManyPost = async () => {
  return posts;
};

export const getUniquePost = async (id: Post["id"]) => {
  return posts.find((post) => id === post.id) as Post;
};
