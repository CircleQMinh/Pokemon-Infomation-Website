import BasicModel from "../model/BasicModel";

export default interface GetPokemonSearchListResponse{
    count:number,
    next:string,
    previous:string,
    results:BasicModel[]
}