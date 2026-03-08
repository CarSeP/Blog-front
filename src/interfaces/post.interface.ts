import type { Author } from "./author.interface";

export interface Post {
  id: number;
  img: string;
  title: string;
  description: string;
  categories: string[];
  createdAt: string;
  updatedAt: string;
  slug: string;
  author: Author;
}
