import type { Post } from "@/interfaces/post.interface";
import "./HomePostGrid.css";
import HomePostCard from "../homePostCard/HomePostCard";
import { Link } from "wouter";

const response = await fetch("/api/posts");
const posts = await response.json();

function HomePostGrid() {
  if (!posts.data) {
    return;
  }

  return (
    <section className="postContainer">
      <div className="grid">
        {posts.data &&
          posts.data.map((post: Post) => (
            <Link
              href={`/post/${post.id}/${post.slug}`}
              className="postCardContainer"
              key={post.id}
            >
              <HomePostCard post={post} />
            </Link>
          ))}
      </div>
    </section>
  );
}

export default HomePostGrid;
