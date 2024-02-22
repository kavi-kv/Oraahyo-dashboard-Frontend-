import { useState, createContext, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}`);
    if (parts.length == 2) return parts.pop().split(";").shift();
  };

  const setCookie = (name, value, days) => {
    const expire = new Date(Date.now() + days * (864e5).toString).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; expires=${expire}; path=/`;
  };

  const [token, setToken] = useState(Cookies.get("token"));

  const signIn = async (email, password) => {
    const response = await axios.post("http://localhost:5005/api/signinadmin", { email, password });
    console.log(`Signin Response: ${response.data}`)
    setToken(response.data.token);
    setUser(response.data.user);
    setIsAuthenticated(true);
    setCookie("token", response.data.token, { expires: 7 });
    console.log(`Token Is ${token}`)
  };

  const isUserLoggedIn = () => {
    if(token != null){
        return user;
    }
    return null;
  }

  const signOut = async () => {
    setUser(null);
    setToken(null);
    Cookies.remove("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut, isAuthenticated, setIsAuthenticated,isUserLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
