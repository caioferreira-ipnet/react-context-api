import { useState, useMemo } from "react";
import { CounterContext } from "../context/CounterContext.jsx";
//Provider
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);
  const value = useMemo(() => ({ counter, setCounter }), [counter]);
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
