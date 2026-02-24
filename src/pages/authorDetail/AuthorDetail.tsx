import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthorDetailHeader from "@/components/authorDetail/authorDetailHeader/AuthorDetailHeader";
import AuthorDetailPost from "@/components/authorDetail/authorDetailPost/AuthorDetailPost";
import { getUniqueAuthor } from "@/services/author";
import "./AuthorDetail.css";
import type { Author } from "@/interfaces/author.interface";

function AuthorDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAuthor = async () => {
      setLoading(true);
      try {
        if (id) {
          const fetchedAuthor = await getUniqueAuthor(Number(id));
          setAuthor(fetchedAuthor || null);
        } else {
          setAuthor(null);
        }
      } catch (error) {
        console.error("Error fetching author:", error);
        setAuthor(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthor();
  }, [id]);

  if (loading) {
    return <div className="loading">Cargando autor...</div>;
  }

  if (!author) {
    return <div className="error">Autor no encontrado.</div>;
  }

  return (
    <main className="authorDataContainer">
      <div className="authorData">
        <AuthorDetailHeader author={author} />
        <AuthorDetailPost posts={author.posts} />
      </div>
    </main>
  );
}

export default AuthorDetailPage;
