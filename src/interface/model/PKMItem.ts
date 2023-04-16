import BasicModel from "./BasicModel";
import PokemonType from "./PokemonType";


export default interface ItemFlavorTextEntrie {
    language:BasicModel
    text:string
    version_group:BasicModel
}
export default interface PKMItem{
    attributes: BasicModel[];
    category: BasicModel
    cost:number
    version_group: BasicModel
    flavor_text_entries:ItemFlavorTextEntrie[]
    id:number
    name:string
    sprites:{
        default:string
    }
}