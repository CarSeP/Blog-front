import type { BunRequest } from "bun";
import { authController } from "./auth.controller";

export const authRouter = {
  "/api/auth/register": {
    async POST(req: BunRequest) {
      return await authController.register(req);
    },
  },
};
