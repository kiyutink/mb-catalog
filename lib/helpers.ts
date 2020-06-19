import { GetServerSidePropsContext } from "next";
export const getBoard = (context: GetServerSidePropsContext) => {
  const hostParts = context.req.headers.host?.split(".") ?? [];
  if (hostParts?.length > 2) {
    const subdomain = hostParts[0];
    return subdomain === "www" ? "default" : subdomain;
  } else {
    return "default";
  }
};
