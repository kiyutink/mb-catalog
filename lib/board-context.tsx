import React from "react";
import { BoardLayoutTypes, BoardDataTypes, Board } from "./types/boards";

export const BoardContext = React.createContext<Board>({
  layoutType: BoardLayoutTypes.Default,
  dataType: BoardDataTypes.Common,
  subdomain: null
});
