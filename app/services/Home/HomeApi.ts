import axios, { AxiosInstance } from "axios";
import { EmailRequest } from "models/Home";
import { NEXT_PUBLIC_API_CORE } from "../../config";
import {
  DomainErrorCode,
  handleDomainError,
  isNetworkError,
  NetworkError,
  UnknownError,
} from "../../models/Errors";
import {
  GeneralResponse,
  isResponseError,
  Response,
} from "../../models/Response";
import { HomeRepository } from "./HomeRepository";

export class HomeApi implements HomeRepository {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: NEXT_PUBLIC_API_CORE,
    });
    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.error("Error in account api");
        if (isNetworkError(error)) {
          throw new NetworkError();
        } else {
          console.error(error.response);
          if (error.response.status == 401)
            handleDomainError(DomainErrorCode.UNAUTHORIZED);
          return error.response;
        }
      }
    );
  }

  private async getHeaders() {
    return {
      ...(await this.getAuthHeaders()),
    };
  }

  private async getAuthHeaders() {
    return {
      Authorization: "",
    };
  }

  async sendEmail(payload: EmailRequest): Promise<GeneralResponse<String>> {
    const response: Response<GeneralResponse<String>> =
      await this.axiosInstance.post("email/send", payload, {
        headers: await this.getHeaders(),
      });
    if (isResponseError(response)) {
      throw new UnknownError(response.data.message);
    }
    return response.data;
  }
}
