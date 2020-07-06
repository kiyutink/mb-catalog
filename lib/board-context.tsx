import React from "react";
import { Board, BoardSlugs } from "./types";

export const BoardContext = React.createContext<Board>({
  slug: BoardSlugs.Default,
  subdomain: null,
});
