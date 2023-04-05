import { EvolutionInfo } from '../interface/model/EvolutionChain';
import Pokemon from '../interface/model/Pokemon';
import Species from '../interface/model/Species';
import BaseQuery from '../interface/query/BaseQuery';
import { BaseResponse } from '../interface/response/BaseResponse';
import GetPokemonListResponse from '../interface/response/GetPokemonListResponse';
import GetPokemonSearchListResponse from '../interface/response/GetPokemonSearchListResponse';
import axiosClient from './axiosClient';

const pokeApi = {
  getAll(query: BaseQuery): Promise<GetPokemonListResponse> {
    const url = `/pokemon?limit=${query.limit}&offset=${query.offset}`;
    return axiosClient.get(url);
  },
  getPokemon(name: string): Promise<Pokemon> {
    // console.log(name)
    const url = `/pokemon/${name}/`;
    return axiosClient.get(url);
  },
  
  getSpecies(name: string): Promise<Species> {
    // console.log(name)
    const url = `/pokemon-species/${name}/`;
    return axiosClient.get(url);
  },

  getEvolutionChain(name: string): Promise<EvolutionInfo> {
    // console.log(name)
    const url = `/evolution-chain/${name}/`;
    return axiosClient.get(url);
  },

  getPokemonSearchList(): Promise<GetPokemonSearchListResponse> {
    // console.log(name)
    const url = `/pokemon-species/?offset=0&limit=2000`;
    return axiosClient.get(url);
  },

//   getById(id: string): Promise<Student> {
//     const url = `/students/${id}`;
//     return axiosClient.get(url);
//   },

//   add(data: Student): Promise<Student> {
//     const url = '/students';
//     return axiosClient.post(url, data);
//   },

//   update(data: Partial<Student>): Promise<Student> {
//     const url = `/students/${data.id}`;
//     return axiosClient.patch(url, data);
//   },

//   remove(id: string): Promise<any> {
//     const url = `/students/${id}`;
//     return axiosClient.delete(url);
//   },
};

export default pokeApi;