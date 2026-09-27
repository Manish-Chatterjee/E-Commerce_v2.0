import * as backendApi from "../api/orderHistoryApi";
import * as localApi from "../api/orderHistoryLocalApi";

export const getOrderHistoryService = (mode: "frontend" | "fullstack") => {
  return mode === "frontend" ? localApi : backendApi;
};