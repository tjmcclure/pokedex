function PokemonDetails({ pokemon }) {
  return (
    <div className="detailContainer">
        <div className="detailImgContainer">
          <img className="detailImg" src={pokemon.img} alt=""/>
        </div>
        <div className="details">
            <div className="detailType"><div className="detailTypeLabel">Type:</div>
                {pokemon.type.map(type => (
                    <span key={type} className={type}>{type}</span>
                ))}
            </div>
            <div className="detailType"><div className="detailTypeLabel">Weaknesses:</div>
                {pokemon.weaknesses.map(type => (
                    <span key={type} className={type}>{type}</span>
                ))}
            </div>
            <div className="detailType"><div className="detailTypeLabel">Height:</div>
                <span className="detailInfo Normal">{pokemon.height}</span>
            </div>
            <div className="detailType"><div className="detailTypeLabel">Weight:</div>
                <span className="detailInfo Normal">{pokemon.weight}</span>
            </div>
        </div>
    </div>
  );
}

export default PokemonDetails;
