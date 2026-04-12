import { useAuth } from "@/layouts/AuthProvider";
import { Link, useLocation } from "wouter";
import "./Header.css";

function Header() {
  const [location] = useLocation();
  const { token } = useAuth();
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="title">
          Blog
        </Link>
        {token && (
          <a href="/api/auth/logout" className="loginButton">
            Logout
          </a>
        )}
        {location !== "/login" && !token && (
          <Link href="/login" className="loginButton">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
