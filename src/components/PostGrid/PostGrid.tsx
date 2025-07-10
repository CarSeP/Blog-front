"use client";

import { useEffect, useState } from "react";
import style from "./PostGrid.module.css";
import { Post } from "@/interfaces/post.interface";
import { PostCard } from "../PostCard/PostCard";

export function PostGrid() {
  const [posts, setPosts] = useState<Post[]>([]);
  const onFetch = async () => {
    const response = await fetch("/api/posts");
    const dataPost = await response.json();

    setPosts(dataPost);
  };

  useEffect(() => {
    onFetch();
  }, []);

  return (
    <section className={style.PostGridContainer}>
      <div className={style.PostGrid}>
        {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </section>
  );
}
