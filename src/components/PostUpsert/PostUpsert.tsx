"use client";

import style from "./PostUpsert.module.css";
import { useRouter } from "next/navigation";

interface Props {
  authorUsername: string;
}

function PostUpsert({ authorUsername }: Props) {
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;

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
        <button className={style.button}>Crear nuevo post</button>
        <button className={style.button} onClick={() => window.history.back()}>
          Descartar post
        </button>
      </div>
    </form>
  );
}

export default PostUpsert;
