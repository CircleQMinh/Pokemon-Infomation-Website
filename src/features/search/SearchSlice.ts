import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import SetPokemonInfo from '../../interface/form/SetPokemonInfo';
import Pokemon from '../../interface/model/Pokemon';
import BaseQuery from '../../interface/query/BaseQuery';
import { BaseResponse } from '../../interface/response/BaseResponse';
import GetPokemonListResponse from '../../interface/response/GetPokemonListResponse';
import GetPokemonSearchListResponse from '../../interface/response/GetPokemonSearchListResponse';

// import { fetchCount } from './counterAPI';

export interface SearchState {
    value: number,
    pokemons : Pokemon[],
    status: 'idle' | 'loading' | 'failed',
    query: BaseQuery,
    updateInfo : 'done' | 'inprogress',
    pokemonSearchList : string[]
  }
  
  const initialState: SearchState = {
    value: 0,
    status: 'idle',
    pokemons : [],
    query: {
        offset:0,
        limit:20
    },
    updateInfo:'inprogress',
    pokemonSearchList:[]
  };
  export const searchSlice = createSlice({
    name: 'search',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {

      getPokemonList: (state, action: PayloadAction<BaseQuery>) => {
        state.status = 'loading'
      },
      getPokemonListSuccess(state, action: PayloadAction<GetPokemonListResponse>) {
        var temp = [...state.pokemons]
        action.payload.results.forEach(rs => {
          if(!temp.some(q=>q.name==rs.name)){
            temp.push(rs)
          }
        });
        state.pokemons = temp;
        state.status = 'idle'
      },
      getPokemonListFailed(state) {
        state.status = 'failed'
      },
      setPokemonInfo(state, action: PayloadAction<SetPokemonInfo>) {
        // console.log( state.pokemons[action.payload.index])
        // console.log(action.payload.index)
        // console.log(action.payload.pokemon)
        state.pokemons[action.payload.index] = action.payload.pokemon
        
      },
      startUpdateInfo(state) {
        state.updateInfo = 'inprogress'
      },

      getPokemonSearchList(state){
        state.status = 'loading'
      },
      getPokemonSearchListSuccess(state, action: PayloadAction<GetPokemonSearchListResponse>) {
        var temp = [...state.pokemonSearchList]
        action.payload.results.forEach(rs => {
          if(!temp.some(q=>q==rs.name)){
            temp.push(rs.name)
          }
        });
        state.pokemonSearchList = temp;
        state.status = 'idle'
      },
      getPokemonSearchListFailed(state) {
        state.status = 'failed'
      },

    },

  });
  
  // Actions
  export const searchActions = searchSlice.actions;
  export default searchSlice.reducer;

  export const searchState = (state: RootState) => state.search;
  