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
