import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import SetPokemonInfo from '../../interface/form/SetPokemonInfo';
import Pokemon from '../../interface/model/Pokemon';
import BaseQuery from '../../interface/query/BaseQuery';
import { BaseResponse } from '../../interface/response/BaseResponse';
import GetPokemonListResponse from '../../interface/response/GetPokemonListResponse';

// import { fetchCount } from './counterAPI';

export interface SearchState {
    value: number,
    pokemons : Pokemon[],
    status: 'idle' | 'loading' | 'failed',
    query: BaseQuery,
    updateInfo : 'done' | 'inprogress'
  }
  
  const initialState: SearchState = {
    value: 0,
    status: 'idle',
    pokemons : [],
    query: {
        offset:0,
        limit:20
    },
    updateInfo:'inprogress'
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
    },

  });
  
  // Actions
  export const searchActions = searchSlice.actions;
  export default searchSlice.reducer;

  export const searchState = (state: RootState) => state.search;
  