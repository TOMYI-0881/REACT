import { RouterProvider } from "react-router";
import { appRouter } from "./Router/app.router";
import { UseContextProvider } from "./context/UseContext";

export const ProfessionalApp = () => {
  return (
    <UseContextProvider>
      <div className="bg-gradient">
        <RouterProvider router={appRouter} />
      </div>
    </UseContextProvider>
  );
};
