import type { Post } from "@/interfaces/post.interface";
import "./HomePostCard.css";
import Badge from "@/components/ui/Badge/Badge";
import { formatDate } from "@/services/date";

interface Props {
  post: Post;
}

function HomePostCard({ post }: Props) {
  return (
    <article className="postCard">
      <div className="postHeader">
        <img src={post.img} alt="" />
      </div>
      <div className="postContent">
        {post.categories.length && (
          <div className="categoryContainer">
            {post.categories.map((category) => (
              <Badge title={category} />
            ))}
          </div>
        )}
        <h2 className="title">{post.title}</h2>
        <p className="description">{post.description ?? ""}</p>
        <div className="line"></div>
        <div className="postAuthor">
          <picture className="authorPhoto">
            <img src={post.author.img} alt="" />
          </picture>
          <div className="authorData">
            <span className="authorName">{post.author.name}</span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default HomePostCard;
