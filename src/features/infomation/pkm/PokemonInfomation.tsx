import React, { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { GetPaddedPokemonId } from "../../../common/function";
import { infomationActions, infomationState } from "../InfomationSlice";
import GeneralInfomation from "./GeneralInfomation";
import PKMHeader from "./PKMHeader";
import PokedexEntries from "./PokedexEntries";
import './PokemonInfomation.css'
import QuickSummary from "./QuickSummary";

function PokemonInfomation() {
  const params = useParams();
  const navigate = useNavigate();
  const pokemonId = params.id;
  const state = useAppSelector(infomationState);
  const dispatch = useAppDispatch();

  const pokemon = state.pokemon;
  const species = state.species;
  const evolutionInfo = state.evolutionInfo;

  const modelQuickSummary = {
    Pokemon:pokemon,
    Species:species
  }
  const modelGeneralInfo = {
    Pokemon:pokemon,
    Species:species,
    EvolutionInfo:evolutionInfo
  }
  useEffect(() => {
    dispatch(infomationActions.getPokemonInfo(pokemonId!));
  }, []);

  if (state.status == "failed") {
    navigate("/error");
  }
  


  return (
    <Fragment>
      {pokemon && (
        <div className="container-fluid">
          <PKMHeader {...pokemon}></PKMHeader>
          <hr></hr>
          <QuickSummary {...modelQuickSummary}></QuickSummary>
          <hr></hr>
          <GeneralInfomation {...modelGeneralInfo}></GeneralInfomation>
        </div>
      )}
    </Fragment>
  );
}

export default PokemonInfomation;
