import { prisma } from "@/services/prisma";

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
