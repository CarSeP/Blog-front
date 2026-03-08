import { postsRouter } from "./posts/posts.router";
import { authorRouter } from "./authors/author.router";

export const routes = {
  ...postsRouter,
  ...authorRouter,
};
