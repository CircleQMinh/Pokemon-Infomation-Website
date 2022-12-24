import Pokemon from '../interface/model/Pokemon';
import BaseQuery from '../interface/query/BaseQuery';
import { BaseResponse } from '../interface/response/BaseResponse';
import GetPokemonListResponse from '../interface/response/GetPokemonListResponse';
import axiosClient from './axiosClient';

const pokeApi = {
  getAll(query: BaseQuery): Promise<GetPokemonListResponse> {
    const url = `/pokemon?limit=${query.limit}&offset=${query.offset}`;
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