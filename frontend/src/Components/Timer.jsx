import React, { useEffect, useRef } from "react";

export const Timer = () => {
  const timerref = useRef();

  useEffect(() => {
    let t = 1;
    setInterval(() => {
      timerref.current.innerHTML = "Time Elapsed : " + t + " seconds";
      t++;
    }, 1000);
  }, []);
  return (
    <div>
      <div className="text-white text-3xl" ref={timerref}>Starting Timer...</div>
    </div>
  );
};
