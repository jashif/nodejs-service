import axios, { AxiosResponse, AxiosError } from "axios";
import https from "https";

const httpClient = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

const makeAxiosRequest = (request: any): Promise<any> => {
  const reqOption = {
    ...request,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  };
  return axios(reqOption)
    .then((response: AxiosResponse) => {
      return Promise.resolve(response);
    })
    .catch((error: AxiosError) => {
      return Promise.resolve(error.response);
    });
};
export { httpClient, makeAxiosRequest };
