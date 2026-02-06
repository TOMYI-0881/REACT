import { useEffect, useState } from "react";

interface Pokemon {
    id: number,
    name: string,
    imageUrl: string
}

interface props {
    id: number;
}

let valor1;

export const usePokemonName = ({ id }: props) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const getpokemonById = async (id: number) => {

        try {
            setIsLoading(true);
            valor1 = 1;
            console.log(valor1)


            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();

            setPokemon({
                id: id,
                name: data.name,
                imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            })

            setIsLoading(false);
            valor1 = 2;
            console.log(valor1)
        } catch (error) {
            console.log("ERROR: ", error);
            setPokemon(null);
        }
    }

    useEffect(() => {
        getpokemonById(id);
    }, [id])


    console.log("hola")

    return {
        //properties
        pokemon,
        isLoading,

        formattedId: id.toString().padStart(3, "0"),
    }
}
