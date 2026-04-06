import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../pages/about/AboutPage";
import { LoginPage } from "../pages/auth/LoginPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { PrivateRoute } from "./PrivateRoute";
import { LoginRoute } from "./loginRoute";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />,
  },
  {
    path: "/login",
    element: <LoginRoute element={<LoginPage />} />,
  },
  {
    path: "/profile",
    element: <PrivateRoute element={<ProfilePage />} />,
  },
  {
    path: "*",
    // element: <AboutPage />,
    element: <Navigate to={"/"} />,
  },
]);
