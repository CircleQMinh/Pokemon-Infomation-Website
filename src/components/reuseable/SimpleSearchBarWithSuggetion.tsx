import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import {  } from "react-router-dom";
import { capitalizeFirstLetter } from "../../common/function";

type SimpleSearchBarWithSuggetionProps = {
  data: string[];
  suggestionCount: number;
  placeholder:string;
  onSearchResultClick: Function
};
function SimpleSearchBarWithSuggetion(
  props: SimpleSearchBarWithSuggetionProps
) {
  const suggestionCount = props.suggestionCount;
  const data = props.data;
  const [searchKeyword, setSearchKeyword] = useState("");
  const [suggestionList, setSuggestionList] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      var searchResult = data.filter((q) =>
        q.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setSuggestionList(searchResult.slice(0, suggestionCount));
    }
  }, [searchKeyword]);

  function handleSearchInput(e: React.SyntheticEvent<EventTarget>) {
    setSearchKeyword((e.target as HTMLInputElement).value);
  }
  function handleSearchResultClick(e:string){
    console.log(e)
    props.onSearchResultClick(e)
  }

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder={props.placeholder}
                onChange={handleSearchInput}
                value={searchKeyword}
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <div className="search_result">
              {searchKeyword.length > 0 && (
                <ul className="list-group">
                  {suggestionList.map((e, i) => (
                    <li className="list-group-item" key={i} onClick={()=>{
                        handleSearchResultClick(e)
                    }}>{capitalizeFirstLetter(e)}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SimpleSearchBarWithSuggetion;
