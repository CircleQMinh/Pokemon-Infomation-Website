import BaseQuery from "../query/BaseQuery";

export interface BaseResponse<T> {
    data: T[];
    pagination: BaseQuery;
  }