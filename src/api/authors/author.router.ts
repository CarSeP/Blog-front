import type { BunRequest } from "bun";
import { authorController } from "./author.controller";

export const authorRouter = {
  "/api/author/:id": {
    async GET(req: BunRequest) {
      const id = Number(req.params.id);
      return await authorController.getOne(id);
    },
    async PATCH(req: BunRequest) {
      return await authorController.update(req);
    },
  },
};
