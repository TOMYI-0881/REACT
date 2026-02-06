import { usePokemonCount } from "./hook/usePokemonCount";
import { usePokemonName } from "./hook/usePokemonName";

export const PokemonPageApp = () => {

    const { count, addCounter, subtractCounter } = usePokemonCount();
    const { pokemon, isLoading, formattedId } = usePokemonName({ id: count });

    if (isLoading) {
        return (

            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">Pokémon</h1>
                <h3 className="text-xl font-bold text-white">Cargando...</h3>
            </div>
        );
    }

    if (!pokemon) {
        return (
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">Pokémon</h1>
                <h3 className="text-xl font-bold text-white">Pokemon no encontrado</h3>
            </div>
        );
    }



    return (
        <div className="bg-gradient flex flex-col items-center">
            <h1 className="text-2xl font-thin text-white">Pokémon</h1>
            <h3 className="text-xl font-bold text-white">#{formattedId} {pokemon?.name}</h3>
            <img
                //src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count}.png`}
                src={pokemon.imageUrl}
                alt={pokemon.name}
            />

            <div className="flex gap-2">

                <button
                    className="Pokemon"
                    onClick={subtractCounter}>
                    Anterior
                </button>

                <button
                    className="Pokemon"
                    onClick={
                        addCounter}>
                    Siguiente
                </button>

            </div>
        </div>
    );
};