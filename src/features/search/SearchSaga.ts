import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put, takeEvery, takeLatest,select, SelectEffect, all, fork } from "redux-saga/effects";
import pokeApi from "../../api/pokeAPI";
import Pokemon from "../../interface/model/Pokemon";
import BaseQuery from "../../interface/query/BaseQuery";
import { BaseResponse } from "../../interface/response/BaseResponse";
import GetPokemonListResponse from "../../interface/response/GetPokemonListResponse";
import GetPokemonSearchListResponse from "../../interface/response/GetPokemonSearchListResponse";
import {  searchActions, SearchState } from "./SearchSlice";

export default function* SearchSaga() {
  yield takeLatest(
    searchActions.getPokemonList.toString(),
    handle_getPokemonList
  );
  yield takeLatest(
    searchActions.getPokemonListSuccess.toString(),
    handle_getPokemonListSuccess
  );
  yield takeLatest(
    searchActions.startUpdateInfo.toString(),
    handle_startUpdateInfo
  );
  yield takeLatest(
    searchActions.getPokemonSearchList.toString(),
    handle_getPokemonSearchList
  );
}

export function* handle_getPokemonList(action: PayloadAction<BaseQuery>) {
  try {
    const response: GetPokemonListResponse = yield call(
      pokeApi.getAll,
      action.payload
    );

    yield put(searchActions.getPokemonListSuccess(response));
  } catch (error) {
    console.log("Failed to fetch list", error);
    yield put(searchActions.getPokemonListFailed());
  }
}

export function* handle_getPokemonListSuccess(){
  yield put(searchActions.startUpdateInfo());
}


function* handle_startUpdateInfo(){
  console.log("handle_startUpdateInfo")
  var stateData: SearchState = yield select((state) => state.search);
  const allPokemons = stateData.pokemons
  var pokemonsToUpdateInfo = stateData.pokemons.filter((x) => x.id == null);
  while(pokemonsToUpdateInfo.length>0){
    // console.log(pokemonsToUpdateInfo)
    const pkm = pokemonsToUpdateInfo[0]
    const index = allPokemons.findIndex(q=>q.name==pkm.name)
    const response:Pokemon = yield call(
      pokeApi.getPokemon,
      pkm.name
    );
    yield put(searchActions.setPokemonInfo({
      index:index,
      pokemon:response
    }));
    stateData = yield select((state) => state.search);
    pokemonsToUpdateInfo = stateData.pokemons.filter((x) => x.id == null);
    // yield put(SearchActions.startUpdateInfo());
  }
}


function* handle_getPokemonSearchList(){
  try {
    const response: GetPokemonSearchListResponse = yield call(
      pokeApi.getPokemonSearchList
    );

    yield put(searchActions.getPokemonSearchListSuccess(response));
  } catch (error) {
    console.log("Failed to fetch list", error);
    yield put(searchActions.getPokemonSearchListFailed());
  }
}
