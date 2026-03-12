import { useState } from "react";

interface UserContexProvider {
  children: React.ReactNode;
}

export const UseContextProvider = ({ children }: UserContexProvider) => {
  const [name, setName] = useState("thomas");
  return <div>{children}</div>;
};
