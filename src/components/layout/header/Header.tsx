import "./Header.css"
function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="title">
          Blog
        </a>
        <a href="/login" className="loginButton">
          Login
        </a>
      </div>
    </header>
  );
}

export default Header;
