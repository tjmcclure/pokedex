import React, {useState} from 'react'
import PokemonListItem from "./PokemonListItem"
import SearchName from './SearchName'
import TypeFilter from './TypeFilter'
import WeaknessFilter from './WeaknessFilter'
import DetailsPage from './DetailsPage'

function PokemonList({ pokemonList, types }) {
    const [nameFilter, setNameFilter] = useState([])
    const [typeFilter, setTypeFilter] = useState([])
    const [weaknessFilter, setWeaknessFilter] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState()

  return (
    <div className="PokemonList">
        <div className="FilterArea col-3">
            <SearchName nameFilter={nameFilter} setNameFilter={setNameFilter}/>
            <br/>
            <TypeFilter typeFilter={typeFilter} setTypeFilter={setTypeFilter} types={types}/>
            <WeaknessFilter weaknessFilter={weaknessFilter} setWeaknessFilter={setWeaknessFilter} types={types}/>
        </div>

        <div className="ListArea">
            {pokemonList
                .filter(pokemon => pokemon.name.toLowerCase().includes(nameFilter))
                .filter(pokemon => pokemon.type.filter(type => typeFilter.includes(type)).length === typeFilter.length)
                .filter(pokemon => pokemon.weaknesses.filter(weakness => weaknessFilter.includes(weakness)).length === weaknessFilter.length)
                .map(pokemon => (<PokemonListItem key={pokemon.id} data={pokemon} setSelectedPokemon={setSelectedPokemon}/>))
            }
        </div>

        {selectedPokemon !== undefined &&
            <div className="DetailArea">
                <DetailsPage pokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} pokemonList={pokemonList}/>
            </div>
        }
    </div>
  );
}

export default PokemonList;
