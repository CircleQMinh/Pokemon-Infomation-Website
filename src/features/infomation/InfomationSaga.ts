import { PayloadAction } from "@reduxjs/toolkit";
import {
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
  SelectEffect,
  all,
  fork,
} from "redux-saga/effects";
import pokeApi from "../../api/pokeAPI";
import { GetIdFromUrl } from "../../common/function";
import { EvolutionInfo } from "../../interface/model/EvolutionChain";
import Pokemon from "../../interface/model/Pokemon";
import Species from "../../interface/model/Species";
import BaseQuery from "../../interface/query/BaseQuery";
import { BaseResponse } from "../../interface/response/BaseResponse";
import GetPokemonListResponse from "../../interface/response/GetPokemonListResponse";
import {
  InfomationState,
  infomationSlice,
  infomationActions,
} from "./InfomationSlice";

export default function* infomationSaga() {
  yield takeLatest(
    infomationActions.getPokemonInfo.toString(),
    handle_getPokemon
  );

  yield takeLatest(
    infomationActions.getPokemonInfoSuccess.toString(),
    handle_getSpecices
  );
  yield takeLatest(
    infomationActions.getPokemonSpeciesInfoSuccess.toString(),
    handle_getEvolutionChain
  );

  yield takeLatest(
    infomationActions.getPokemonSpeciesInfoSuccess.toString(),
    handle_setDoneLoading
  );
}

function* handle_getPokemon(action: PayloadAction<string>) {
  try {
    const response: Pokemon = yield call(pokeApi.getPokemon, action.payload);

    yield put(infomationActions.getPokemonInfoSuccess(response));
  } catch (error) {
    console.log("Failed to fetch pkm  info", error);
    yield put(infomationActions.getPokemonInfoFailed());
  }
}

function* handle_getSpecices(action: PayloadAction<string>) {
  try {
    var stateData: InfomationState = yield select((state) => state.infomation);
    var name = stateData.pokemon?.species.name
    const response: Species = yield call(pokeApi.getSpecies, name!);

    yield put(infomationActions.getPokemonSpeciesInfoSuccess(response));
  } catch (error) {
    console.log("Failed to fetch pkm  info", error);
    yield put(infomationActions.getPokemonSpeciesInfoFailed());
  }
}

function* handle_getEvolutionChain(action: PayloadAction<string>) {
  try {
    var stateData: InfomationState = yield select((state) => state.infomation);
    var name = GetIdFromUrl(stateData.species?.evolution_chain.url!)

    const response: EvolutionInfo = yield call(pokeApi.getEvolutionChain, name!);
    console.log(response)
    yield put(infomationActions.getPokemonEvolutionInfoSuccess(response));
  } catch (error) {
    console.log("Failed to fetch pkm  info", error);
     yield put(infomationActions.getPokemonEvolutionInfoFailed());
  }
}

function* handle_setDoneLoading(){
  yield put(infomationActions.setStatusDone())
}
