import Link from "next/link";
import type { Post } from "../../interfaces/post.interface";
import style from "./PostCard.module.css";

interface Props {
  post: Post;
}

export function PostCard({ post }: Props) {
  return (
    <article className={style.postCard}>
      <Link href={"post/" + post.slug}>
        <header className={style.postHeader}>
          <img className={style.postImg} src={post.img}></img>
        </header>
        <div className={style.postContent}>
          <div>
            <div className={style.postCategoryContainer}>
              {post.categories &&
                post.categories.map((category, index) => {
                  return (
                    <span key={index} className={style.postCategory}>
                      {category}
                    </span>
                  );
                })}
            </div>
            <h3 className={style.postTitle}>{post.title}</h3>
            <span className={style.postDescription}>{post.description}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
