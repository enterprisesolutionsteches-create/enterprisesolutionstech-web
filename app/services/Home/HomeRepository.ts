import { EmailRequest } from "models/Home";
import { GeneralResponse } from "../../models/Response";

export interface HomeRepository {
  sendEmail(
    payload: EmailRequest
  ): Promise<GeneralResponse<String>>;
}
