import { getManyPost } from "@/services/post";
import type { Post } from "@/interfaces/post.interface";
import "./HomePostGrid.css";
import HomePostCard from "../HomePostCard/HomePostCard";

const posts = await getManyPost();

function HomePostGrid() {
  return (
    <section className="postContainer">
      <div className="grid">
        {posts && posts.map((post: Post) => <HomePostCard post={post} />)}
      </div>
    </section>
  );
}

export default HomePostGrid;
