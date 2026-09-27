// decides which API to use

import * as backend from "../api/shopApi";
import * as frontend from "../api/shopLocalApi";

export const getShopService = (mode: "frontend" | "fullstack") => {
  return mode === "frontend" ? frontend : backend;
};
