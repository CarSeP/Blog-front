import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface Props {
  children: React.ReactNode;
}

interface AuthContextProps {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextProps>({
  token: "",
  setToken: () => {},
});

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: Props) {
  const [token, setToken] = useState(() => Cookies.get("token") || "");

  useEffect(() => {
    if (token) {
      Cookies.set("token", token, { expires: 2592000, path: "" });
    } else {
      Cookies.remove("token");
    }
  }, [token]);

  return <AuthContext value={{ token, setToken }}>{children}</AuthContext>;
}

export default AuthProvider;
