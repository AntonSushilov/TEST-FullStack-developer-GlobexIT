import { IResponse } from "./types";

const API_URL = "http://localhost:3000";
const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const requestApi = <T extends IResponse>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  return fetch(API_URL + url, options)
    .then((res) => {
      return checkResponse<T>(res);
    })
    .then((data) => {
      return data;
    });
};
