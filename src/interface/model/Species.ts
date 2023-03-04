import BasicModel from "./BasicModel"

export default interface Species{

    base_happiness: number,
    capture_rate: number,
    color: BasicModel[],
    egg_groups: BasicModel[
    ],
    evolution_chain: {
        url: string
    },
    evolves_from_species: any,
    flavor_text_entries: [
        {
            flavor_text: string,
            language: BasicModel,
            version: BasicModel
        },
    ],
    form_descriptions: any[],
    forms_switchable: boolean,
    gender_rate: number, //  x/8 being female -1 genderless
    generation: BasicModel,
    growth_rate:BasicModel,
    habitat:BasicModel,
    has_gender_differences: boolean,
    hatch_counter: number,
    id: number,
    is_baby: boolean,
    is_legendary: boolean,
    is_mythical: boolean,
    name: string,
    shape: BasicModel,
}