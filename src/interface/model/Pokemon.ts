import Ability from "./Ability";
import BasicModel from "./BasicModel";
import Move from "./Move";
import PokemonType from "./PokemonType";

export default interface Pokemon{
    id:number,
    name:string,
    url:string,
    abilities:Ability[],
    base_experience:number,
    height:number,
    weight:number,
    types:PokemonType[],
    species: BasicModel,
    stats:PokemonStat[]

    sprites:{
        back_default:string;
        back_female:string;
        back_shiny:string;
        back_shiny_female:string;
        front_default:string,
        front_female:string,
        front_shiny:string,
        front_shiny_female:string,
        other:{
         "dream_world":{
            front_default:string,
            front_female:string
         },
         "home":{
            front_default:string,
            front_female:string,
            front_shiny:string,
            front_shiny_female:string
         },
         "official-artwork":{
            front_default:string,
            front_shiny:string
         }
      },
    }

    moves:Move[]
}
export interface PokemonStat{
    base_stat:number,
    effort:number,
    stat:BasicModel
}