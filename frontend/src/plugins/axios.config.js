import axios from "axios";
// import store from "@/store";

axios.defaults.withCredentials = true;

const DEBUG = process.env.NODE_ENV === "development";

const ajaxRequest = axios.create({
  baseURL: `http://${window.location.hostname}:3000/api`,
  headers: {
    "Content-type": "application/json",
  },
});

// Add a request interceptor
ajaxRequest.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    if (DEBUG) {
      console.error("Request failed ", error);
    }

    return Promise.reject(error);
  }
);

// Add a response interceptor
ajaxRequest.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  function (response) {
    // Hide Loading before call ajax
    // store.dispatch("Loading", false);

    return response;
  },

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  function (error) {
    if (DEBUG) {
      console.error("Request failed ", error.response.data);
    }

    // Hide Loading before call ajax
    // store.dispatch("Loading", false);

    return Promise.reject(error);
  }
);

export default ajaxRequest;
