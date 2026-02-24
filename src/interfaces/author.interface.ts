import type { Post } from "./post.interface";

export interface Author {
  id: number;
  name: string;
  img: string;
  description: string;
  categories: string[];
  posts: Post[];
}
