import { Post } from "@/interfaces/post.interface";
import style from "./PostDetail.module.css";

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
