import { createContext, FC, useState } from "react";

export type GlobalParamsContextType = {
  clinicaId: string;
  setClinicaId: (clinicaId: string) => void;
};
export const GlobalParamsContext = createContext<
  GlobalParamsContextType | undefined
>(undefined);

export const GlobalParamsContextProvider: FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const [clinicaId, setClinicaId] = useState("");
  return (
    <GlobalParamsContext.Provider
      value={{
        setClinicaId,
        clinicaId,
      }}
    >
      {children}
    </GlobalParamsContext.Provider>
  );
};
