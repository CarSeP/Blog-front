import { useEffect } from "react";
import "./Login.css";

function LoginPage() {
  const handleFetch = async () => {
    const response = await fetch("/api/posts");
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main className="loginFormContainer">
      <form action="" className="loginForm">
        <h1>Login</h1>
        <div>
          <label>
            <span>Correo electrónico</span>
            <input type="email" />
          </label>
        </div>
        <div>
          <label>
            <span>Contraseña</span>
            <input type="password" />
          </label>
        </div>
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
