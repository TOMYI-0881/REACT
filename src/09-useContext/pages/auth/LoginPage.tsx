import { UserContext } from "@/09-useContext/context/UseContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast, Toaster } from "sonner";

export const LoginPage = () => {
  const [userId, setUserId] = useState("");
  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = login(+userId);

    if (!result) {
      toast.error("no se encontro");
      return;
    }

    navigate("/profile");
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Toaster />
      <h1 className="text-4xl font-bold">Inicio de sesion</h1>
      <hr />

      <form className="flex flex-col gap-2 my-10" onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="ID del usuario"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />

        <Button type="submit" variant="secondary">
          Login
        </Button>
      </form>

      <Link to="/">
        <Button variant="default">Volver a la pagina principal</Button>
      </Link>
    </div>
  );
};
