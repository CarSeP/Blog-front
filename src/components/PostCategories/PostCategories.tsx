import style from "./PostCategories.module.css";

interface Props {
  categories: string[];
}

function PostCategories({ categories }: Props) {
  return (
    <div className={style.postCategoryContainer}>
      {categories &&
        categories.map((category, index) => {
          return (
            <span title={category} key={index} className={style.postCategory}>
              {category}
            </span>
          );
        })}
    </div>
  );
}

export default PostCategories;
