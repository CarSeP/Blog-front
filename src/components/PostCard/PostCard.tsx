import Link from "next/link";
import type { Post } from "../../interfaces/post.interface";
import style from "./PostCard.module.css";
import Categories from "../Categories/Categories";
import Image from "../ui/Image/Image";
import { formatDate } from "@/services/date";

interface Props {
  post: Post;
}

export function PostCard({ post }: Props) {
  return (
    <article className={style.postCard}>
      <header className={style.postHeader}>
        <Link href={"post/" + post.slug} className={style.postAuthorImgContainer}>
          <Image className={style.postImg} src={post.img} />
        </Link>
      </header>
      <div className={style.postContent}>
        <div>
          <Link href={"post/" + post.slug}>
            <Categories categories={post.categories} />
            <h2 className={style.postTitle} title={post.title}>
              {post.title}
            </h2>
            <span className={style.postDescription}>{post.description}</span>
          </Link>
        </div>
        <div className={style.postBody}>
          <picture>
            <Image className={style.postAuthorImg} src={post.author.img} />
          </picture>
          <Link
            href={"/profile/" + post.author.username}
            className={style.postBodyInfo}
          >
            <h3>
              <b>{post.author.name}</b>
            </h3>
            <h3>{formatDate(post.createdAt)}</h3>
          </Link>
        </div>
      </div>
    </article>
  );
}
