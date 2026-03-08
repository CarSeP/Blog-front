import "./Header.css";
import { Link, useLocation } from "wouter";

function Header() {
  const [location] = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="title">
          Blog
        </Link>
        {location !== "/login" && (
          <Link href="/login" className="loginButton">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
