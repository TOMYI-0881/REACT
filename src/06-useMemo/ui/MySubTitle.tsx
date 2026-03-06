import { memo } from "react";

interface props {
  subTitle: string;
  //callAPI: (texto: string) => void;
  callAPI: () => void;
}

export const MySubTitle = memo(({ subTitle, callAPI }: props) => {
  console.log("Mysubtitle re-render");
  return (
    <>
      <h6 className="text-2xl font-bold">{subTitle}</h6>

      <button
        className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
        //onClick={() => callAPI(subTitle)}
        onClick={callAPI}
      >
        llamar funcion
      </button>
    </>
  );
});
