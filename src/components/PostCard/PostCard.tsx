import Link from "next/link";
import type { Post } from "../../interfaces/post.interface";
import style from "./PostCard.module.css";
import PostCategories from "../PostCategories/PostCategories";
import { formatDate } from "@/services/date";

interface Props {
  post: Post;
}

export function PostCard({ post }: Props) {
  return (
    <article className={style.postCard}>
      <Link href={"post/" + post.slug}>
        <header className={style.postHeader}>
          <img
            className={style.postImg}
            src={post.img || "/no-image.png"}
          ></img>
        </header>
        <div className={style.postContent}>
          <div>
            <PostCategories categories={post.categories} />
            <h2 className={style.postTitle} title={post.title}>
              {post.title}
            </h2>
            <span className={style.postDescription}>{post.description}</span>
          </div>
          <div className={style.postBody}>
            <picture>
              <img
                className={style.postAuthorImg}
                src={post.author.img || "/no-image.png"}
              />
            </picture>
            <div className={style.postBodyInfo}>
              <h3>
                <b>{post.author.name}</b>
              </h3>
              <h3>{formatDate(post.createdAt)}</h3>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
