import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface Props {
  children: React.ReactNode;
}

interface UserInfo {
  id: number;
  slug: string;
  email: string;
}

interface AuthContextProps {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  user: UserInfo | null;
}

const AuthContext = createContext<AuthContextProps>({
  token: "",
  setToken: () => {},
  user: null,
});

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: Props) {
  const [token, setToken] = useState(() => Cookies.get("token") || "");
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (token) {
      Cookies.set("token", token, { expires: 2592000, path: "" });
      try {
        const payload = token.split(".")[1];
        const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
          window
            .atob(base64)
            .split("")
            .map(function (c) {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join(""),
        );

        const decoded = JSON.parse(jsonPayload);
        setUser({
          id: decoded.id,
          slug: decoded.slug,
          email: decoded.email,
        });
      } catch (e) {
        console.error("Error decoding token", e);
        setUser(null);
      }
    } else {
      Cookies.remove("token");
      setUser(null);
    }
  }, [token]);

  return (
    <AuthContext value={{ token, setToken, user }}>{children}</AuthContext>
  );
}

export default AuthProvider;
