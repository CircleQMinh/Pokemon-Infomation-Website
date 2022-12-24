import Pokemon from "../model/Pokemon";

export default interface GetPokemonListResponse{
    count:number,
    next:string,
    previous:string,
    results:Pokemon[]
}