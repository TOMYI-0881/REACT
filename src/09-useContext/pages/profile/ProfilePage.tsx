import { UserContext } from "@/09-useContext/context/UseContext";
import { Button } from "@/components/ui/button";

import { useContext } from "react";

export const ProfilePage = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">Perfil del usuario</h1>
      <hr />

      <pre className="my-4d w-[80%] overflow-x-auto">
        {/* {opcion1} */}
        {/* {JSON.stringify({ user: user?.name }, null, 2)} */}

        {JSON.stringify(user, null, 2)}
      </pre>
      <Button variant="destructive" onClick={logout}>
        Salir
      </Button>
    </div>
  );
};
