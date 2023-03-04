
import { all } from 'redux-saga/effects'
import counterSaga from "../features/counter/counterSaga";
import coreSaga from "../features/core/coreSaga";
import searchSaga from "../features/search/SearchSaga";
import infomationSaga from '../features/infomation/InfomationSaga';


export default function* rootSaga(){
    yield all([counterSaga(),coreSaga(),searchSaga(),infomationSaga()])
}

