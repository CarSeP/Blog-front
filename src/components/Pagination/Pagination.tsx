import style from "./Pagination.module.css";

interface Props {
  totalPage: number;
  selectedPage: number;
  onChangePage: (page: number) => void;
}

function Pagination({ totalPage, selectedPage, onChangePage }: Props) {
  return (
    <nav className={style.paginator}>
      {Array.from({ length: totalPage }, (_, index) => (
        <button
          key={index}
          className={`${selectedPage == index + 1 ? style.seleted : ""}`}
          onClick={() => {
            onChangePage(index + 1);
          }}
        >
          {index + 1}
        </button>
      ))}
    </nav>
  );
}

export default Pagination;
