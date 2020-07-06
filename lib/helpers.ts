import { GetServerSidePropsContext, NextPageContext } from "next";
import { Board, BoardSlugs } from "./types";
import { IncomingMessage } from "http";

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
    return { slug: BoardSlugs.Default, subdomain: null };
  }
  const subdomain = getSubdomainFromRequest(req);
  const allCustomBoardSlugs = Object.values(BoardSlugs).filter(
    (bs) => bs !== BoardSlugs.Default
  );
  if (allCustomBoardSlugs.includes(subdomain as BoardSlugs)) {
    return { slug: subdomain as BoardSlugs, subdomain };
  } else {
    return { slug: BoardSlugs.Default, subdomain };
  }
};
