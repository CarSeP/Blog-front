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
          <button className={style.loginButton}>Iniciar Sesión</button>
        </Link>
      )}
      {isAuth && (
        <div className={style.buttonContainer}>
          <Link href={`/profile/${isAuth}`}>
            <ProfileButton />
          </Link>
          <Link href="/api/auth/logout">
            <button className={style.loginButton}>Cerrar Sesión</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default HeaderButton;
