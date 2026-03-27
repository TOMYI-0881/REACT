import { createContext, useContext, useState, type PropsWithChildren } from "react";
import type { User } from "../data/user-mock.data";

// interface UserContexProvider {
//   children: React.ReactNode;
// }

type AuthStatus = "checking" | "authenticated"| "not-authenticated";

interface UserCotextProps {
  //state
  authStatus: AuthStatus;
  user: User | null;

  //methods
  login: (userId: number) => boolean;
  logout: () => void;
}

//creamos el canal del contexto
export const UserContext = createContext({} as UserCotextProps)
  
export const UseContextProvider = ({ children }: PropsWithChildren) => {
  
  const handleLogin = (id: number) => true

  const handleLogout = () => console.log("logout")

  return <UserContext value={{
    authStatus:"checking",
    user: null,
    login: handleLogin,
    logout: handleLogout
  }}>{children}</UserContext>;
};
