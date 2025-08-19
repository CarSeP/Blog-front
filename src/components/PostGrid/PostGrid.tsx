"use client";

import { useEffect, useState } from "react";
import style from "./PostGrid.module.css";
import { Post } from "@/interfaces/post.interface";
import { PostCard } from "../PostCard/PostCard";
import { Page } from "@/interfaces/page.interface";
import Pagination from "../Pagination/Pagination";

export function PostGrid() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<Page>({
    max: null,
    current: 1,
  });

  const onFetch = async (currentPage: number) => {
    const pageSize = process.env.NEXT_PUBLIC_POST_PAGE_SIZE || 10;
    const response = await fetch(
      `/api/posts?pageSize=${pageSize}&page=${currentPage}`
    );
    const dataPost = await response.json();

    setPosts(dataPost.posts);
    setPage({
      current: currentPage,
      max: dataPost.totalPage,
    });
  };

  const onChangePage = (newPage: number) => {
    onFetch(newPage);
  };

  useEffect(() => {
    onFetch(page.current);
  }, []);

  return (
    <section className={style.PostGridContainer}>
      <div className={style.PostGrid}>
        {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
      {page.max && (
        <Pagination
          totalPage={page.max}
          selectedPage={page.current}
          onChangePage={onChangePage}
        />
      )}
    </section>
  );
}
