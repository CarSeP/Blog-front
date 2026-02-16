import type { Post } from "@/interfaces/post.interface";
import "./PostDetailHeader.css"

interface Props {
  post: Post;
}

function PostDetailHeader({ post }: Props) {
  return (
    <header className="postHeader">
      <img src={post.img} alt={post.title} />
    </header>
  );
}

export default PostDetailHeader;
