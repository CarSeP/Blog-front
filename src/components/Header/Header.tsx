import style from "./Header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.title}>Blog</h1>
    </header>
  );
}
