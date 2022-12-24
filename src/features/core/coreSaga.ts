import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import pokeApi from "../../api/pokeAPI";
import Pokemon from "../../interface/model/Pokemon";
import BaseQuery from "../../interface/query/BaseQuery";
import { BaseResponse } from "../../interface/response/BaseResponse";
import GetPokemonListResponse from "../../interface/response/GetPokemonListResponse";
import { coreState, coreActions } from './coreSlice';

export default function* coreSaga(){
    console.log("counter")
    // yield takeEvery(increment().type,LogTest)
    yield takeLatest(coreActions.getPokemonList.toString(),LogTest)
}

export function* LogTest(action : PayloadAction<BaseQuery>){
    console.log(action)
    try {
        const response: GetPokemonListResponse = yield call(pokeApi.getAll, action.payload);
        yield put(coreActions.getPokemonListSuccess(response));
      } catch (error) {
        console.log('Failed to fetch student list', error);
        yield put(coreActions.getPokemonListFailed());
      }
}
