"use client";
import style from "./Login.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

function Login() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (response.status == 401) {
      setErrorMessage(true);
      return;
    }

    if (response.status == 200) {
      router.push("/");
    }
  };
  return (
    <section onSubmit={onSubmit} className={style.loginSection}>
      <h1 className={style.title}>
        <b>Login</b>
      </h1>
      <form className={style.loginForm}>
        <input
          placeholder="Email"
          name="email"
          type="email"
          required
          autoComplete="off"
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          required
          autoComplete="off"
        />
        {errorMessage && (
          <span className={style.loginErrorMessage}>
            Credenciales incorrectas
          </span>
        )}
        <button>Enviar</button>
      </form>
      <br />
      <Link className={style.loginLink} href="/register">
        Crear una cuenta
      </Link>
    </section>
  );
}

export default Login;
