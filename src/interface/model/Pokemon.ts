import PokemonType from "./PokemonType";

export default interface Pokemon{
    id:number,
    name:string,
    url:string,
    abilities:any,
    base_experience:number,
    height:number,
    weight:number,
    types:PokemonType[],

}