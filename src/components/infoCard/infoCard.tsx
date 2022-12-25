import React from "react";
import pokeApi from "../../api/pokeAPI";
import "../../common/css/infoCard.css";
import { GetPokemonTypeLogo } from "../../common/function";
import Pokemon from "../../interface/model/Pokemon";
type InfoCardProps = {
  Pokemon: Pokemon;
};
function InfoCard(props: InfoCardProps) {
  var pokemon = props.Pokemon;
  const pokedexLink = `/pokedex/${pokemon.name}`
  const pokemonImg = `https://img.pokemondb.net/sprites/bank/normal/${pokemon.name}.png`
  return (
    <div className="infocard ">
      <span className="infocard-lg-img">
        <a href={pokedexLink}>
          <img
            className="img-sprite img-sprite-v15"
            src={pokemonImg}
            alt={pokemon.name}
            loading="lazy"
          />
        </a>
      </span>
      <span className="infocard-lg-data text-muted">
        <small>#{pokemon.id}</small> <br></br>
        <a className="ent-name" href={pokedexLink}>
          {pokemon.name}
        </a>
        <br></br>
        <small>
          {pokemon.types != null && (
            <>
              {pokemon.types.map((t) => (
                <a href={`/pokedex/${t.type.name}.html`}>
                  <img src={GetPokemonTypeLogo(t.type.name)} />
                </a>
              ))}
            </>
          )}
        </small>
      </span>
    </div>
  );
}

export default InfoCard;
