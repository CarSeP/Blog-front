import type { BunRequest } from "bun";
import { createUser } from "./auth.services";

const register = async (req: BunRequest) => {
  try {
    const body = await req.json();

    const { errors, user } = await createUser(body);

    if (!user) {
      return Response.json(
        {
          success: false,
          messages: errors,
        },
        {
          status: 409,
        },
      );
    }

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        messages: ["Error registering user"],
      },
      {
        status: 500,
      },
    );
  }
};

export const authController = {
  register,
};
