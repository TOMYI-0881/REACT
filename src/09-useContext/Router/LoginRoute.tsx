import { use, type JSX } from "react";
import { UserContext } from "../context/UseContext";
import { Navigate } from "react-router";

interface Props {
  element: JSX.Element;
}

export const LoginRoute = ({ element }: Props) => {
  const { authStatus } = use(UserContext);

  if (authStatus === "authenticated") {
    return <Navigate to="/profile" replace />;
  }

  if (authStatus === "checking") {
    return <div>Loading information</div>;
  }

  return element;
};
