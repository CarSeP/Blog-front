import { Post } from "./post.interface";

export interface User {
  id: number;
  name: string;
  username: string;
  categories: string[];
  img?: string;
  description?: string;
  posts: Post[];
}
