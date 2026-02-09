import { useState } from "react";

const colors = {
  red: `bg-red-500 animate-pulse`,
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

//type color = "red" | "yellow" | "green";
type color = keyof typeof colors;

export const TrafficLight = () => {
  const [ligth, setLigth] = useState<color>("red");

  const handleColorChange = (color: color) => {
    setLigth((prev) => {
      console.log({ prev });
      return color;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <div
          className={`w-32 h-32 ${
            ligth === "red" ? colors[ligth] : "bg-gray-500"
          } rounded-full`}
        ></div>
        <div
          className={`w-32 h-32 ${
            ligth === "yellow" ? colors[ligth] : "bg-gray-500"
          } rounded-full`}
        ></div>
        <div
          className={`w-32 h-32 ${
            ligth === "green" ? colors[ligth] : "bg-gray-500"
          } rounded-full`}
        ></div>

        {/* Botón para cambiar el estado de la luz */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              handleColorChange("red");
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Rojo
          </button>
          <button
            onClick={() => {
              setLigth("yellow");
            }}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Amarillo
          </button>
          <button
            onClick={() => {
              setLigth("green");
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};
