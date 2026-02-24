import { getManyPost } from "@/services/post";
import type { Post } from "@/interfaces/post.interface";
import "./HomePostGrid.css";
import HomePostCard from "../homePostCard/HomePostCard";

const posts = await getManyPost();

function HomePostGrid() {
  return (
    <section className="postContainer">
      <div className="grid">
        {posts &&
          posts.map((post: Post) => (
            <a
              href={`/post/${post.id}/${post.title}`}
              className="postCardContainer"
              key={post.id}
            >
              <HomePostCard post={post} />
            </a>
          ))}
      </div>
    </section>
  );
}

export default HomePostGrid;
