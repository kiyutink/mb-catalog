import LhoftComponents from "./lhoft/lhoft-components";
import DefaultComponents from "./default/default-components";
import { BoardLayoutTypes } from "../lib/types/boards";

export const getComponentCollection = (layoutType: BoardLayoutTypes) => {
  return {
    [BoardLayoutTypes.Lhoft]: LhoftComponents,
    [BoardLayoutTypes.Default]: DefaultComponents,
    [BoardLayoutTypes.Remote]: DefaultComponents,
  }[layoutType];
};
