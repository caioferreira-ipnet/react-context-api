import { CounterContext } from "../context/counterContext/CounterContext.jsx";
import { useContext } from "react";
export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    console.log("Context não encontrado");
  }
  return context;
};
