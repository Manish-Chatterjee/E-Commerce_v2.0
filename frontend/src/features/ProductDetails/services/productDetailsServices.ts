import * as backendApi from "../api/productDetailsApi";
import * as localApi from "../api/productDetailsLocalApi";

export const getProductDetailsService = (
  mode: "frontend" | "fullstack"
) => {
  return mode === "frontend" ? localApi : backendApi;
};