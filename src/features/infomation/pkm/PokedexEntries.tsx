import React, { Fragment, useEffect, useState } from "react";
import { groupByKey } from "../../../common/function";
import EntriesButton from "../../../components/infomation/EntriesButton";
import Pokemon from "../../../interface/model/Pokemon";
import Species from "../../../interface/model/Species";
type TrimmedFlavorText = {
  text: string;
  version: string;
};
function PokedexEntries(props: {
  Pokemon: Pokemon | undefined;
  Species: Species | undefined;
}) {
  const pokemon = props.Pokemon;
  const species = props.Species;
  var flavorText:TrimmedFlavorText[] = []

  if (pokemon && species) {
    const listOfFlavortext = species?.flavor_text_entries.filter(
      (q) => q.language.name === "en"
    );
    let listOfTrimmedFlavortext: TrimmedFlavorText[] = [];
    listOfFlavortext.forEach((e) => {
      var text = e.flavor_text.replace(/(\r\n|\n|\r|\f)/gm, " ");
      var version = e.version.name;
      listOfTrimmedFlavortext.push({
        text: text,
        version: version,
      });
    });
    var groupByKeyText = groupByKey(listOfTrimmedFlavortext, "text");
    // console.log(groupByKeyText)
    for (const [key, value] of Object.entries(groupByKeyText)) {
      var info = value as TrimmedFlavorText[];
      info.forEach(e=>{
        flavorText.push(e)
      })
    }
  }

  useEffect(() => {
    mergeCells()
  })
  
  
 
  return (
    <Fragment>
      <div className="resp-scroll">
        <table className="vitals-table" id="pokedex_entries">
          <tbody id="pokedex_entries_body">
            {flavorText.map((e, i) => (
              <tr key={i}>
                <th>
                  <span className="igame blue">{e.version}</span>
                </th>
                <td className="cell-med-text">
                    {e.text}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

function mergeCells() {
  let db = document.getElementById("pokedex_entries_body") as HTMLTableElement
  let dbRows = db!.rows;
  let lastValue = "";
  let lastCounter = 1;
  let lastRow = 0;
  for (let i = 0; i < dbRows.length; i++) {
      let thisValue = dbRows[i].cells[1].innerHTML;
      if (thisValue == lastValue) {
          lastCounter++;
          dbRows[lastRow].cells[0].rowSpan = lastCounter;
          if(dbRows[i].cells[0].innerHTML!=""){
            dbRows[lastRow].cells[0].innerHTML += `\r${dbRows[i].cells[0].innerHTML}`;
          }
          dbRows[i].cells[0].innerHTML=""
          dbRows[i].cells[0].style.display = "none";
          dbRows[lastRow].cells[1].rowSpan = lastCounter;
          dbRows[i].cells[1].style.display = "none";
      } else {
          dbRows[i].cells[0].style.display = "table-cell";
          dbRows[i].cells[1].style.display = "table-cell";
          lastValue = thisValue;
          lastCounter = 1;
          lastRow = i;
      }
  }
  for (let i = 0; i < dbRows.length; i++){
    let thisValue = dbRows[i].cells[0].innerHTML;
    thisValue = thisValue.trim()
    thisValue = thisValue.replace(" ","/")
    dbRows[i].cells[0].innerHTML = thisValue

  }
}
export default PokedexEntries;
