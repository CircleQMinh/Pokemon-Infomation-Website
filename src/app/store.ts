import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import coreReducer from '../features/core/coreSlice';
import searchReducer from '../features/search/SearchSlice';
import infomationReducer from '../features/infomation/InfomationSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  
  reducer: {
    counter: counterReducer,
    core: coreReducer,
    search: searchReducer,
    infomation:infomationReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
