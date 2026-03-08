import type { Author } from "@/interfaces/author.interface";
import { use } from "react";
import AuthorDetailHeader from "../authorDetailHeader/AuthorDetailHeader";
import AuthorDetailPost from "../authorDetailPost/AuthorDetailPost";

interface Props {
  promise: Promise<{ data: Author }>;
}

function AuthorDetailSection({ promise }: Props) {
  const author = use(promise);
  return (
    <>
      <AuthorDetailHeader author={author.data} />
      <AuthorDetailPost posts={author.data.posts} />
    </>
  );
}

export default AuthorDetailSection;
