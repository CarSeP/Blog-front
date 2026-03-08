import "./AuthorDetail.css";
import { useRoute } from "wouter";
import { getUniqueAuthor } from "@/services/author";
import AuthorDetailSection from "@/components/authorDetail/authorDetailSection/AuthorDetailSection";
import { Suspense } from "react";

function AuthorDetailPage() {
  const [match, params] = useRoute("/author/:id/:slug");

  if (!match) {
    return;
  }

  const id = params.id;
  const promise = getUniqueAuthor(Number(id));
  return (
    <main className="authorDataContainer">
      <Suspense fallback={<div>Cargando ...</div>}>
        <div className="authorData">
          <AuthorDetailSection promise={promise} />
        </div>
      </Suspense>
    </main>
  );
}

export default AuthorDetailPage;
