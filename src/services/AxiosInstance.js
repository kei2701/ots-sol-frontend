import axios from "axios";
import { stringify } from "qs";

const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

export const updateToken = (token) => {
  axiosInstance.defaults.headers["Authorization"] = "Bearer " + token;
};

const handleRequest = async (
  requestMethod,
  url,
  data,
  headers,
  params,
  timeout
) => {
  const result = {
    success: false,
    data: null,
    error: null,
    statusCode: 200,
    errorCode: null,
  };

  if (timeout) {
    axiosInstance.defaults.timeout = timeout;
  } else {
    axiosInstance.defaults.timeout = 1000;
  }

  try {
    let response = null;
    if (requestMethod === axiosInstance.get)
      response = await requestMethod(url, {
        headers: headers,
        params: params,
        paramsSerializer: (params) => {
          return stringify(params, { arrayFormat: "repeat" });
        },
      });
    else
      response = await requestMethod(url, data, {
        headers: headers,
        params: params,
      });

    result.success = true;
    result.data = response.data;
    result.statusCode = requestMethod.status;
  } catch (error) {
    result.error = error.message;
    result.statusCode = error.response?.status;
    if (error.response) {
      result.error = error.response.data.message;
      result.errorCode = error.response.data.statusCode;
    }
  }

  return result;
};

export const get = async (url, params, headers) => {
  return handleRequest(axiosInstance.get, url, null, headers, params);
};

export const getNonAuth = async (url, params, headers) => {
  return handleRequest(
    axiosInstance.get,
    url,
    null,
    { ...headers, Authorization: "" },
    params
  );
};

export const post = async (url, data, headers, timeout) => {
  return handleRequest(axiosInstance.post, url, data, headers, null, timeout);
};

export const postNonAuth = async (url, data, headers, timeout) => {
  return handleRequest(
    axiosInstance.post,
    url,
    data,
    { ...headers, Authorization: "" },
    null,
    timeout
  );
};

export const put = async (url, data, headers, timeout) => {
  return handleRequest(axiosInstance.put, url, data, headers, null, timeout);
};

export const del = async (url, params, headers) => {
  return handleRequest(axiosInstance.delete, url, { headers, params });
};

export default axiosInstance;
