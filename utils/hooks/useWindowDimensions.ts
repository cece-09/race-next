import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [wDimensions, setWDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return wDimensions;
}
