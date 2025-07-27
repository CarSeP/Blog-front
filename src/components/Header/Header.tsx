import Link from "next/link";
import style from "./Header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.title}><Link href="/">Blog</Link></h1>
    </header>
  );
}
