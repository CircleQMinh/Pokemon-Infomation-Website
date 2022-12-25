import React, { Fragment } from "react";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import InfoCardList from "../../components/infoCardList/infoCardList";
import { coreState, coreActions } from "./coreSlice";

function Core() {
  const state = useAppSelector(coreState);
  const dispatch = useAppDispatch();
  

  return (
    <Fragment>
      
      <div>MainPage</div>
      <button
        onClick={() => {
          dispatch(coreActions.getPokemonList(0));
          state.pokemons.forEach(element => {
            console.log(element)
          });
        }}
      >
        Test API
      </button>

      {
        state.status == 'loading'
        ?<img src="https://media.giphy.com/media/Qrca6tBIdqXYXhnB4v/giphy.gif"></img>
        :<InfoCardList Pokemons={state.pokemons}></InfoCardList>
      }

    </Fragment>
  );
}

export default Core;
