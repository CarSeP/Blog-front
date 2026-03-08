import { getAllPosts, getUniquePost } from "./posts.services";

const getMany = async () => {
  try {
    const posts = await getAllPosts();

    return Response.json({
      success: true,
      data: posts,
    });
  } catch (_error) {
    return Response.json(
      {
        success: false,
        messages: ["Error searching for posts"],
      },
      {
        status: 500,
      },
    );
  }
};

const getOne = async (id: number) => {
  try {
    const post = await getUniquePost(id);
    if (!post) {
      return Response.json(
        {
          success: false,
          messages: ["Posts not found"],
        },
        {
          status: 404,
        },
      );
    }

    return Response.json({
      success: true,
      data: post,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        messages: ["Error searching for posts"],
      },
      {
        status: 500,
      },
    );
  }
};

export const postController = {
  getMany,
  getOne,
};
