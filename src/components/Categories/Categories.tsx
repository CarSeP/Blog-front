"use client";
import { useEffect, useRef, useState } from "react";
import style from "./Categories.module.css";

interface Props {
  categories: string[];
}

function Categories({ categories }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const specialTag = useRef<HTMLSpanElement>(null);

  const handleResize = () => {
    if (!container.current || !specialTag.current) return;
    const containerStyles = window.getComputedStyle(container.current);
    const containerWidth = parseInt(containerStyles.width);
    const containerGap = parseInt(containerStyles.gap);

    container.current.childNodes.forEach((node) => {
      const tag = node as HTMLElement;
      tag.classList.remove(style.hidden);
    });

    const tagWidth = specialTag.current.offsetWidth || 0;
    let width = 0;
    let countTagsNoShow = 0;
    let titleTagsNoShow = "";

    container.current.childNodes.forEach((node) => {
      const tag = node as HTMLElement;
      const elementWidth = tag.offsetWidth;
      if (
        width + elementWidth + tagWidth + containerGap + 20 <=
        containerWidth
      ) {
        width += elementWidth + containerGap;
      } else if (!tag.id) {
        countTagsNoShow++;
        titleTagsNoShow += tag.innerHTML + "\n";
        tag.classList.add(style.hidden);
      }
    });
    if (countTagsNoShow) {
      specialTag.current.title = titleTagsNoShow;
      specialTag.current.innerHTML = "+" + countTagsNoShow;
    } else {
      specialTag.current.classList.add(style.hidden);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={container} className={style.postCategoryContainer}>
      {categories &&
        categories.map((category, index) => {
          return (
            <span key={index} className={style.postCategory}>
              {category}
            </span>
          );
        })}
      <span
        id="special-tag"
        ref={specialTag}
        className={`${style.postCategory} ${style.hidden}`}
      >
        +
      </span>
    </div>
  );
}

export default Categories;
