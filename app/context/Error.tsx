import React from "react";
import { Nullable } from "../models/common";
import { GeneralErrors } from "../models/error";

type ErrorContext = {
  error: Nullable<ErrorContextProp>;
  setError: (error: Nullable<ErrorContextProp>) => void;
};

export type ErrorContextProp = {
  type: GeneralErrors;
};

const ErrorStateContext = React.createContext<ErrorContext | undefined>(
  undefined
);

export const ErrorProvider: React.FC<{
  defaultValue?: ErrorContextProp["type"];
  children: JSX.Element;
}> = ({ children, defaultValue }) => {
  const [error, setError] = React.useState<ErrorContextProp | null>(
    defaultValue ? { type: defaultValue } : null
  );

  return (
    <ErrorStateContext.Provider value={{ error, setError }}>
      {children}
    </ErrorStateContext.Provider>
  );
};

export function useErrorContext() {
  const context = React.useContext(ErrorStateContext);

  if (typeof context === "undefined") {
    throw new Error("useErrorContext must be used within a ErrorProvider");
  }
  return context;
}
