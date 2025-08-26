"use client";

import style from "./PostFilter.module.css";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { useState } from "react";

interface Props {
  onFilter: ({ title }: { title: string }) => void;
}

function PostFilter({ onFilter }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = (e: any) => {
    e.preventDefault();

    const title = e.target.title.value;

    onFilter({ title });
    setIsOpen(false);
  };
  return (
    <aside className={style.filterMenu}>
      <button
        className={style.filterMenuButton}
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        Filtrar
        {!isOpen && <ArrowBigUp />}
        {isOpen && <ArrowBigDown />}
      </button>
      {isOpen && (
        <form onSubmit={onSubmit} className={style.filtersContainer}>
          <div className={style.inputFilterContainer}>
            <span>Filtrar por nombre</span>
            <input type="text" name="title"/>
          </div>
          <div className={style.buttonFilterContainer}>
            <button>Filtrar</button>
          </div>
        </form>
      )}
    </aside>
  );
}

export default PostFilter;
