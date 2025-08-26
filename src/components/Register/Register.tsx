"use client";
import Link from "next/link";
import style from "./Register.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();
  const [errors, setErrors] = useState({
    emailInvalid: false,
    emailExist: false,
    username: false,
    password: false,
  });
  const onSubmit = async (e: any) => {
    e.preventDefault();

    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password != confirmPassword) {
      setErrors({
        emailInvalid: false,
        emailExist: false,
        username: false,
        password: true,
      });
    }

    const email = e.target.email.value;
    const name = e.target.name.value;
    const username = e.target.username.value;
    const description = e.target.description.value;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          username,
          description,
          password,
        }),
      }
    );

    const data = await response.json();

    if (data.errorType == "emailInvalid") {
      setErrors({
        emailInvalid: true,
        emailExist: false,
        username: false,
        password: false,
      });

      return;
    }

    if (data.errorType == "emailExist") {
      setErrors({
        emailInvalid: false,
        emailExist: true,
        username: false,
        password: false,
      });
      return;
    }

    if (data.errorType == "username") {
      setErrors({
        emailInvalid: false,
        emailExist: false,
        username: true,
        password: false,
      });
      return;
    }

    if(response.status == 200) {
      router.push("/login")
    }
  };
  return (
    <section onSubmit={onSubmit} className={style.registerSection}>
      <h1 className={style.title}>
        <b>Crear una cuenta</b>
      </h1>
      <form className={style.registerForm}>
        <input
          placeholder="Correo electronico"
          name="email"
          type="email"
          required
          autoComplete="off"
        />
        {errors.emailExist && (
          <span className={style.registerErrorMessage}>
            Este correo electronico ya está registrado.
          </span>
        )}
        {errors.emailInvalid && (
          <span className={style.registerErrorMessage}>
            El correo electronico no es valido.
          </span>
        )}
        <input
          placeholder="Nombre"
          name="name"
          type="text"
          required
          autoComplete="off"
        />
        <input
          placeholder="Nombre de usuario"
          name="username"
          type="text"
          required
          autoComplete="off"
        />
        {errors.username && (
          <span className={style.registerErrorMessage}>
            Este nombre de usuario no está disponible.
          </span>
        )}
        <textarea placeholder="Descripcion" name="description" />
        <input
          placeholder="Contraseña"
          name="password"
          type="password"
          required
          autoComplete="off"
        />
        <input
          placeholder="Confirmar contraseña"
          name="confirmPassword"
          type="password"
          required
          autoComplete="off"
        />
        {errors.password && (
          <span className={style.registerErrorMessage}>
            Las contraseñas deben coincidir.
          </span>
        )}
        <button>Enviar</button>
      </form>
      <br />
      <Link className={style.registerLink} href="/login">
        Iniciar sesión
      </Link>
    </section>
  );
}

export default Register;
