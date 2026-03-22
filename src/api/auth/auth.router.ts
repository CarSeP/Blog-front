import type { BunRequest } from "bun";
import { authController } from "./auth.controller";

export const authRouter = {
  "/api/auth/register": {
    async POST(req: BunRequest) {
      return await authController.register(req);
    },
  },
  "/api/auth/login": {
    async POST(req: BunRequest) {
      return await authController.login(req);
    },
  },
  "/api/auth/logout": {
    async GET(req: BunRequest) {
      return await authController.logout(req);
    },
  },
};
