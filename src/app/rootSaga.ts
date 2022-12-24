
import { all } from 'redux-saga/effects'
import counterSaga from "../features/counter/counterSaga";
import coreSaga from "../features/core/coreSaga";


export default function* rootSaga(){
    console.log("root")
    yield all([counterSaga(),coreSaga()])
}

