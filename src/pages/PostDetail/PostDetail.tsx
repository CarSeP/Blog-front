import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostDetailHeader from "@/components/postDetail/postDetailHeader/PostDetailHeader";
import { getUniquePost } from "@/services/post";
import PostDetailContent from "@/components/postDetail/postDetailContent/PostDetailContent";
import "./postDetail.css";
import type { Post } from "@/interfaces/post.interface";

function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      if (id) {
        const fetchedPost = await getUniquePost(Number(id));
        setPost(fetchedPost || null);
      } else {
        setPost(null);
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post no encontrado.</div>;
  }

  return (
    <main className="postSection">
      <div className="post">
        <PostDetailHeader post={post} />
        <PostDetailContent post={post} />
      </div>
    </main>
  );
}

export default PostDetailPage;
