import React, {useState, useEffect} from 'react'
import PokemonList from "./PokemonList"

function Pokedex() {
    const [pokemonList, setPokemonList] = useState([])
    const [types, setTypes] = useState([])
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        .then(res => res.json())
        .then(data => {
            //Set the pokemonList prop
            setPokemonList(data.pokemon)

            //Get all available types from types and weaknesses
            let tempTypes = []
            data.pokemon.forEach((pokemon, i) => {
                pokemon.type.forEach((type, i) => {
                    if(!tempTypes.includes(type)) {
                        tempTypes.push(type)
                    }
                });
                pokemon.weaknesses.forEach((type, i) => {
                    if(!tempTypes.includes(type)) {
                        tempTypes.push(type)
                    }
                });
            });
            setTypes(tempTypes.sort())
        })
        .catch(err => { console.log(err) })
    }, [])

    return (
        <div>
            <PokemonList pokemonList={pokemonList} types={types}/>
        </div>
    );
}

export default Pokedex;
