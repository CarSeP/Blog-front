import type { BunRequest } from "bun";
import { postController } from "./posts.contoller";

export const postsRouter = {
  "/api/posts": {
    async GET() {
      return await postController.getMany();
    },
  },
  "/api/posts/:id": {
    async GET(req: BunRequest) {
      const id = Number(req.params.id);
      return await postController.getOne(id);
    },
  },
};
