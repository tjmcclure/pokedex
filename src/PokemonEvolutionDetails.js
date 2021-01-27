function PokemonEvolutionDetails({ pokemonEvolution, pokemonList, setSelectedPokemon, evolutionType }) {
    //Get pokemon object from evolution number
    const getEvolution = (evolution) => {
        return pokemonList.filter(pokemon => pokemon.num === evolution.num)[0]
    }

    //Callback to set the new selected pokemon
    const goToEvolution = (evolution) => {
        setSelectedPokemon(pokemonList.filter(pokemon => pokemon.num === evolution.num)[0])
    }

  return (
    <div className="evolution">
        <div className="detailLabel">{evolutionType}:</div>
        {pokemonEvolution ? pokemonEvolution.map(evolution => (
            <div key={evolution.num} className="detailEvolution" onClick={() => goToEvolution(evolution)}>
                <img className="detailEvolutionImg" src={getEvolution(evolution).img} alt=""/>
                <div className="detailEvolutionName">{evolution.name}</div>
            </div>
            ))
            :
            <div className="detailEvolution">None</div>
        }
    </div>
  );
}

export default PokemonEvolutionDetails;
