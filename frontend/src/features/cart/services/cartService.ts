// decides which API to use

import * as backendApi from "../api/cartApi";
import * as localApi from "../api/cartLocalApi";

export const getCartService = (mode: "frontend" | "fullstack") => {
  return mode === "frontend" ? localApi : backendApi;
};
