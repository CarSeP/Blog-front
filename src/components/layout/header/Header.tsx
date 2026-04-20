import { useAuth } from "@/layouts/AuthProvider";
import { Link, useLocation } from "wouter";
import "./Header.css";

function Header() {
  const [location] = useLocation();
  const { token, user } = useAuth();
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="title">
          Blog
        </Link>
        <div className="nav-links">
          {token && user && (
            <Link
              href={`/author/${user.id}/${user.slug}`}
              className="profileButton"
            >
              Profile
            </Link>
          )}
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
      </div>
    </header>
  );
}

export default Header;
