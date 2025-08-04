import { AxiosResponse } from "axios";

export type Response<T> = AxiosResponse<T> | AxiosResponse<ResponseErrorData>;

export type ResponseErrorData = {
  code: number;
  message: string;
  statusCode: number;
};
export type GeneralResponse<T> = {
  data: T;
  mensaje: string;
  rpt: number;
  status: string;
};

export const isResponseError = <T>(
  response: Response<T>
): response is AxiosResponse<ResponseErrorData> => response.status >= 400;

export enum Status {
  SUCCESS = "success",
  ERROR = "error",
}

export enum StateItem {
  ACT = "ACT",
  ANU = "ANU",
}

export const mapStateItemToStateDetail: Record<StateItem, string> = {
  [StateItem.ACT]: "ACTIVO",
  [StateItem.ANU]: "ANULADO",
};
