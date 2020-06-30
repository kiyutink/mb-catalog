import { GetServerSidePropsContext } from "next";
import { Board, BoardSlugs } from "./types";

export const getSubdomain = (
  context: GetServerSidePropsContext
): string | null => {
  const hostParts = context.req.headers.host?.split(".") ?? [];
  if (hostParts?.length > 2) {
    return hostParts[0];
  } else {
    return null;
  }
};

export const getBoard = (context: GetServerSidePropsContext): Board => {
  const subdomain = getSubdomain(context);
  const allCustomBoardSlugs = Object.values(BoardSlugs).filter(
    (bs) => bs !== BoardSlugs.Default
  );
  if (allCustomBoardSlugs.includes(subdomain as BoardSlugs)) {
    return { slug: subdomain as BoardSlugs, subdomain };
  } else {
    return { slug: BoardSlugs.Default, subdomain };
  }
};
