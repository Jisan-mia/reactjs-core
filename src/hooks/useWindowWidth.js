import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [windowSize, setWindowSize] = useState(null);

  const calculateWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    calculateWindowSize();

    window.addEventListener("resize", calculateWindowSize);

    return () => window.removeEventListener("resize", calculateWindowSize);
  }, []);

  return windowSize;
}
