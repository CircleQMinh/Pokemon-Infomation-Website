import BasicModel from "./BasicModel";
import PokemonType from "./PokemonType";


export default interface PMKItemCategory{
    id:number,
    items:BasicModel[],
    name:string,
    pocket:BasicModel,
    

}