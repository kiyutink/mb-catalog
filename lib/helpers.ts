import { IncomingMessage } from "http";
import { Board, BoardLayoutTypes, BoardDataTypes } from "./types/boards";

export const getSubdomainFromRequest = (
  req: IncomingMessage
): string | null => {
  const hostParts = req.headers.host?.split(".") ?? [];
  if (hostParts?.length > 2) {
    return hostParts[0];
  } else {
    return null;
  }
};

export const getBoard = (req?: IncomingMessage): Board => {
  if (!req) {
    return {
      layoutType: BoardLayoutTypes.Default,
      dataType: BoardDataTypes.Common,
      subdomain: null,
    };
  }
  const subdomain = getSubdomainFromRequest(req);
  switch (subdomain) {
    case null:
    case undefined:
    case "www":
    case "jobs":
      return {
        layoutType: BoardLayoutTypes.Default,
        dataType: BoardDataTypes.Common,
        subdomain,
      };

    case "lhoft": {
      return {
        layoutType: BoardLayoutTypes.Lhoft,
        dataType: BoardDataTypes.Default,
        subdomain,
      };
    }

    case "remote":
      return {
        layoutType: BoardLayoutTypes.Remote,
        dataType: BoardDataTypes.Remote,
        subdomain,
      };

    default: {
      return {
        layoutType: BoardLayoutTypes.Default,
        dataType: BoardDataTypes.Default,
        subdomain,
      };
    }
  }
};
