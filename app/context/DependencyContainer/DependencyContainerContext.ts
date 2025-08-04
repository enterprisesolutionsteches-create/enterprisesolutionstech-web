import { createContext } from "react";
import { HomeRepository } from "../../services/Home/HomeRepository";

export interface DependencyContainer {
  home: HomeRepository;
}
export const DependencyContainerContext =
  createContext<DependencyContainer | null>(null);
