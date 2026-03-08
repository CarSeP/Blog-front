import { getUniquePost } from "@/services/post";
import "./postDetail.css";
import PostDetailSection from "@/components/postDetail/postDetailSection/PostDetailSection";
import { Suspense } from "react";
import { useRoute } from "wouter";

function PostDetailPage() {
  const [match, params] = useRoute("post/:id/:slug");

  if (!match) {
    return;
  }

  const id = params.id;
  const promise = getUniquePost(Number(id));
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
