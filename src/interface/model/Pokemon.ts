import Ability from "./Ability";
import BasicModel from "./BasicModel";
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
}
export interface PokemonStat{
    base_stat:number,
    effort:number,
    stat:BasicModel
}