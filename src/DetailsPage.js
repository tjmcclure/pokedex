import PokemonDetails from './PokemonDetails'
import PokemonEvolutionDetails from './PokemonEvolutionDetails'

function DetailsPage({ pokemon, pokemonList, setSelectedPokemon }) {
    //Function to go from the details page back to the list view
    const goBack = () => {
        setSelectedPokemon(undefined)
    }

  return (
    <div className="PokemonDetail">
        <div className="goBack" onClick={goBack}>Back</div>
        <h1 className="detailName">{pokemon.name} <span className="detailNumber">#{pokemon.num}</span></h1>

        <PokemonDetails pokemon={pokemon} />

        <div className="evolutionContainer">
            <PokemonEvolutionDetails pokemonEvolution={pokemon.prev_evolution} pokemonList={pokemonList}
                                     setSelectedPokemon={setSelectedPokemon}   evolutionType="Previous Evolutions"/>

            <PokemonEvolutionDetails pokemonEvolution={pokemon.next_evolution} pokemonList={pokemonList}
                                     setSelectedPokemon={setSelectedPokemon}   evolutionType="Next Evolutions"/>
        </div>

    </div>
  );
}

export default DetailsPage;
