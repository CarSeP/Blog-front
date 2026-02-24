import type { Post } from "@/interfaces/post.interface";
import "./PostDetailContent.css";
import Badge from "@/components/ui/Badge/Badge";
import { formatDate } from "@/services/date";

interface Props {
  post: Post;
}

function PostDetailContent({ post }: Props) {
  return (
    <section className="contentContainer">
      <div className="infoContainer">
        <div className="authorData">
          <div className="categoryContainer">
            {post.categories.map((category) => (
              <Badge title={category} key={category} />
            ))}
          </div>
          <a
            href={`/author/${post.author.id}/${post.author.name}`}
            className="authorInfo"
          >
            <img
              src={post.author.img}
              alt={post.author.name}
              className="authorPhoto"
            />
            <span className="authorName">{post.author.name}</span>
          </a>
        </div>
        <div>
          <span>{formatDate(post.date)}</span>
        </div>
      </div>
      <div>
        <h1 className="title">{post.title}</h1>
        <p>{post.description ?? ""}</p>
      </div>
    </section>
  );
}

export default PostDetailContent;
