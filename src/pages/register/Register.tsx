import { useLocation } from "wouter";
import "./Register.css";
import { useState } from "react";
import { registerSchema } from "@/schemes/register.schema";

function RegisterPage() {
  const [_location, navigate] = useLocation();
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, fullname, username, password } = e.target;

    const formData = {
      email: email.value,
      name: fullname.value,
      username: username.value,
      password: password.value,
    };

    const isValid = registerSchema.safeParse(formData);

    if (!isValid.success) {
      const fieldErrors = isValid.error.flatten().fieldErrors;

      const newErrors = {
        email: fieldErrors.email?.[0] || "",
        name: fieldErrors.name?.[0] || "",
        username: fieldErrors.username?.[0] || "",
        password: fieldErrors.password?.[0] || "",
      };

      setErrors(newErrors);
      return;
    }

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      navigate("/login");
    }
  };

  return (
    <main className="registerFormContainer">
      <form onSubmit={onSubmit} className="registerForm">
        <h1>Register</h1>
        <div>
          <label>
            <span>Correo electrónico</span>
            <input type="email" name="email" />
            <span className="error">{errors.email}</span>
          </label>
        </div>
        <div>
          <label>
            <span>Nombre completo</span>
            <input type="text" name="fullname" />
            <span className="error">{errors.name}</span>
          </label>
        </div>
        <div>
          <label>
            <span>Nombre de usuario</span>
            <input type="text" name="username" />
            <span className="error">{errors.username}</span>
          </label>
        </div>
        <div>
          <label>
            <span>Contraseña</span>
            <input type="password" name="password" />
            <span className="error">{errors.password}</span>
          </label>
        </div>
        <button>Submit</button>
        <div className="registerFormLinks">
          <a href="/login">¿Ya tienes una cuenta? Inicia sesión aquí.</a>
          <a href="/">Volver al inicio</a>
        </div>
      </form>
    </main>
  );
}

export default RegisterPage;
