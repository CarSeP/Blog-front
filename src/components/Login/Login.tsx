"use client";
import { useState } from "react";
import style from "./Login.module.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const body = {
      email: e.target.email.value,
      password: "",
    };

    const passwordInput = e.target.password;

    if (passwordInput) {
      body.password = passwordInput.value;
    }

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

    const data = await response.json();

    if (response.status === 200 && !data.register) {
      setShowPassword(true);
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
        {showPassword && (
          <input
            placeholder="Password"
            name="password"
            type="password"
            required
          />
        )}
        <button>Enviar</button>
      </form>
    </section>
  );
}

export default Login;
