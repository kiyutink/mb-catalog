import {
  CommonDataAdapter,
  CommonIndexPageProps,
  CommonJobPageProps,
} from "./common";
import { BoardDataTypes, Board } from "../lib/types/boards";
import { DefaultDataAdapter, DefaultIndexPageProps } from "./default";
import { AbstractDataAdapter } from "./abstract-data-adapter";

export type IndexPageProps = CommonIndexPageProps | DefaultIndexPageProps;
export type JobPageProps = CommonJobPageProps;

export const getDataAdapter = async (
  board: Board
): Promise<AbstractDataAdapter<IndexPageProps, JobPageProps>> => {
  let Adapter;

  switch (board.dataType) {
    default:
    case BoardDataTypes.Common:
      Adapter = CommonDataAdapter;
      break;

    case BoardDataTypes.Default:
      Adapter = DefaultDataAdapter;
      break;
  }
  const adapter = new Adapter(board);
  await adapter.init();
  return adapter;
};
