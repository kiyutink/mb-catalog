import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import humps from "humps";

export function camelizeInterceptor(res: AxiosResponse) {
  if (typeof window !== "undefined" && res.data instanceof window.Blob) {
    return res;
  }

  res.data = humps.camelizeKeys(res.data);
  return res;
}

export function decamelizeInterceptor(req: AxiosRequestConfig) {
  req.data = humps.decamelizeKeys(req.data);
  req.params = humps.decamelizeKeys(req.params);
  return req;
}
export const http = axios.create({
  baseURL: "https://api.dev.moberries.com/",
  timeout: 30000,
  headers: {},
});

http.interceptors.response.use(camelizeInterceptor);
http.interceptors.request.use(decamelizeInterceptor);

export const moberriesApi = {
  getCompanyList: () => {
    return http("/api/v2/partners/", {
      params: { limit: 10, offset: 0 },
    });
  },

  getJobList: () => {
    const params = {
      limit: 10,
      page: 1,
      statusIn: ["ACT"],
    };

    return http(`/api/v2/jobs/`, {
      params,
    });
  },

  getCompany: ({ id }: { id: number }) => http(`/api/v2/companies/${id}/`),
  getCompanyJobList: ({ id }: { id: number }) => {
    const params = {
      page: 1,
      limit: 10,
    };
    return http(`/api/v2/companies/${id}/jobs/`, {
      params,
    });
  },
  getJob: ({ id }: { id: number }) => http(`/api/v2/jobs/${id}/`),
};
