import Link from "next/link";
import style from "./HeaderButton.module.css";
import ProfileButton from "../ProfileButton/ProfileButton";

interface Props {
  isAuth: string;
}

function HeaderButton({ isAuth }: Props) {
  return (
    <div>
      {!isAuth && (
        <Link href="/login">
          <button className={style.loginButton}>Login</button>
        </Link>
      )}
      {isAuth && (
        <Link href={`/profile/${isAuth}`}>
          <ProfileButton />
        </Link>
      )}
    </div>
  );
}

export default HeaderButton;
