import qs from "qs";
import { IncomingMessage } from "http";
import { Board, BoardLayoutTypes, BoardDataTypes } from "./types/boards";
import { head } from "ramda";

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

export function randomInteger(min: number, max: number) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function sample<T>(array: T[]) {
  if (!array || array.length === 0) return null;
  if (array.length === 1) return head<T>(array);

  return array[randomInteger(0, array.length - 1)];
}

export const popupCenter = (
  url: string,
  title: string,
  w: number,
  h: number
): void => {
  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : window.screen.width;

  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : window.screen.height;

  const left = width / 2 - w / 2 + window.screenLeft;
  const top = height / 2 - h / 2 + window.screenTop;
  const newWindow = window.open(
    url,
    title,
    "scrollbars=yes, width=" +
      w +
      ", height=" +
      h +
      ", top=" +
      top +
      ", left=" +
      left
  );

  if (newWindow?.focus) {
    newWindow.focus();
  }
};

export function getCurrentUrl() {
  return `https://${window.location.hostname}`;
}

export const updateQueryParams = (
  query: ObjectLiteral = {},
  params: ObjectLiteral = {},
  addQueryPrefix = false
) => {
  const updatedQuery = Object.entries({ ...query, ...params }).reduce<
    ObjectLiteral
  >((acc, [key, value]) => {
    if (value !== null && value !== "" && value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {});

  return qs.stringify(updatedQuery, {
    addQueryPrefix,
  });
};
