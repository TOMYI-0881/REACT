import { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubTitle } from "./ui/MySubTitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("hola");
  const [subTitle, setSubTitle] = useState("mundo");

  const callFunction = useCallback(() => {
    console.log("Llamado a la funcion", subTitle);
  }, [subTitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl fon-thin text-white">MemoApp</h1>
      <MyTitle title={title} />
      <MySubTitle subTitle={subTitle} callAPI={callFunction} />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle("hello, " + new Date().getTime())}
      >
        cambiar titulo
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setSubTitle("World")}
      >
        cambiar subTitulo
      </button>
    </div>
  );
};
