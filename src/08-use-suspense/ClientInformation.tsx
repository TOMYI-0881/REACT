import { use, type Usable } from "react";
import { type User } from "./api/get-user.action";

interface Props {
  //getUser espera una promesa
  getUser: Usable<User>;
}

export const ClientInformation = ({ getUser }: Props) => {
  // useEffect(() => {
  //   getUserAction({ id })
  //     .then(console.log)
  //     .catch(() => console.log("fallo"));
  // }, [id]);

  const userInformation = use(getUser);

  return (
    <div className="bg-gradient flex  flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">
        {userInformation.name} - #{userInformation.id}
      </h2>

      <p className="text-white text-2xl">{userInformation.location}</p>
      <p className="text-white text-xl">{userInformation.role}</p>
    </div>
  );
};
