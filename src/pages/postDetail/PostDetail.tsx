import "./postDetail.css";
import PostDetailSection from "@/components/postDetail/postDetailSection/PostDetailSection";
import { Suspense, useMemo } from "react";
import { useRoute } from "wouter";

function PostDetailPage() {
  const [match, params] = useRoute("post/:id/:slug");

  const promise = useMemo(() => {
    if (!params?.id) return null;
    return fetch(`/api/posts/${Number(params.id)}`).then((res) => res.json());
  }, [params?.id]);

  if (!match || !promise) return null;

  return (
    <main className="postSection">
      <Suspense fallback={<div>Cargando ...</div>}>
        <div className="post">
          <PostDetailSection promise={promise} />
        </div>
      </Suspense>
    </main>
  );
}

export default PostDetailPage;
