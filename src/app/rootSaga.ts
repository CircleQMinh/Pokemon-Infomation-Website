
import { all } from 'redux-saga/effects'
import counterSaga from "../features/counter/counterSaga";
import coreSaga from "../features/core/coreSaga";
import searchSaga from "../features/search/SearchSaga";


export default function* rootSaga(){
    console.log("root")
    yield all([counterSaga(),coreSaga(),searchSaga()])
}

