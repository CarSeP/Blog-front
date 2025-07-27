export interface Post {
  id: number;
  title: string;
  slug: string;
  description?: string;
  categories: string[];
  img?: string;
  createdAt: string;
  author: User;
}
