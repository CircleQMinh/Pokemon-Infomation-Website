import React from "react";
import "../../common/css/infoCard.css";
import Pokemon from "../../interface/model/Pokemon";
import InfoCard from "../infoCard/infoCard";
type InfoCardListProps = {
  Pokemons: Pokemon[];
};
function InfoCardList(props: InfoCardListProps) {
  const pokemons = props.Pokemons;
  return (
    <div className="infocard-list infocard-list-pkmn-lg">
        {
            pokemons.map((pkm)=>(
                <InfoCard Pokemon={pkm} key={pkm.name}></InfoCard>
            ))
        }
    </div>
  );
}

export default InfoCardList;
