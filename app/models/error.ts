export type Error = {
  error: GeneralError;
  message: string;
  statusCode: number;
};

export type GeneralError = {
  code: GeneralErrors;
  message: string;
  statusCode?: number;
};

export enum GeneralErrors {
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  NO_INTERNET_CONNECTION = "NO_INTERNET_CONNECTION",
  FORBIDDEN = "Forbidden",
  COUNTRY_IS_IN_USE = "COUNTRY_CANNOT_DELETED",
}
