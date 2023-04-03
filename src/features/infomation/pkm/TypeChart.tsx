import React, { Fragment, useEffect } from "react";
import { pokemon_types } from "../../../common/contant";
import {
  capitalizeFirstLetter,
  GetDamageMultiplier,
  GetTypeEffectiveHoverLable,
  GetTypeEffectiveNumberAsString,
} from "../../../common/function";
import PokemonType from "../../../interface/model/PokemonType";

function TypeChart(props: PokemonType[]) {
  const types = props;
  const typeChartFirstRow = pokemon_types.slice(0, 9);
  const typeChartSecondRow = pokemon_types.slice(9, pokemon_types.length);
  var defTypes: string[] = [];

  if (props[0]) {
    defTypes.push(capitalizeFirstLetter(props[0].type.name));
  }
  if (props[1]) {
    defTypes.push(capitalizeFirstLetter(props[1].type.name));
  }

  return (
    <Fragment>
      {defTypes.length > 0 && (
        <div className="resp-scroll text-center">
          <h3>Type Effectiveness</h3>
          <table className="type-table type-table-pokedex">
            <tbody>
              <tr>
                {typeChartFirstRow.map((e) => {
                  return (
                    <th key={e}>
                      <a
                        className={`type-icon type-${e.toLowerCase()} type-cell type-abbr`}
                        href={`/type/${e.toLowerCase()}`}
                        title={e}
                      >
                        {e.slice(0, 3)}
                      </a>
                    </th>
                  );
                })}
              </tr>
              <tr>
                {typeChartFirstRow.map((e) => {
                  var d_mul = GetDamageMultiplier(e, defTypes);
                  return (
                    <td
                      key={e}
                      title={GetTypeEffectiveHoverLable(e, defTypes, d_mul)}
                      className={`type-fx-cell type-fx-100 ${GetTypeEffectiveClass(
                        d_mul
                      )}`}
                    >
                      {GetTypeEffectiveNumberAsString(d_mul)}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
          <br></br>
          <table className="type-table type-table-pokedex">
            <tbody>
              <tr>
                {typeChartSecondRow.map((e) => {
                  return (
                    <th key={e}>
                      <a
                        className={`type-icon type-${e.toLowerCase()} type-cell type-abbr`}
                        href={`/type/${e.toLowerCase()}`}
                        title={e}
                      >
                        {e.slice(0, 3)}
                      </a>
                    </th>
                  );
                })}
              </tr>
              <tr>
                {typeChartSecondRow.map((e) => {
                  var d_mul = GetDamageMultiplier(e, defTypes);
                  return (
                    <td
                      key={e}
                      title={GetTypeEffectiveHoverLable(e, defTypes, d_mul)}
                      className={`type-fx-cell type-fx-100 ${GetTypeEffectiveClass(
                        d_mul
                      )}`}
                    >
                      {GetTypeEffectiveNumberAsString(d_mul)}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </Fragment>
  );
}

function GetTypeEffectiveClass(d_mul: number) {
  if (d_mul == 0) {
    return "bg_immune";
  }
  if (d_mul == 2 || d_mul == 4) {
    return "bg_effective";
  }
  if (d_mul == 0.25 || d_mul == 0.5) {
    return "bg_resist";
  }
  if (d_mul == 1) {
    return "bg_neutral";
  }
  return "";
}

export default TypeChart;
