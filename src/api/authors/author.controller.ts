import { getUniqueAuthor } from "./author.services";

const getOne = async (id: number) => {
  try {
    const author = await getUniqueAuthor(id);
    if (!author) {
      return Response.json(
        {
          success: false,
          messages: ["Author not found"],
        },
        {
          status: 404,
        },
      );
    }

    return Response.json({
      success: true,
      data: author,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        messages: ["Error searching for author"],
      },
      {
        status: 500,
      },
    );
  }
};

export const authorController = {
  getOne,
};
