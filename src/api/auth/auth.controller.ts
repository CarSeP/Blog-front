import type { BunRequest } from "bun";
import { createUser, loginUser } from "./auth.services";

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

const login = async (req: BunRequest) => {
  try {
    const body = await req.json();
    const { errors, token, status } = await loginUser(body);

    if (!token) {
      return Response.json(
        {
          success: false,
          messages: errors,
        },
        {
          status,
        },
      );
    }

    return Response.json({
      token,
      success: true,
    });
  } catch {
    return Response.json(
      {
        success: false,
        messages: ["Error loging user"],
      },
      {
        status: 500,
      },
    );
  }
};

const logout = async (req: BunRequest) => {
  return Response.json(null, {
    status: 302,
    headers: {
      Location: "/",
      "Set-Cookie":
        "token=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;",
    },
  });
};

export const authController = {
  register,
  login,
  logout,
};
