function PokemonListItem({ data, setSelectedPokemon }) {
    //Callback to set the selected pokemon
    const onSetPokemon = () => {
        setSelectedPokemon(data)
    }

  return (
    <div className="PokemonListItem" onClick={onSetPokemon}>
        <p className="number">#{data.num}</p>
        <img className="pokemonImg" src={data.img} alt=""/>
        <h2>{data.name}</h2>
        <div className="pokemonTypes">{data.type.map(type => (
            <span key={type} className={type}>{type}</span>
        ))}
        </div>
        <div className="pokemonWeaknesses"><div className="weaknessLabel">Weaknesses:</div>
            {data.weaknesses.map(type => (
                <span key={type} className={type}>{type}</span>
            ))}
        </div>
    </div>
  );
}

export default PokemonListItem;
