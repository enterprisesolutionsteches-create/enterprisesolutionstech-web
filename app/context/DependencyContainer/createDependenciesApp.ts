import { HomeApi } from "../../services/Home/HomeApi";
import { DependencyContainer } from "./DependencyContainerContext";

export function createDependencies(): DependencyContainer {
  const home = new HomeApi();
  return {
    home,
  };
}
