import Link from "next/link";
import style from "./Login.module.css";

function Login() {
  return (
    <section className={style.loginSection}>
      <h1 className={style.title}>
        <b>Login</b>
      </h1>
      <div className={style.buttonContainer}>
        <button>Login con Google</button>
        <button>Login con Github</button>
      </div>
      <br />
      <Link className={style.link} href="/">
        Volver al inicio
      </Link>
    </section>
  );
}

export default Login;
