import React, { Fragment, useEffect, useState } from "react";
import {
  GetIdFromUrl,
  GetPaddedPokemonId,
  GetPKMImageURL,
  GetPokemonSprites,
  groupByKey,
} from "../../../common/function";
import EntriesButton from "../../../components/infomation/EntriesButton";
import {
  EvolutionInfo,
  EvolvesTo,
} from "../../../interface/model/EvolutionChain";
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
  const chain = evolutionInfo?.chain;
  var secondStateEvo = chain?.evolves_to;

  var thirdStateEvo: EvolvesTo[] = [];

  secondStateEvo?.forEach((sse) => {
    if (sse.evolves_to != null) {
      sse.evolves_to.forEach((evt) => {
        thirdStateEvo.push(evt);
      });
    }
  });

  return (
    <Fragment>
      {pokemon && species && evolutionInfo ? (
        <div className="container">
          <div className="row bg-white d-flex justify-content-center align-items-center mt-2 pt-2">
            <div className="col-2">
              <div className="card d-flex justify-content-center align-items-center border-none">
                <img
                  src={GetPKMImageURL(evolutionInfo?.chain.species.url!)}
                  className="card-img-top width100px"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-capitalize text-center">
                    <a
                      href={`/pokedex/${evolutionInfo?.chain.species.name.toLowerCase()}`}
                    >
                      {evolutionInfo?.chain.species.name}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            {secondStateEvo && secondStateEvo?.length > 0 && (
              <div className="col-5">
                <div className="container d-flex justify-content-center flex-column align-items-center text-center">
                  {secondStateEvo?.map((e, i) => (
                    <Fragment key={e.species.name + i}>
                      {i > 0 && <hr className="seperate_hr"></hr>}
                      <EvolutionInfoPageItem
                        key={e.species.name}
                        {...e}
                      ></EvolutionInfoPageItem>
                    </Fragment>
                  ))}
                </div>
              </div>
            )}
            {thirdStateEvo && thirdStateEvo?.length > 0 && (
              <div className="col-5">
                <div className="container d-flex justify-content-center flex-column align-items-center text-center">
                  {thirdStateEvo?.map((e, i) => (
                    <Fragment key={e.species.name + i}>
                      {i > 0 && <hr className="seperate_hr"></hr>}
                      <EvolutionInfoPageItem
                        key={e.species.name}
                        {...e}
                      ></EvolutionInfoPageItem>
                    </Fragment>
                  ))}
                </div>
              </div>
            )}
            {secondStateEvo?.length==0 && thirdStateEvo.length==0 && (
              <div className="col-5">
                <div className="container d-flex justify-content-center flex-column align-items-center text-center">
                    <p>This Pokémon does not evolve!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
}

function RemoveEmptyCol() {
  const elements: Element[] = Array.from(
    document.getElementsByClassName("col-5")
  );
  elements.forEach((el: Element) => {
    if (el.clientHeight == 0) {
      el.remove();
    }
  });
}
export default EvolutionInfoPage;
