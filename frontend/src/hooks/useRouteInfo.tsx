import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const useRouteInfo = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const prevRef = useRef<string>(""); // holds previous path
  const [prevPath, setPrevPath] = useState<string>("");

  useEffect(() => {
    // Only update prevPath if currentPath actually changed
    if (prevRef.current !== currentPath) {
      setPrevPath(prevRef.current);
      prevRef.current = currentPath;
    }
  }, [currentPath]);

  return {
    pathname: currentPath,
    prevPath,
  };
};
