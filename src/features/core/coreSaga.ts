import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put, takeEvery, takeLatest,select, SelectEffect, all, fork } from "redux-saga/effects";
import pokeApi from "../../api/pokeAPI";
import Pokemon from "../../interface/model/Pokemon";
import BaseQuery from "../../interface/query/BaseQuery";
import { BaseResponse } from "../../interface/response/BaseResponse";
import GetPokemonListResponse from "../../interface/response/GetPokemonListResponse";
import {  coreActions, coreState, CoreState } from "./coreSlice";

export default function* coreSaga() {
  yield takeLatest(
    coreActions.getPokemonList.toString(),
    handle_getPokemonList
  );
  yield takeLatest(
    coreActions.getPokemonListSuccess.toString(),
    handle_getPokemonListSuccess
  );
  yield takeLatest(
    coreActions.startUpdateInfo.toString(),
    handle_startUpdateInfo
  );
}

export function* handle_getPokemonList(action: PayloadAction<BaseQuery>) {
  try {
    const response: GetPokemonListResponse = yield call(
      pokeApi.getAll,
      action.payload
    );

    yield put(coreActions.getPokemonListSuccess(response));
  } catch (error) {
    console.log("Failed to fetch student list", error);
    yield put(coreActions.getPokemonListFailed());
  }
}

export function* handle_getPokemonListSuccess(){
  console.log("handle_getPokemonListSuccess")
  yield put(coreActions.startUpdateInfo());
}


function* handle_startUpdateInfo(){
  console.log("handle_startUpdateInfo")
  var stateData: CoreState = yield select((state) => state.core);
  const allPokemons = stateData.pokemons
  var pokemonsToUpdateInfo = stateData.pokemons.filter((x) => x.id == null);
  while(pokemonsToUpdateInfo.length>0){
    console.log(pokemonsToUpdateInfo)
    const pkm = pokemonsToUpdateInfo[0]
    const index = allPokemons.findIndex(q=>q.name==pkm.name)
    const response:Pokemon = yield call(
      pokeApi.getPokemon,
      pkm.name
    );
    yield put(coreActions.setPokemonInfo({
      index:index,
      pokemon:response
    }));
    stateData = yield select((state) => state.core);
    pokemonsToUpdateInfo = stateData.pokemons.filter((x) => x.id == null);
    // yield put(coreActions.startUpdateInfo());
  }
}
