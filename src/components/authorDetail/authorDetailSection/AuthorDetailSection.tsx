import type { Author } from "@/interfaces/author.interface";
import { use } from "react";
import AuthorDetailHeader from "../authorDetailHeader/AuthorDetailHeader";
import AuthorDetailPost from "../authorDetailPost/AuthorDetailPost";

interface Props {
  promise: Promise<Author>;
}

function AuthorDetailSection({ promise }: Props) {
  const author = use(promise);
  return (
    <>
      <AuthorDetailHeader author={author} />
      <AuthorDetailPost posts={author.posts} />
    </>
  );
}

export default AuthorDetailSection;
