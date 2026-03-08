import type { Post } from "@/interfaces/post.interface";
import PostDetailContent from "../postDetailContent/PostDetailContent";
import PostDetailHeader from "../postDetailHeader/PostDetailHeader";
import { use } from "react";

interface Props {
  promise: Promise<Post>;
}

function PostDetailSection({ promise }: Props) {
  const post = use(promise);
  return (
    <>
      <PostDetailHeader post={post} />
      <PostDetailContent post={post} />
    </>
  );
}

export default PostDetailSection;
