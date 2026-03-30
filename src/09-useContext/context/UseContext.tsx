import { createContext, useState, type PropsWithChildren } from "react";
import { users, type User } from "../data/user-mock.data";

// interface UserContexProvider {
//   children: React.ReactNode;
// }

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
  //state
  authStatus: AuthStatus;
  user: User | null;

  //methods
  login: (userId: number) => boolean;
  logout: () => void;
}

//creamos el canal del contexto
export const UserContext = createContext({} as UserContextProps);

export const UseContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");

  const handleLogin = (id: number) => {
    const user = users.find((i) => i.id === id);

    if (!user) {
      setAuthStatus("not-authenticated");
      setUser(null);
      return false;
    }

    setAuthStatus("authenticated");
    setUser(user);
    return true;
  };

  const handleLogout = () => {
    setAuthStatus("checking");
    setUser(null);
  };

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
