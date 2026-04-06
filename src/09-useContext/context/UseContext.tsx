import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { users, type User } from "../data/user-mock.data";

// interface UserContexProvider {
//   children: React.ReactNode;
// }

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
  //state
  authStatus: AuthStatus;
  user: User | null;
  isAuthenticated: boolean;

  //methods
  login: (userId: number) => boolean;
  logout: () => void;
}

//creamos el canal del contexto
export const UserContext = createContext({} as UserContextProps);

export const UseContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");

  console.log({ authStatus });

  const handleLogin = (id: number) => {
    const user = users.find((i) => i.id === id);

    if (!user) {
      setAuthStatus("not-authenticated");
      setUser(null);
      return false;
    }

    setAuthStatus("authenticated");
    setUser(user);
    localStorage.setItem("userId", id.toString());
    return true;
  };

  const handleLogout = () => {
    setAuthStatus("not-authenticated");
    localStorage.removeItem("userId");
    setUser(null);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      const stateUser = localStorage.getItem("userId");
      if (stateUser) {
        handleLogin(+stateUser);
        return;
      }

      handleLogout();
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        isAuthenticated: authStatus === "authenticated" ? true : false,

        user: user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
