import LhoftComponents from "./lhoft/lhoft-components";
import DefaultComponents from "./default/default-components";
import { Boards } from "../../lib/types";

export const getComponentCollection = (slug: Boards) => {
  return {
    [Boards.Lhoft]: LhoftComponents,
    [Boards.Default]: DefaultComponents,
  }[slug];
};
