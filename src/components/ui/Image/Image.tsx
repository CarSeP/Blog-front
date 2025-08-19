"use client";

import style from "./Image.module.css";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

interface Props {
  src?: string;
  className: string;
}

function Image({ src, className }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={className}>
      {isLoading && (
        <div className={style.imgContainer}>
          <LoaderCircle />
        </div>
      )}
      <img
        onLoad={handleLoad}
        src={src || "/no-image.png"}
        className={className}
      />
    </div>
  );
}

export default Image;
