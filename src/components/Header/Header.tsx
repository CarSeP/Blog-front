import style from "./Header.module.css";
import { cookies } from "next/headers";
import Link from "next/link";
import HeaderButton from "../HeaderButton/HeaderButton";
import jwt from "jsonwebtoken";

export async function Header() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value || "";
  let isAuth = "";
  jwt.verify(token, process.env.JWT_SECRET || "", function (err, decoded) {
    if (decoded && typeof decoded !== "string") {
      isAuth = decoded.id;
    }
  });

  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <h1 className={style.title}>
          <Link href="/">Blog</Link>
        </h1>
        <HeaderButton isAuth={isAuth} />
      </div>
    </header>
  );
}
