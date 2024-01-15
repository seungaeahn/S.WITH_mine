import { createContext, useContext, useState } from "react";

//1: Context 만들기
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//2: 다른 컴포넌트들과 Context 공유하기
export default function AuthProvider({ children }) {
  //3: Put some state in the context

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(false);

  function login(username, password) {
    if (username === "Rachel" && password === "tmddo") {
      setAuthenticated(true);
      setUsername(username);
      return true;
    } else {
      setAuthenticated(false);
      setUsername(null);
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}
