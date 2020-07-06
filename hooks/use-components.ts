import { useContext } from "react";
import { BoardContext } from "../lib/board-context";
import { getComponentCollection } from "../components/components";

export const useComponents = () => {
  const board = useContext(BoardContext);
  return getComponentCollection(board.slug);
};
