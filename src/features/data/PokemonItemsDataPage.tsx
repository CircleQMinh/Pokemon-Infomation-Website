import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import useWindowDimensions, {
  useAppSelector,
  useAppDispatch,
} from "../../app/hooks";
import CategorySection from "../../components/data/CategorySection";
import ButtonCategory from "../../components/reuseable/ButtonCategory";
import { dataState, dataActions } from "./DataSlice";
import "../data/data.css";
import SimpleSearchBarWithSuggetion from "../../components/reuseable/SimpleSearchBarWithSuggetion";
import { revertTranformStringDash } from "../../common/function";
function PokemonItemsDataPage() {
  const state = useAppSelector(dataState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(dataActions.getItemSearchList());
  }, []);
  var miscellaneous = [
    { name: "collectibles", url: "https://pokeapi.co/api/v2/item-category/9/" },
    { name: "evolution", url: "https://pokeapi.co/api/v2/item-category/10/" },
    { name: "spelunking", url: "https://pokeapi.co/api/v2/item-category/11/" },
    { name: "held-items", url: "https://pokeapi.co/api/v2/item-category/12/" },
    { name: "choice", url: "https://pokeapi.co/api/v2/item-category/13/" },
    {
      name: "effort-training",
      url: "https://pokeapi.co/api/v2/item-category/14/",
    },
    {
      name: "bad-held-items",
      url: "https://pokeapi.co/api/v2/item-category/15/",
    },
    { name: "training", url: "https://pokeapi.co/api/v2/item-category/16/" },
    { name: "plates", url: "https://pokeapi.co/api/v2/item-category/17/" },
    {
      name: "species-specific",
      url: "https://pokeapi.co/api/v2/item-category/18/",
    },
    {
      name: "type-enhancement",
      url: "https://pokeapi.co/api/v2/item-category/19/",
    },
    { name: "loot", url: "https://pokeapi.co/api/v2/item-category/24/" },
    { name: "mulch", url: "https://pokeapi.co/api/v2/item-category/32/" },
    {
      name: "dex-completion",
      url: "https://pokeapi.co/api/v2/item-category/35/",
    },
    { name: "scarves", url: "https://pokeapi.co/api/v2/item-category/36/" },
    { name: "jewels", url: "https://pokeapi.co/api/v2/item-category/42/" },
    { name: "mega-stones", url: "https://pokeapi.co/api/v2/item-category/44/" },
    { name: "memories", url: "https://pokeapi.co/api/v2/item-category/45/" },
    {
      name: "species-candies",
      url: "https://pokeapi.co/api/v2/item-category/47/",
    },
    {
      name: "dynamax-crystals",
      url: "https://pokeapi.co/api/v2/item-category/49/",
    },
    {
      name: "curry-ingredients",
      url: "https://pokeapi.co/api/v2/item-category/51/",
    },
    { name: "tera-shard", url: "https://pokeapi.co/api/v2/item-category/52/" },
    {
      name: "sandwich-ingredients",
      url: "https://pokeapi.co/api/v2/item-category/53/",
    },
    {
      name: "tm-materials",
      url: "https://pokeapi.co/api/v2/item-category/54/",
    },
    { name: "picnic", url: "https://pokeapi.co/api/v2/item-category/55/" },
  ];

  var medicine = [
    { name: "vitamins", url: "https://pokeapi.co/api/v2/item-category/26/" },
    { name: "healing", url: "https://pokeapi.co/api/v2/item-category/27/" },
    { name: "pp-recovery", url: "https://pokeapi.co/api/v2/item-category/28/" },
    { name: "revival", url: "https://pokeapi.co/api/v2/item-category/29/" },
    {
      name: "status-cures",
      url: "https://pokeapi.co/api/v2/item-category/30/",
    },
    {
      name: "nature-mints",
      url: "https://pokeapi.co/api/v2/item-category/50/",
    },
  ];

  var pokeballs = [
    {
      name: "special-balls",
      url: "https://pokeapi.co/api/v2/item-category/33/",
    },
    {
      name: "standard-balls",
      url: "https://pokeapi.co/api/v2/item-category/34/",
    },
    {
      name: "apricorn-balls",
      url: "https://pokeapi.co/api/v2/item-category/39/",
    },
  ];

  var machines = [
    {
      name: "all-machines",
      url: "https://pokeapi.co/api/v2/item-category/37/",
    },
  ];

  var berries = [
    { name: "effort-drop", url: "https://pokeapi.co/api/v2/item-category/2/" },
    { name: "medicine", url: "https://pokeapi.co/api/v2/item-category/3/" },
    { name: "other", url: "https://pokeapi.co/api/v2/item-category/4/" },
    { name: "in-a-pinch", url: "https://pokeapi.co/api/v2/item-category/5/" },
    {
      name: "picky-healing",
      url: "https://pokeapi.co/api/v2/item-category/6/",
    },
    {
      name: "type-protection",
      url: "https://pokeapi.co/api/v2/item-category/7/",
    },
    { name: "baking-only", url: "https://pokeapi.co/api/v2/item-category/8/" },
    {
      name: "catching-bonus",
      url: "https://pokeapi.co/api/v2/item-category/48/",
    },
  ];

  var mail = [
    { name: "all-mail", url: "https://pokeapi.co/api/v2/item-category/25/" },
  ];

  var battle = [
    { name: "stat-boosts", url: "https://pokeapi.co/api/v2/item-category/1/" },
    { name: "flutes", url: "https://pokeapi.co/api/v2/item-category/38/" },
    {
      name: "miracle-shooter",
      url: "https://pokeapi.co/api/v2/item-category/43/",
    },
  ];

  var key = [
    { name: "event-items", url: "https://pokeapi.co/api/v2/item-category/20/" },
    { name: "gameplay", url: "https://pokeapi.co/api/v2/item-category/21/" },
    {
      name: "plot-advancement",
      url: "https://pokeapi.co/api/v2/item-category/22/",
    },
    { name: "unused", url: "https://pokeapi.co/api/v2/item-category/23/" },
    {
      name: "apricorn-box",
      url: "https://pokeapi.co/api/v2/item-category/40/",
    },
    { name: "data-cards", url: "https://pokeapi.co/api/v2/item-category/41/" },
    { name: "z-crystals", url: "https://pokeapi.co/api/v2/item-category/46/" },
  ];

  var listCategory: string[] = [];
  // console.log(miscellaneous.length)
  // console.log(medicine.length)
  // console.log(pokeballs.length)
  // console.log(machines.length)
  // console.log(berries.length)
  // console.log(mail.length)
  // console.log(battle.length)
  // console.log(key.length)
  miscellaneous.forEach((element) => {
    listCategory.push(element.name);
  });
  medicine.forEach((element) => {
    listCategory.push(element.name);
  });
  pokeballs.forEach((element) => {
    listCategory.push(element.name);
  });
  machines.forEach((element) => {
    listCategory.push(element.name);
  });
  berries.forEach((element) => {
    listCategory.push(element.name);
  });
  mail.forEach((element) => {
    listCategory.push(element.name);
  });
  battle.forEach((element) => {
    listCategory.push(element.name);
  });
  key.forEach((element) => {
    listCategory.push(element.name);
  });

  return (
    <Fragment>
      <SimpleSearchBarWithSuggetion
        placeholder="What item you looking for?"
        data={state.itemSearchList}
        suggestionCount={5}
        onSearchResultClick={(e: string) => {
          window.open(
            `${window.location.protocol}//${
              window.location.host
            }/item/${revertTranformStringDash(e)}`,
            "_blank"
          );
        }}
      ></SimpleSearchBarWithSuggetion>
      <div className="container-fluid mt-5">
        <div className="row justify-content-evenly">
          <CategorySection
            category={pokeballs}
            sectionIcon="fa-regular fa-circle"
            sectionName="Pokeballs"
            size="col-lg-6"
            key={"pokeballs"}
          ></CategorySection>
          <CategorySection
            category={battle}
            sectionIcon="fa-solid fa-khanda"
            sectionName="Battle"
            size="col-lg-5"
            key={"battle"}
          ></CategorySection>
          <CategorySection
            category={medicine}
            sectionIcon="fa-solid fa-capsules"
            sectionName="Medicine"
            size="col-lg-6"
            key={"medicine"}
          ></CategorySection>
          <CategorySection
            category={berries}
            sectionIcon="fa-brands fa-raspberry-pi"
            sectionName="Berries"
            size="col-lg-5"
            key={"berries"}
          ></CategorySection>
          <CategorySection
            category={mail}
            sectionIcon="fa-regular fa-envelope"
            sectionName="Mail"
            size="col-lg-6"
            key={"mail"}
          ></CategorySection>
          <CategorySection
            category={machines}
            sectionIcon="fa-solid fa-compact-disc"
            sectionName="Machines"
            size="col-lg-5"
            key={"machines"}
          ></CategorySection>

          <CategorySection
            category={miscellaneous}
            sectionIcon="fa-regular fa-circle-question"
            sectionName="Miscellaneous"
            size="col-lg-6"
            key={"miscellaneous"}
          ></CategorySection>
          <CategorySection
            category={key}
            sectionIcon="fa-solid fa-key"
            sectionName="Key Items"
            size="col-lg-5"
            key={"key"}
          ></CategorySection>
        </div>
      </div>
    </Fragment>
  );
}
export default PokemonItemsDataPage;
