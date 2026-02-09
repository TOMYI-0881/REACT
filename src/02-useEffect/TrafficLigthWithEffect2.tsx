import { useEffect, useReducer } from "react";

type Color = "red" | "yellow" | "green";

type State = {
  ligth: Color;
  count: number;
};

const initialState: State = {
  ligth: "red",
  count: 5,
};

function reducer(state: State): State {
  if (state.count > 0) {
    return { ...state, count: state.count - 1 };
  }

  if (state.ligth === "red") {
    return { ligth: "green", count: 5 };
  }

  if (state.ligth === "green") {
    return { ligth: "yellow", count: 3 };
  }

  return { ligth: "red", count: 5 };
}

export const TrafficLigthWithEffect2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const id = setInterval(dispatch, 1000);
    return () => clearInterval(id);
  }, []);

  const { ligth, count } = state;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-3xl font-thin">SEMAFORO</h1>
        <h2 className="text-white text-xl">contador: {count}</h2>

        {(["red", "yellow", "green"] as Color[]).map((color) => (
          <div
            key={color}
            className={`w-32 h-32 rounded-full ${
              ligth === color ? `bg-${color}-500 animate-pulse` : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
