import "./AuthorDetail.css";
import { useRoute } from "wouter";
import AuthorDetailSection from "@/components/authorDetail/authorDetailSection/AuthorDetailSection";
import { Suspense, useMemo } from "react";

function AuthorDetailPage() {
  const [match, params] = useRoute("/author/:id/:slug");

  const promise = useMemo(() => {
    if (!params?.id) return null;
    return fetch(`/api/author/${Number(params.id)}`).then((res) => res.json());
  }, [params?.id]);

  if (!match || !promise) return null;
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
