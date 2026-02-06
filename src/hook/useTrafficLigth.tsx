import { useState, useEffect } from "react";

const colors = {
    red: `bg-red-500 animate-pulse`,
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
}

//type color = "red" | "yellow" | "green";
type color = keyof typeof colors;


export const useTrafficLigth = (countDefault: number) => {

    const [ligth, setLigth] = useState<color>("red");
    const [count, setCount] = useState(countDefault);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000)

        console.log(intervalId)
        return () => {
            clearInterval(intervalId)
            console.log('funcion limpieza')
        }

    }, [count, ligth]);

    useEffect(() => {
        if (count > 0) return
        setCount(5);

        if (ligth === "red") {
            setLigth("green");
            return;
        }

        if (ligth === "yellow") {
            setLigth("red");
            return;
        }

        if (ligth === "green") {
            setCount(3);
            setLigth("yellow");
            return;
        }

    }, [count, ligth])

    return {
        //props
        ligth,
        count,
        colors,

        //coputed
        redLigth: ligth === 'red' ? colors[ligth] : 'bg-gray-500',
        redYellow: ligth === 'yellow' ? colors[ligth] : 'bg-gray-500',
        redGreen: ligth === 'green' ? colors[ligth] : 'bg-gray-500',

        percentage: (count / 5) * 100,

        //redLigthCompleted: `w-32 h-32 ${ligth === 'red' ? colors[ligth] : 'bg-gray-500'} rounded-full`
    }

}
