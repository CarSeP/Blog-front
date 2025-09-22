"use client";

import style from "./PostUpsert.module.css";
import { useRouter } from "next/navigation";

interface Props {
  authorUsername: string;
  mode: "create" | "update";
  slug?: string;
}

interface FormData {
  title: string;
  description: string;
}

function PostUpsert({ authorUsername, mode, slug }: Props) {
  const router = useRouter();

  const onSubmit = (e: any) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;

    if (mode === "update" && slug) {
      updatePost({ title, description });
    } else {
      createPost({ title, description });
    }
  };

  const createPost = async ({ title, description }: FormData) => {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, authorUsername }),
    });

    if (response.status == 201) {
      router.back();
    }
  };

  const updatePost = async ({ title, description }: FormData) => {
    const response = await fetch("/api/posts/" + slug, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, authorUsername }),
    });

    if (response.status == 200) {
      router.back();
    }
  };

  return (
    <form onSubmit={onSubmit} className={style.section}>
      <textarea
        name="title"
        className={style.titleInput}
        placeholder="Titulo"
      ></textarea>
      <textarea
        name="description"
        className={style.descriptionInput}
        placeholder="Descripcion"
      ></textarea>
      <div className={style.buttonContainer}>
        <button className={style.button}>
          {mode === "create" ? "Crear post" : "Actualizar post"}
        </button>
        <button className={style.button} onClick={() => window.history.back()}>
          {mode === "create" ? "Descartar post" : "Descartar edicion"}
        </button>
      </div>
    </form>
  );
}

export default PostUpsert;
