import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import humps from "humps";
import { JobStatuses, Company, Job } from "./types/moberries-entities";
import { isEmpty, map, isNil } from "ramda";

export function camelizeInterceptor(res: AxiosResponse) {
  if (typeof window !== "undefined" && res.data instanceof window.Blob) {
    return res;
  }

  res.data = humps.camelizeKeys(res.data);
  return res;
}

export function pageToOffsetInterceptor(req: AxiosRequestConfig) {
  if (req.params && req.params.page) {
    const { page, limit, ...params } = req.params;
    const offset = limit * (page - 1);
    req.params = { offset, limit, ...params };
  }

  return req;
}

export function decamelizeInterceptor(req: AxiosRequestConfig) {
  req.data = humps.decamelizeKeys(req.data);
  req.params = humps.decamelizeKeys(req.params);
  return req;
}

export function listToStringInterceptor(req: AxiosRequestConfig) {
  if (!isNil(req.params) && !isEmpty(req.params)) {
    req.params = map(
      (val) => (Array.isArray(val) ? val.join(",") : val),
      req.params
    );
  }
  return req;
}

export const http = axios.create({
  baseURL: "https://api.dev.moberries.com/",
  timeout: 30000,
  headers: {},
});

http.interceptors.response.use(camelizeInterceptor);
http.interceptors.request.use(decamelizeInterceptor);
http.interceptors.request.use(pageToOffsetInterceptor);
http.interceptors.request.use(listToStringInterceptor);

interface BackendListResponse<T> {
  results: T[];
  count: number;
}

type RequestParams = {
  [key: string]: any;
};

export const moberriesApi = {
  getCompanyList: (params?: RequestParams) => {
    return http.get<BackendListResponse<Company>>("/api/v2/partners/", {
      params: { limit: 10, ...params },
    });
  },

  getJobList: (params?: RequestParams) => {
    return http.get<BackendListResponse<Job>>(`/api/v2/jobs/`, {
      params: {
        limit: 10,
        page: 1,
        statusIn: [JobStatuses.ACT],
        ...params,
      },
    });
  },

  getCompany: ({ id }: { id: number }) => http(`/api/v2/companies/${id}/`),
  getCompanyJobList: ({ id, ...rest }: { id: number; [key: string]: any }) => {
    const params = {
      page: 1,
      limit: 10,
      ...rest,
    };
    return http.get<BackendListResponse<Job>>(`/api/v2/companies/${id}/jobs/`, {
      params,
    });
  },
  getJob: ({ id }: { id: number }) => http.get<Job>(`/api/v2/jobs/${id}/`),
  getCompanyGroup: ({ slug }: { slug: string }) =>
    http(`/api/v2/company-groups/${slug}`),

  getCities: (params: ObjectLiteral) => {
    return http.get<any>("/api/v2/cities/", { params });
  },

  getJobRoleCategoryList: (params: any = {}) =>
    http.get("/api/v2/jobrolecategories/", {
      params: { limit: 100, offset: 0, ...params },
    }),
  getJobRoleCategory: ({ id }: { id: number }) =>
    http.get(`/api/v2/jobrolecategories/${id}/`),
};
