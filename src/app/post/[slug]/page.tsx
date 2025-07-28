import PostDetail from "@/components/PostDetail/PostDetail";
import { Post } from "@/interfaces/post.interface";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

async function PostPage({ params }: Props) {
  const { slug } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${slug}`
  );

  if (response.status == 404) notFound();

  const post: Post = await response.json();

  return <PostDetail post={post} />;
}

export default PostPage;
