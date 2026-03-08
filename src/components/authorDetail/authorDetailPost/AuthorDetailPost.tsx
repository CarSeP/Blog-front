import type { Post } from "@/interfaces/post.interface";
import "./AuthorDetailPost.css";
import Badge from "@/components/ui/Badge/Badge";
import { formatDate } from "@/services/date";
import { Link } from "wouter";

interface Props {
  posts: Post[];
}

function AuthorDetailPost({ posts }: Props) {
  if (!posts.length) {
    return;
  }

  return (
    <section className="authorPostContainer">
      {posts.map((post) => (
        <article className="post">
          <Link
            href={`../../post/${post.id}/${post.slug}`}
            className="authorPostLink"
          >
            <header className="postHeader">
              <img src={post.img} alt={post.title} />
            </header>
            <div className="authorPostData">
              <div className="authorPostInfo">
                <div className="categoryContainer">
                  {post.categories.map((category) => (
                    <Badge title={category} key={category} />
                  ))}
                </div>
                <span>{formatDate(post.createdAt)}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
}

export default AuthorDetailPost;
