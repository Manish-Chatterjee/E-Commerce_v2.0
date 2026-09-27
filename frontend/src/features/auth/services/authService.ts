import * as backendApi from "../api/authApi";
import * as localApi from "../api/authLocalApi";

export const getAuthService = (mode: "frontend" | "fullstack") => {
  return mode === "frontend" ? localApi : backendApi;
};