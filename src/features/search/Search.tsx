
import React, { Fragment } from "react";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import InfoCardList from "../../components/infoCardList/infoCardList";
import { searchState,searchActions } from "./SearchSlice";
function Search() {
  const state = useAppSelector(searchState);
  const dispatch = useAppDispatch();
  

  return (
    <Fragment>
      
      <div>Search</div>
    

    </Fragment>
  );
}

export default Search