import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import useWindowDimensions, {
  useAppSelector,
  useAppDispatch,
} from "../../app/hooks";
import InfoCardList from "../../components/infoCardList/infoCardList";
import { searchState, searchActions } from "./SearchSlice";
import './Search.css';
import SimpleSearchBarWithSuggetion from "../../components/reuseable/SimpleSearchBarWithSuggetion";
function Search() {
  const state = useAppSelector(searchState);
  const dispatch = useAppDispatch();
  const { height, width } = useWindowDimensions();
  const limit = 50;
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(searchActions.getPokemonSearchList())
  },[])
  useEffect(() => {
    getData(true);
  }, [page]);

  function getData(load: boolean) {
    if (load) {
      dispatch(
        searchActions.getPokemonList({
          limit: limit,
          offset: (page - 1) * limit,
        })
      );
    }
  }

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [state.pokemons]);
  return (
    <Fragment>
        <SimpleSearchBarWithSuggetion data={state.pokemonSearchList} suggestionCount={5} onSearchResultClick={(e:string)=>{
          window.open(`${window.location.protocol}//${window.location.host}/pokedex/${e}`, "_blank")
        }}></SimpleSearchBarWithSuggetion>
        <InfoCardList Pokemons={state.pokemons}></InfoCardList>
      
    </Fragment>
  );
}

export default Search;
