import React, { Fragment } from "react";
import { groupByKey } from "../../../common/function";
import EntriesButton from "../../../components/infomation/EntriesButton";
import EntriesContent from "../../../components/infomation/EntriesContent";
import { EvolutionInfo } from "../../../interface/model/EvolutionChain";
import Pokemon from "../../../interface/model/Pokemon";
import Species from "../../../interface/model/Species";
import EvolutionInfoPage from "./EvolutionInfoPage";
import PKMMovePage from "./PKMMovePage";
import PKMSpritesPage from "./PKMSpritesPage";
import PokedexEntries from "./PokedexEntries";
import PokemonStatsPage from "./PokemonStatsPage";

function GeneralInfomation(props: {
  Pokemon: Pokemon | undefined;
  Species: Species | undefined;
  EvolutionInfo: EvolutionInfo | undefined;
}) {
  const pokemon = props.Pokemon;
  const species = props.Species;
  const evolutionInfo = props.EvolutionInfo;

  const ListOfTab = ["Stats","Pokedex Entries","Evolution","Moves","Sprites"]


  return (
    <Fragment>
      <div className="row">
        <ul className="nav nav-pills pill-1 ms-3" id="myTab" role="tablist">
          {ListOfTab.map((e,i)=>(
            <li key={e}><EntriesButton name={e} isActive={i==0} ></EntriesButton></li>
          ))}
         
        </ul>
        <div className="tab-content" id="myTabContent">
        {ListOfTab.map((e,i)=>(
            <EntriesContent key={e} content={
            i==0?<PokemonStatsPage Pokemon={pokemon}></PokemonStatsPage>:  
            i==1?<PokedexEntries Pokemon={pokemon} Species={species}></PokedexEntries>:
            i==2?<EvolutionInfoPage Pokemon={pokemon} Species={species} EvolutionInfo={evolutionInfo} ></EvolutionInfoPage>:
            i==3?<PKMMovePage Pokemon={pokemon} ></PKMMovePage>:
            i==4?<PKMSpritesPage Pokemon={pokemon} ></PKMSpritesPage>:  
            "" }
            isActive={i==0} id={e}></EntriesContent>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default GeneralInfomation;
