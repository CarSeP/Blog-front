import style from "./Categories.module.css";

interface Props {
  categories: string[];
}

function Categories({ categories }: Props) {
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

export default Categories;
