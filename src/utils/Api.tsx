import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

const Api = (): AxiosPromise => {
  // const { method, url, data, headers } = props;

  const config: AxiosRequestConfig = {
    url: 'https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@chjesus',
    method: 'GET',
  };

  return axios(config);
};

export default Api;
