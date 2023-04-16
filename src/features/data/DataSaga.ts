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
import GetPokemonSearchListResponse from "../../interface/response/GetPokemonSearchListResponse";
import { dataActions, DataState } from "./DataSlice";

export default function* DataSaga() {
  yield takeLatest(
    dataActions.getItemSearchList.toString(),
    handle_getPokemonSearchList
  );
}
function* handle_getPokemonSearchList() {
  try {
    const response: GetPokemonSearchListResponse = yield call(
      pokeApi.getPokemonItemList
    );

    yield put(dataActions.getItemSearchListSuccess(response));
  } catch (error) {
    console.log("Failed to fetch list", error);
    yield put(dataActions.getItemSearchListFailed());
  }
}
