import { useContext } from "react";
import { DependencyContainerContext } from "../context/DependencyContainer/DependencyContainerContext";

export const useHomeModule = () => {
  const dependencies = useContext(DependencyContainerContext);
  if (!dependencies) {
    throw new Error(
      "useHomeModule must be used within an DependencyContainerContext"
    );
  }
  return { homeModule: dependencies.home };
};
