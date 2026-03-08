import { prisma } from "@/services/prisma";

export const getAllPosts = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  return posts;
};

export const getUniquePost = async (id: number) => {
  const posts = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
    },
  });
  return posts;
};
