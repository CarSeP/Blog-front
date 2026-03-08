import "./Login.css";

function LoginPage() {
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
