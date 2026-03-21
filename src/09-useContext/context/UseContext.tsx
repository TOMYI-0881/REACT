import { useState } from "react";

interface UserContexProvider {
  children: React.ReactNode;
}

export const UseContextProvider = ({ children }: UserContexProvider) => {
  return <>{children}</>;
};
