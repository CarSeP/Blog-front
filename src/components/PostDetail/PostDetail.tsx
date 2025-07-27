"use client";

import { Post } from "@/interfaces/post.interface";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./PostDetail.module.css";

function PostDetail() {
  const slug = useParams().slug;
  const [post, setPost] = useState<Post>();
  const onFetch = async () => {
    const response = await fetch(`/api/posts/${slug}`);
    const dataPost = await response.json();

    setPost(dataPost);
  };

  useEffect(() => {
    onFetch();
  }, []);

  return (
    <section className={style.post}>
      <header className={style.postHeader}>
        <img src={post?.img} className={style.postImg} />
      </header>
      <div className={style.postContent}>
        <div>
          <div className={style.postCategoryContainer}>
            {post?.categories &&
              post.categories.map((category, index) => {
                return (
                  <span key={index} className={style.postCategory}>
                    {category}
                  </span>
                );
              })}
          </div>
        </div>
        <h1 className={style.postTitle}>{post?.title}</h1>
        <p className={style.postDescription}> {post?.description}</p>
      </div>
    </section>
  );
}

export default PostDetail;
