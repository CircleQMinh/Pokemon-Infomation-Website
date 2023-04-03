import React, { Fragment } from "react";
import { PokemonHighestStat } from "../../../common/contant";
import {
  GetDamageMultiplier,
  GetIdFromUrl,
  tranformStringDash,
} from "../../../common/function";
import TableWithPagination from "../../../components/reuseable/TableWithPagination";
import Pokemon from "../../../interface/model/Pokemon";
import TypeChart from "./TypeChart";
function PKMMovePage(props: { Pokemon: Pokemon | undefined }) {
  const pokemon = props.Pokemon;
  var listOfMoves_Tutor: string[][] = [];
  var listOfMoves_Egg: string[][] = [];
  var listOfMoves_Machine: string[][] = [];
  var listOfMoves_Level: string[][] = [];

  //   var tableSetting = {
  //     totalRow: 25,
  //     totalCol: 5,
  //     rowToDisplayPerPage: 5,
  //     data: listOfMoves,
  //     columnName: ["No.", "Name", "Learn Method", "Game"],
  //   };
  if (pokemon) {
    var moves = pokemon.moves;
    moves.forEach((move) => {
      var name = move.move.name;
      var method =
        move.version_group_details[move.version_group_details.length - 1]
          .move_learn_method.name;
      var game =
        move.version_group_details[move.version_group_details.length - 1]
          .version_group.name;
      var level =
        move.version_group_details[move.version_group_details.length - 1]
          .level_learned_at;
      var url_id = GetIdFromUrl(move.move.url);
      switch (method) {
        case "egg":
          listOfMoves_Egg.push([(listOfMoves_Egg.length+1).toString(),name]);
          break;
        case "tutor":
          listOfMoves_Tutor.push([(listOfMoves_Tutor.length+1).toString(),name]);
          break;
        case "level-up":
          listOfMoves_Level.push([
            (listOfMoves_Level.length + 1).toString(),
            name,
            level.toString(),
          ]);
          break;
        case "machine":
          listOfMoves_Machine.push([(listOfMoves_Machine.length+1).toString(),name]);
          break;
        default:
          break;
      }
    });
    listOfMoves_Level = listOfMoves_Level.sort(
      (a, b) => Number.parseInt(a[2]) - Number.parseInt(b[2])
    );
    listOfMoves_Level.forEach((e, i) => {
      e[0] = (i + 1).toString();
      for (let index = 1; index < e.length; index++) {
        e[index] = tranformStringDash(e[index]);
      }
    });
    listOfMoves_Machine = listOfMoves_Machine.sort((a, b) => a[1].localeCompare(b[1]))
    listOfMoves_Machine.forEach((e, i) => {
      e[0] = (i + 1).toString();
      for (let index = 1; index < e.length; index++) {
        e[index] = tranformStringDash(e[index]);
      }
    });
    listOfMoves_Tutor = listOfMoves_Tutor.sort((a, b) => a[1].localeCompare(b[1]))
    listOfMoves_Tutor.forEach((e, i) => {
      e[0] = (i + 1).toString();
      for (let index = 1; index < e.length; index++) {
        e[index] = tranformStringDash(e[index]);
      }
    });
    listOfMoves_Egg = listOfMoves_Egg.sort((a, b) => a[1].localeCompare(b[1]))
    listOfMoves_Egg.forEach((e, i) => {
      e[0] = (i + 1).toString();
      for (let index = 1; index < e.length; index++) {
        e[index] = tranformStringDash(e[index]);
      }
    });
  }
  return (
    <Fragment>
      {pokemon && (
        <div className="container-fluid mt-3">
          <div className="row justify-content-center">
            {GetHeaderElement("Move learn by Level up")}
            <div className="col-6">
            <TableWithPagination
              {...{
                data: listOfMoves_Level,
                columnName: ["Move.", "Name", "Learn At Level"],
                pageSzie: 99,
              }}
            ></TableWithPagination>
            </div>
 
            {GetHeaderElement("Move learn by TM&HM")}
            <div className="col-6 movepool_overflow">
            <TableWithPagination
              {...{
                data: listOfMoves_Machine,
                columnName: ["Move.", "Name"],
                pageSzie: 9999,
              }}
            ></TableWithPagination>
             </div>
            {GetHeaderElement("Move learn by Tutor")}
            <div className="col-6 movepool_overflow">
            <TableWithPagination
              {...{
                data: listOfMoves_Tutor,
                columnName: ["Move.", "Name"],
                pageSzie: 9999,
              }}
            ></TableWithPagination>
             </div>
             {GetHeaderElement("Move learn from Egg Hatching")}
             <div className="col-6 movepool_overflow">
            <TableWithPagination
              {...{
                data: listOfMoves_Egg,
                columnName: ["Move.", "Name"],
                pageSzie: 9999,
              }}
            ></TableWithPagination>
             </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
function GetHeaderElement(value: string) {
  return (
    <Fragment>
      <hr></hr>
      <h3>{value}</h3>
      <hr></hr>
    </Fragment>
  );
}
export default PKMMovePage;
