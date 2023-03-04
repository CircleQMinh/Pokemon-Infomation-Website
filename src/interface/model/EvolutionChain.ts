import BasicModel from "./BasicModel"
export interface EvolutionInfo{
    baby_trigger_item : any,
    chain : EvolutionChain,
    id: number,
}
export interface EvolutionChain{
    evolution_details:EvolutionDetail,
    evolves_to:EvolvesTo[],
    species:BasicModel,

}

export interface EvolvesTo{
    evolution_details:EvolutionDetail[],
    evolves_to:EvolvesTo[],
    is_baby:boolean,
    species:BasicModel,

}

export interface EvolutionDetail{
    gender:null,
    held_item:null,
    item:null,
    known_move:null,
    known_move_type:null,
    location:null,
    min_affection:null,
    min_beauty:null,
    min_happiness:null,
    min_level:16,
    needs_overworld_rain:false,
    party_species:null,
    party_type:null,
    relative_physical_stats:null,
    time_of_day:"",
    trade_species:null,
    trigger:BasicModel,
    turn_upside_down:false
}