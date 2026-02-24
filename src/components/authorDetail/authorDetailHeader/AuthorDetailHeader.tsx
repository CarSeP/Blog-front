import Badge from "@/components/ui/Badge/Badge";
import type { Author } from "@/interfaces/author.interface";
import "./AuthorDetailHeader.css";

interface Props {
  author: Author;
}

function AuthorDetailHeader({ author }: Props) {
  return (
    <header className="authorHeader">
      <div className="authorPhoto">
        <img src={author.img} alt={author.name} />
      </div>
      <div className="authorInfo">
        <h1>{author.name}</h1>
        <p>{author.description}</p>
        <div className="categoryContainer">
          {author.categories.map((category) => (
            <Badge title={category} key={category} />
          ))}
        </div>
      </div>
    </header>
  );
}

export default AuthorDetailHeader;
