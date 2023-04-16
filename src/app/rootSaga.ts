
import { all } from 'redux-saga/effects'
import counterSaga from "../features/counter/counterSaga";
import coreSaga from "../features/core/coreSaga";
import searchSaga from "../features/search/SearchSaga";
import infomationSaga from '../features/infomation/InfomationSaga';
import dataSaga from '../features/data/DataSaga';

export default function* rootSaga(){
    yield all([counterSaga(),coreSaga(),searchSaga(),infomationSaga(),dataSaga()])
}

