import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { tranformStringDash } from "../../common/function";
import Pokemon from "../../interface/model/Pokemon";
import BaseQuery from "../../interface/query/BaseQuery";
import GetPokemonSearchListResponse from "../../interface/response/GetPokemonSearchListResponse";

// import { fetchCount } from './counterAPI';

export interface DataState {
  status: "idle" | "loading" | "failed";
  updateInfo: "done" | "inprogress";
  itemSearchList: string[];
}

const initialState: DataState = {
  status: "idle",
  updateInfo: "inprogress",
  itemSearchList: [],
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getItemSearchList(state) {
      state.status = "loading";
    },
    getItemSearchListSuccess(
      state,
      action: PayloadAction<GetPokemonSearchListResponse>
    ) {
      var temp = [...state.itemSearchList];
      action.payload.results.forEach((rs) => {
        if (!temp.some((q) => q == tranformStringDash(rs.name))) {
          temp.push(tranformStringDash(rs.name));
        }
      });
      state.itemSearchList = temp;
      state.status = "idle";
    },
    getItemSearchListFailed(state) {
      state.status = "failed";
    },
  },
});

// Actions
export const dataActions = dataSlice.actions;
export default dataSlice.reducer;

export const dataState = (state: RootState) => state.data;
