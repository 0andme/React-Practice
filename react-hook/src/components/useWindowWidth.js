import React, { Component, useEffect, useState } from "react";

function useWindowWidth() {
  const [state, setState] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    const resizeHandle = () => {
      setState((state) => ({ ...state, width: window.innerWidth }));
    };
    window.addEventListener("resize", resizeHandle);
    return () => {
      // cleanup
      // 없으면 렉 엄청 걸림
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);
  return state.width;
}
export default useWindowWidth;
