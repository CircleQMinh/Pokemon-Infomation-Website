import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { increment, incrementSaga, incrementSagaSuccess } from "./counterSlice";

export default function* counterSaga(){
    // console.log("counter")
    // yield takeEvery(increment().type,LogTest)
    yield takeLatest(incrementSaga.toString(),handleIncrementSaga)
}

export function LogTest(action : PayloadAction){
    console.log(action)
}

function* handleIncrementSaga(action : PayloadAction<number>){
    console.log("wait 2s")
    yield delay(2000)
    console.log("dispatch")
    yield put(incrementSagaSuccess(action.payload))
}