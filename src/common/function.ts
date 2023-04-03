import { pokemon_types, damage_array } from "./contant";

export function GetPokemonSprites(name: string) {
  return `https://img.pokemondb.net/sprites/bank/normal/${name}.png`;
}
export function GetPokemonTypeLogo(name: string) {
  return `https://www.serebii.net/pokedex-bw/type/${name}.gif`;
}

export function GetPaddedPokemonId(id: string) {
  var str = "" + id;
  var pad = "000";
  var ans = pad.substring(0, pad.length - str.length) + str;
  return ans;
}

export function GetIdFromUrl(str:string){
  str = str.replace("v2","")
  str = str.replace(/\D/g,'');
  return str
}
export function TranformItemName(str:string){
  str = str.replace("-"," ")
  return str
}
export function GetPKMImageURL(url:string){
 var id = GetIdFromUrl(url)
 var paddedId = GetPaddedPokemonId(id)
 return `https://www.serebii.net/pokemon/art/${paddedId}.png`
}
export function ConvertToGenerationString(url: string) {
  switch (url) {
    case "generation-i":
      return "1";
    case "generation-ii":
      return "2";
    case "generation-iii":
      return "3";
    case "generation-iv":
      return "4";
    case "generation-v":
      return "5";
    case "generation-vi":
      return "6";
    case "generation-vii":
      return "7";
    case "generation-viii":
      return "8";
    case "generation-ix":
      return "9";
    case "generation-x":
      return "10";
    default:
      return "Unknown";
      break;
  }
}
export const groupByKey = (list:any[], key:any) => list.reduce((hash, obj) => ({...hash, [obj[key]]:( hash[obj[key]] || [] ).concat(obj)}), {})

export function GetDamageMultiplier(attackType:string,types:string[]){
  var result:number = 1;
  types.forEach(type => {
      const attType = pokemon_types.findIndex(q=>q == attackType);
      const defType = pokemon_types.findIndex(q=>q == type);
      result = result *  damage_array[attType][defType]
  });
  return result
}

export function GetTypeEffectiveNumberAsString(num:number){
  
    if(num>=1 || num == 0){
      return "x"+num.toString();
    }
    if(num===0.5){
      return "1/2"
    }
    if(num===0.25){
      return "1/4"
    }
}

export function GetTypeEffectiveHoverLable(atk:string,defs:string[],num:number){
    var defType = ""
   defs.forEach(type => {
      defType+=type
      defType+="-"
   });
   defType =  defType.substring(0,defType.length-1)
    if(num === 0){
      return `${atk} → ${defType} = Immune`
    }
    if(num === 0.25 || num === 0.5){
      return `${atk} → ${defType} = Not very effectiveness`
    }
    if(num === 2 || num === 4){
      return `${atk} → ${defType} = Super effectiveness`
    }
    return `${atk} → ${defType} = Normal effectiveness`
}
export function capitalizeFirstLetter(string:string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function tranformStringDash(string:string) {
  string = string.replaceAll("-"," ")
  return string
}

export const calculatePagesCount = (pageSize: number, totalCount: number) => {
  // we suppose that if we have 0 items we want 1 empty page
  return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
};
