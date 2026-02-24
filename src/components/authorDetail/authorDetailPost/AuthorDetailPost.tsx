import type { Post } from "@/interfaces/post.interface";
import "./AuthorDetailPost.css";
import Badge from "@/components/ui/Badge/Badge";
import { formatDate } from "@/services/date";

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
          <a href={`../../post/${post.id}/${post.title}`} className="authorPostLink">
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
                <span>{formatDate(post.date)}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </a>
        </article>
      ))}
    </section>
  );
}

export default AuthorDetailPost;
