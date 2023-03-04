import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import SetPokemonInfo from '../../interface/form/SetPokemonInfo';
import { EvolutionChain, EvolutionInfo } from '../../interface/model/EvolutionChain';
import Pokemon from '../../interface/model/Pokemon';
import Species from '../../interface/model/Species';
import BaseQuery from '../../interface/query/BaseQuery';
import { BaseResponse } from '../../interface/response/BaseResponse';
import GetPokemonListResponse from '../../interface/response/GetPokemonListResponse';

// import { fetchCount } from './counterAPI';

export interface InfomationState {
    value: number,
    pokemon : Pokemon|undefined,
    species:Species|undefined,

    evolutionInfo: EvolutionInfo|undefined,
    status: 'idle' | 'loading' | 'failed',
    query: BaseQuery,
    updateInfo : 'done' | 'inprogress'
  }
  
  const initialState: InfomationState = {
    value: 0,
    status: 'idle',
    pokemon : undefined,
    species: undefined,
    evolutionInfo : undefined,
    query: {
        offset:0,
        limit:20
    },
    updateInfo:'inprogress'
  };
  export const infomationSlice = createSlice({
    name: 'infomation',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {

      getPokemonInfo: (state, action: PayloadAction<string>) => {
        state.status = 'loading'
      },
      getPokemonInfoSuccess(state, action: PayloadAction<Pokemon>) {
        state.pokemon = action.payload;
      },
      getPokemonInfoFailed(state) {
        state.status = 'failed'
      },

      getPokemonSpeciesInfoSuccess(state, action: PayloadAction<Species>) {
        state.species = action.payload;
      },
      getPokemonSpeciesInfoFailed(state) {
        state.status = 'failed'
      },

      getPokemonEvolutionInfoSuccess(state, action: PayloadAction<EvolutionInfo>) {
        state.evolutionInfo = action.payload;
      },
      getPokemonEvolutionInfoFailed(state) {
        state.status = 'failed'
      },

      setStatusDone(state) {
        state.status = 'idle'
      },

    },

  });
  
  // Actions
  export const infomationActions = infomationSlice.actions;
  export default infomationSlice.reducer;

  export const infomationState = (state: RootState) => state.infomation;
  