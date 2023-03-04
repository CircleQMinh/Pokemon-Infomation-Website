import BasicModel from "./BasicModel";
import PokemonType from "./PokemonType";

export default interface Ability{

    slot:number,
    is_hidden:boolean,
    ability:BasicModel
}