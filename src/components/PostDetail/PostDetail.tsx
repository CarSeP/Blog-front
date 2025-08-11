import { Post } from "@/interfaces/post.interface";
import style from "./PostDetail.module.css";
import Categories from "../Categories/Categories";
import { formatDate } from "@/services/date";
import Link from "next/link";

interface Props {
  post: Post;
}

function PostDetail({ post }: Props) {
  return (
    <section className={style.post}>
      <header className={style.postHeader}>
        <img src={post?.img} className={style.postImg} />
      </header>
      <div className={style.postContent}>
        <div className={style.postContainer}>
          <div className={style.postSubContainer}>
            <Categories categories={post.categories} />
            <Link href={"/profile/" + post.author.username} className={style.postAuthorContainer}>
              <img
                className={style.postAuthorImg}
                src={post.author.img || "/no-image.png"}
              />
              <h3>
                <b>{post.author.name}</b>
              </h3>
            </Link>
          </div>
          <h3>{formatDate(post.createdAt)}</h3>
        </div>
        <h1 className={style.postTitle}>{post?.title}</h1>
        <p className={style.postDescription}> {post?.description}</p>
      </div>
    </section>
  );
}

export default PostDetail;
