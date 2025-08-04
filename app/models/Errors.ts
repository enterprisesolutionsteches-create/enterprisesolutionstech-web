export enum DomainErrorCode {
    UNKNOWN = "UNKNOWN",
    NETWORK_ERROR = "NETWORK_ERROR",
    UNAUTHORIZED = "UNAUTHORIZED",
  }
  export const isNetworkError = (error: Error) =>
    error.message === "Network Error";
  
  export const isDomainErrorCode = (
    errorCode: string
  ): errorCode is DomainErrorCode => errorCode in DomainErrorCode;
  
  export const handleDomainError = (
    errorCode: string,
    message?: string,
    data?: unknown
  ) => {
    if (isDomainErrorCode(errorCode)) {
      throw errorCodeToDomainErrorMap[errorCode](message, data);
    }
  };
  export const errorCodeToDomainErrorMap: Record<
    DomainErrorCode,
    (message?: string, data?: unknown) => DomainError
  > = {
    [DomainErrorCode.UNKNOWN]: () => new UnknownError(),
    [DomainErrorCode.UNAUTHORIZED]: () => new UnauthorizedError(),
    [DomainErrorCode.NETWORK_ERROR]: () => new NetworkError(),
  };
  
  export class DomainError extends Error {
    constructor(public readonly code: DomainErrorCode, message: string) {
      super(message);
    }
  }
  export class UnknownError extends DomainError {
    constructor(message?: string) {
      super(
        DomainErrorCode.UNKNOWN,
        `Unknown Error ${message ? `: ${message}` : ""}`
      );
    }
  }
  export class NetworkError extends DomainError {
    constructor() {
      super(DomainErrorCode.NETWORK_ERROR, "Network Error");
    }
  }
  
  export class UnauthorizedError extends DomainError {
    constructor() {
      super(
        DomainErrorCode.UNAUTHORIZED,
        "Unauthorized, we should redirect to login"
      );
    }
  }
  