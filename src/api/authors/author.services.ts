import { prisma } from "@/services/prisma";
import type { Author } from "@/interfaces/author.interface";

export const getUniqueAuthor = async (id: number) => {
  const posts = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      posts: true,
    },
  });
  return posts;
};

export const updateAuthor = async (id: number, data: Partial<Author>) => {
  const updatedAuthor = await prisma.user.update({
    where: { id },
    data: {
      name: data.name,
      description: data.description,
      categories: data.categories,
      img: data.img,
    },
  });
  return updatedAuthor;
};
