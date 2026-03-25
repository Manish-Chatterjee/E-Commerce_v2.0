import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export const useRouteInfo = () => {
  const location = useLocation();

  const prevRef = useRef<string | null>(null);
  const currentPath = location.pathname;

  useEffect(() => {
    prevRef.current = currentPath;
  }, [currentPath]);

  return {
    pathname: currentPath,
    prevPath: prevRef.current,
  };
};