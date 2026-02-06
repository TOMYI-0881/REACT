import { useState } from "react"

export const usePokemonCount = () => {

    const [count, setCount] = useState(1);

    const addCounter = () => {
        setCount(count + 1);
    }

    const subtractCounter = () => {
        if (count === 1) return
        setCount(count - 1);
    }

    return {
        //props
        count,

        //functions
        addCounter,
        subtractCounter,
    }

}
