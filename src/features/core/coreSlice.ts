import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import Pokemon from '../../interface/model/Pokemon';
import BaseQuery from '../../interface/query/BaseQuery';
import { BaseResponse } from '../../interface/response/BaseResponse';
import GetPokemonListResponse from '../../interface/response/GetPokemonListResponse';

// import { fetchCount } from './counterAPI';

export interface CoreState {
    value: number,
    pokemons : Pokemon[],
    status: 'idle' | 'loading' | 'failed',
    query: BaseQuery
  }
  
  const initialState: CoreState = {
    value: 0,
    status: 'idle',
    pokemons : [],
    query: {
        offset:0,
        limit:20
    }
  };
  export const coreSlice = createSlice({
    name: 'core',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {

      getPokemonList: (state, action: PayloadAction<number>) => {
        state.status = 'loading'
      },
      getPokemonListSuccess(state, action: PayloadAction<GetPokemonListResponse>) {
        state.pokemons = action.payload.results;
        state.status = 'idle'
      },
      getPokemonListFailed(state) {
        state.status = 'failed'
      },
    },

  });
  
  // Actions
  export const coreActions = coreSlice.actions;
  export default coreSlice.reducer;

  export const coreState = (state: RootState) => state.core;
  