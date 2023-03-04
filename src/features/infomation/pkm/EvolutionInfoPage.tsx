import React, { Fragment, useEffect, useState } from "react";
import {
  GetIdFromUrl,
  GetPaddedPokemonId,
  GetPKMImageURL,
  GetPokemonSprites,
  groupByKey,
} from "../../../common/function";
import EntriesButton from "../../../components/infomation/EntriesButton";
import { EvolutionInfo } from "../../../interface/model/EvolutionChain";
import Pokemon from "../../../interface/model/Pokemon";
import Species from "../../../interface/model/Species";
import EvolutionInfoPageItem from "./EvolutionInfoPageItem";

function EvolutionInfoPage(props: {
  Pokemon: Pokemon | undefined;
  Species: Species | undefined;
  EvolutionInfo: EvolutionInfo | undefined;
}) {
  const pokemon = props.Pokemon;
  const species = props.Species;
  const evolutionInfo = props.EvolutionInfo;
  return (
    <Fragment>
      {pokemon && species && evolutionInfo ? (
        <div className="container">
          {evolutionInfo.chain.evolves_to.map((e) => (
            <div
              className="row bg-white d-flex justify-content-center align-items-center mt-2 pt-2"
              key={e.species.name}
            >
              <div className="col-2">
                <div className="card d-flex justify-content-center align-items-center border-none">
                  <img
                    src={GetPKMImageURL(evolutionInfo?.chain.species.url!)}
                    className="card-img-top width100px"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-capitalize text-center">
                      <a href={`/pokedex/${evolutionInfo?.chain.species.name.toLowerCase()}`}>{evolutionInfo?.chain.species.name}</a> 
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-10">
                <div className="container d-flex justify-content-center align-items-center text-center">
                  <EvolutionInfoPageItem
                    {...e}
                    key={e.species.name}
                  ></EvolutionInfoPageItem>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
}

export default EvolutionInfoPage;
