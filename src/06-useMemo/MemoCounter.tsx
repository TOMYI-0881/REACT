import { useMemo, useState } from "react";

const useCounter = (numero: number) => {
  const [count, setCount] = useState(numero);

  const moreCount = () => {
    setCount(count + 1);
  };

  return {
    moreCount,
    count,
  };
};

const heavyStuff = (number: number) => {
  console.time("heavy_process");
  for (let index = 0; index < number; index++) {
    console.log("calculando...");
  }
  console.timeEnd("heavy_process");

  return `${number} interaciones realizadas`;
};

export const MemoCounter = () => {
  const { count, moreCount } = useCounter(10_000);
  const { count: count2, moreCount: moreCount2 } = useCounter(10_000);

  const calculedHeavyStuff = useMemo(() => heavyStuff(count), [count]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl fond-bold">
        Memo - useMemo {calculedHeavyStuff}
      </h1>
      <hr />

      <h4>counter: {count}</h4>
      <h4>counter: {count2}</h4>

      <button
        className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
        onClick={moreCount}
      >
        +1
      </button>

      <button
        className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
        onClick={moreCount2}
      >
        2: +1
      </button>
    </div>
  );
};
