import Link from "next/link";
import style from "./Header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <h1 className={style.title}>
          <Link href="/">Blog</Link>
        </h1>
        <Link href="/login">
          <button className={style.loginButton}>Login</button>
        </Link>
      </div>
    </header>
  );
}
