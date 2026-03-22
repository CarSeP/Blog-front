import { useState } from "react";
import { useLocation } from "wouter";
import { loginSchema } from "@/schemes/login.schema";
import { useAuth } from "@/layouts/AuthProvider";
import "./Login.css";

function LoginPage() {
  const [_location, navigate] = useLocation();
  const { setToken } = useAuth();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    login: "",
  });

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = e.target;

    const formData = {
      email: email.value,
      password: password.value,
    };

    const isValid = loginSchema.safeParse(formData);

    if (!isValid.success) {
      const fieldErrors = isValid.error.flatten().fieldErrors;

      const newErrors = {
        email: fieldErrors.email?.[0] || "",
        password: fieldErrors.password?.[0] || "",
        login: "",
      };

      setErrors(newErrors);
      return;
    }

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!data.success) {
      setErrors({ ...errors, login: data.messages[0] });
    }

    if (data.success) {
      setToken(data.token);
      navigate("/");
    }
  };

  return (
    <main className="loginFormContainer">
      <form onSubmit={onSubmit} className="loginForm">
        <h1>Login</h1>
        <div>
          <label>
            <span>Correo electrónico</span>
            <input type="email" name="email" />
            <span className="error">{errors.email}</span>
          </label>
        </div>
        <div>
          <label>
            <span>Contraseña</span>
            <input type="password" name="password" />
            <span className="error">{errors.password}</span>
          </label>
        </div>
        <span className="error">{errors.login}</span>
        <button>Submit</button>
        <div className="loginFormLinks">
          <a href="/register">¿No tienes una cuenta? Regístrate aquí.</a>
          <a href="/">Volver al inicio</a>
        </div>
      </form>
    </main>
  );
}

export default LoginPage;
