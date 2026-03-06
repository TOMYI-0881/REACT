export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async ({ id }: { id: number }) => {
  console.log("inicio de la operacion");
  await new Promise((res, rej) => setTimeout(res, 2000));
  console.log("fin de la operacion");
  return {
    id: id,
    name: "Thomas",
    location: "Colombia-Barranquilla",
    role: "usuario desarrollador",
  };
};
