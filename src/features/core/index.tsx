import React, { Fragment } from "react";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
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
        }}
      >
        Test API
      </button>

      {
        state.status == 'loading'
        ?<img src="https://media.giphy.com/media/Qrca6tBIdqXYXhnB4v/giphy.gif"></img>
        :state.pokemons.map((pkm) => (
            <p key={pkm.id}> {pkm.name}</p>
        ))
      }

    </Fragment>
  );
}

export default Core;
