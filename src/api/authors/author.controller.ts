import { getUniqueAuthor, updateAuthor } from "./author.services";
import type { BunRequest } from "bun";

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

const update = async (req: BunRequest) => {
  try {
    const id = Number(req.params.id);
    const body = await req.json();

    const author = await updateAuthor(id, body);

    return Response.json({
      success: true,
      data: author,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        messages: ["Error updating author"],
      },
      {
        status: 500,
      },
    );
  }
};

export const authorController = {
  getOne,
  update,
};
