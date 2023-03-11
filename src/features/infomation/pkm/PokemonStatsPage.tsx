import React, { Fragment } from "react";
import { PokemonHighestStat } from "../../../common/contant";
import Pokemon from "../../../interface/model/Pokemon";

function PokemonStatsPage(props: { Pokemon: Pokemon | undefined }) {
  const pokemon = props.Pokemon;
  const baseHP = pokemon?.stats[0].base_stat;
  const baseAtk = pokemon?.stats[1].base_stat;
  const baseDef = pokemon?.stats[2].base_stat;
  const baseSAtk = pokemon?.stats[3].base_stat;
  const baseSDef = pokemon?.stats[4].base_stat;
  const baseSPD = pokemon?.stats[5].base_stat;

  return (
    <Fragment>
      {pokemon && (
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="table table-primary">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: 10 + "%" }}>
                      Stats
                    </th>
                    <th scope="col">Value</th>
                    <th scope="col" style={{ width: 15 + "%" }}>
                      Rating
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {GetStatElement(baseHP!,"HP")}
                    {GetStatElement(baseAtk!,"Atk")}
                    {GetStatElement(baseDef!,"Def")}
                    {GetStatElement(baseSAtk!,"SAtk")}
                    {GetStatElement(baseSDef!,"SDef")}
                    {GetStatElement(baseSPD!,"Spd")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

function GetStatElement(stat: number, type: string) {
  var rounded = GetRoundedPercentStat(stat!, type);
  return (
    <tr>
      <th>{type}</th>
      <td>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: rounded + "%",
              backgroundColor: GetColorForStat(rounded),
              color:"black"
            }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {stat}
          </div>
        </div>
      </td>
      <td>{GetRatingForStat(rounded)}</td>
    </tr>
  );
}
function GetRatingForStat(rounded:number){
    if(rounded>=75){
        return "Very High"
    }
    if(rounded<75 && rounded>=50){
        return "High"
    }
    if(rounded<50 && rounded>=30){
        return "Average"
    }
    if(rounded<30 && rounded>=20){
        return "Low"
    }
   return "Very Low"
}
function GetColorForStat(rounded:number){
    if(rounded>=75){
        return "#23cd5e"
    }
    if(rounded<75 && rounded>=50){
        return "#a0e515"
    }
    if(rounded<50 && rounded>=30){
        return "#ffdd57"
    }
    if(rounded<30 && rounded>=20){
        return "#ff7f0f"
    }
   return "#f34444"
}
function GetRoundedPercentStat(stat: number, type: string) {
  switch (type) {
    case "HP":
      return Math.round(((stat! * 100) / PokemonHighestStat.HP) * 10) / 10;
    case "Atk":
      return Math.round(((stat! * 100) / PokemonHighestStat.Atk) * 10) / 10;

    case "SAtk":
      return Math.round(((stat! * 100) / PokemonHighestStat.SAtk) * 10) / 10;

    case "Def":
      return Math.round(((stat! * 100) / PokemonHighestStat.Def) * 10) / 10;

    case "SDef":
      return Math.round(((stat! * 100) / PokemonHighestStat.SDef) * 10) / 10;

    case "Spd":
      return Math.round(((stat! * 100) / PokemonHighestStat.Spd) * 10) / 10;

    default:
      return 0;
  }
}
export default PokemonStatsPage;
