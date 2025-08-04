import { EmailRequest } from "models/Home";
import { useMutation } from "react-query";
import { useHomeModule } from "../../hooks/useHomeModule";

export const useSendEmail = () => {
  const { homeModule } = useHomeModule();
  const mutation = useMutation((payload: EmailRequest) =>
    homeModule.sendEmail(payload)
  );
  return { ...mutation, sendEmail: mutation.mutateAsync };
};
