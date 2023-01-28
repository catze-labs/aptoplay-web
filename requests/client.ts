import axios from "axios";

const client = axios.create({
  // baseURL: "",
  // headers: {},
});

// request interceptor
client.interceptors.request.use((config) => {
  // do something before request is sent
  return config;
});

client.interceptors.response.use((response) => {
  // do something before response is received
  return response;
});

export default client;
