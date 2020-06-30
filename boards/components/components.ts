import LhoftComponents from "./lhoft/lhoft-components";
import DefaultComponents from "./default/default-components";
import { BoardSlugs } from "../../lib/types";

export const getComponentCollection = (slug: BoardSlugs) => {
  return {
    [BoardSlugs.Lhoft]: LhoftComponents,
    [BoardSlugs.Default]: DefaultComponents,
  }[slug];
};
