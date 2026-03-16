import { postsRouter } from "./posts/posts.router";
import { authorRouter } from "./authors/author.router";
import { authRouter } from "./auth/auth.router";

export const routes = {
  ...postsRouter,
  ...authorRouter,
  ...authRouter,
};
