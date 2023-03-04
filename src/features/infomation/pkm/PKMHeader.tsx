import React from "react";
import { useAppSelector } from "../../../app/hooks";
import Pokemon from "../../../interface/model/Pokemon";
import { searchState } from "../../search/SearchSlice";

function PKMHeader(props: Pokemon) {
  const pokemon = props;
  const state = useAppSelector(searchState);
  return (
    <>
      <h1>
        <img
          className="img-fixed icon-item-img"
          src="https://img.pokemondb.net/sprites/items/poke-ball.png"
          alt="Poké Ball icon"
        />
        <p>{pokemon.name}</p>
      </h1>
      <nav className="entity-nav component">
        <a rel="prev" className="entity-nav-prev" href={`/pokedex/${pokemon.id - 1}`}>
          <img
            className="img-fixed icon-item-img"
            src="https://img.pokemondb.net/sprites/items/poke-ball.png"
            alt="Poké Ball icon"
          />{" "}
          #{pokemon.id - 1}
        </a>
        <a rel="next" className="entity-nav-next" href={`/pokedex/${pokemon.id + 1}`}>
          #{pokemon.id + 1}{" "}
          <img
            className="img-fixed icon-item-img"
            src="https://img.pokemondb.net/sprites/items/poke-ball.png"
            alt="Poké Ball icon"
          />
        </a>
      </nav>
    </>
  );
}

export default PKMHeader;
