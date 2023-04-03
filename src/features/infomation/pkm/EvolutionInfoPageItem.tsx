import React, { Fragment } from "react";
import {
  GetIdFromUrl,
  GetPKMImageURL,
  TranformItemName,
} from "../../../common/function";
import { EvolutionDetail, EvolvesTo } from "../../../interface/model/EvolutionChain";

function EvolutionInfoPageItem(props: EvolvesTo) {
  const evolutionInfo = props;
  const species = props.species;
  var details = props.evolution_details
    // props.evolution_details.length == 1
    //   ? props.evolution_details[0]
    //   : props.evolution_details[props.evolution_details.length - 1];
  return (
    <Fragment>
      <div className="col-12">
        <div className="container d-flex justify-content-center align-items-center text-center">
          <div className="col-6 mr-2">
            <div className="card  border-none d-flex flex-column justify-content-center align-items-center text-center">
              <i className="fa-solid fa-arrow-right"></i>
              <>
              {
                details.map((detail,i)=>{
                  return CreateEvolutionDetailChild(detail,i)
                })
              }
            </>
            </div>
          </div>
          <div className="col-8">
            <div className="card d-flex justify-conten-center align-items-center border-none">
              <img
                src={GetPKMImageURL(species.url!)}
                className="card-img-top width100px"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-capitalize text-center">
                  <a href={`/pokedex/${species.name.toLowerCase()}`}>
                    {species.name}
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

function GetEvoleConditionElement(key: string, value: any) {
  switch (key) {
    case "min_level":
      return (
        <p key={key} className="text-capitalize">
          {" "}
          {`Level ${value}`}
        </p>
      );
    case "gender":
      return (
        <p key={key} className="text-capitalize">
          {" "}
          {`(${value == 1 ? "Female" : "Male"})`}
        </p>
      );
    case "held_item":
      return (
        <p key={key} className="text-capitalize">
          {" "}
          Hold{" "}
          <a href={`/item/${GetIdFromUrl(value.url)}`}>{`'${TranformItemName(
            value.name
          )}'`}</a>
        </p>
      );
    case "item":
      return (
        <p key={key} className="text-capitalize">
          {" "}
          Use{" "}
          <a href={`/item/${GetIdFromUrl(value.url)}`}>{`'${TranformItemName(
            value.name
          )}'`}</a>
        </p>
      );
    case "known_move":
      return (
        <p key={key} className="text-capitalize">
          {" "}
          Learn{" "}
          <a href={`/move/${GetIdFromUrl(value.url)}`}>{`'${value.name}'`}</a>
        </p>
      );
    case "known_move_type":
      return (
        <p key={key} className="text-capitalize">
          {" "}
          Known move type{" "}
          <a href={`/type/${GetIdFromUrl(value.url)}`}>{`'${value.name}'`}</a>
        </p>
      );
    case "location":
      return (
        <p key={key} className="text-capitalize">
          {" "}
          At{" "}
          <a
            href={`/location/${GetIdFromUrl(value.url)}`}
          >{`'${value.name}'`}</a>
        </p>
      );
    case "min_happiness":
      return (
        <p key={key} className="text-capitalize">
          {" "}
          High Friendship
        </p>
      );
    case "min_affection":
      return (
        <p key={key} className="text-capitalize">
          {" "}
          High Affection
        </p>
      );
    case "time_of_day":
      return (
        <p key={key} className="text-capitalize">
          {value == "day" ? "Daytime" : "Nighttime"}
        </p>
      );
    case "min_beauty":
      return (
        <p key={key} className="text-capitalize">
          {" "}
          High Beauty
        </p>
      );
    case "needs_overworld_rain":
      return (
        <p key={key} className="text-capitalize">
          {" "}
          Raining
        </p>
      );
    case "trigger":
      if (value.name == "shed") {
        return (
          <p key={key} className="text-capitalize">
            {value.name == "shed" ? "Empty spot in party, Pokéball in bag" : ""}
          </p>
        );
      }
      // if(value.name == "level-up"){
      //   return (
      //     <p key={key} className="text-capitalize">
      //       Level up
      //     </p>
      //   );
      // }
      return "";
    case "trade_species":
      return (
        <p key={key} className="text-capitalize">
          Trade for{" "}
          <a
            href={`/pokedex/${GetIdFromUrl(value.url)}`}
          >{`'${value.name}'`}</a>
        </p>
      );
    case "turn_upside_down":
      return (
        <p key={key} className="text-capitalize">
          Turn device upside down
        </p>
      );
    case "relative_physical_stats":
      const s: number = value as number;
      if (s == -1) {
        return (
          <p key={key} className="text-capitalize">
            Attack {"<"} Defense
          </p>
        );
      }
      if (s == 0) {
        return (
          <p key={key} className="text-capitalize">
            Attack {"="} Defense
          </p>
        );
      }
      if (s == 1) {
        return (
          <p key={key} className="text-capitalize">
            Attack {">"} Defense
          </p>
        );
      }
      return "";
    case "party_species":
      return (
        <p key={key} className="text-capitalize">
          
          <a
            href={`/pokedex/${GetIdFromUrl(value.url)}`}
          >{`'${value.name}'`}</a>
          {" "}
          is in Party
        </p>
      );
    case "party_type":
      return (
        <p key={key} className="text-capitalize">
          <a
            href={`/type/${GetIdFromUrl(value.url)}`}
          >{`'${value.name}'`}</a>
             {" "}
          type Pokemon is is party
        </p>
      );
    default:
      return <p>{key}-???</p>;
  }
}

function CreateEvolutionDetailChild(detail:EvolutionDetail,index:number){
  var count = 0;
  var values:any[] = Object.values(detail)
  values.forEach((value)=>{
    if(value){
      count++
    }
  })
  return (
  <Fragment key={index}>
  {index>0&&count>1&&(<hr className="seperate_hr_condition"/>)}
    {Object.entries(detail).map((e) => {
      const [key, value] = e;
      return (
        (value!=null && value!='') && (
          <span key={key} className="">
            {GetEvoleConditionElement(key, value)}
          </span>
        )
        );
    })}
  </Fragment>
  )
}
export default EvolutionInfoPageItem;
