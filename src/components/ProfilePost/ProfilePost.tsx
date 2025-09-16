import { Post } from "@/interfaces/post.interface";
import style from "./ProfilePost.module.css";
import Categories from "../Categories/Categories";
import { formatDate } from "@/services/date";
import Link from "next/link";
import ProfilePostActionButton from "../ProfilePostActionButton/ProfilePostActionButton";

interface Props {
  post: Post;
}

function ProfilePost({ post }: Props) {
  return (
    <article className={style.postCard}>
      <Link href={"/post/" + post.slug}>
        <header className={style.postImgHeader}>
          <img className={style.postImg} src={post.img} />
        </header>
        <div className={style.postBody}>
          <div className={style.postInfoContainer}>
            <div>
              <Categories categories={post.categories} />
            </div>
            <h3>{formatDate(post.createdAt)}</h3>
          </div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <ProfilePostActionButton slug={post.slug} />
        </div>
      </Link>
    </article>
  );
}

export default ProfilePost;
