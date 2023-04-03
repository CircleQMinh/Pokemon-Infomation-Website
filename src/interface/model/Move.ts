import BasicModel from "./BasicModel";
import PokemonType from "./PokemonType";
export default interface MoveDetails{
    level_learned_at: number;
    move_learn_method: BasicModel
    version_group: BasicModel
}
export default interface Move {
  move: BasicModel;
  version_group_details: MoveDetails[];
}
