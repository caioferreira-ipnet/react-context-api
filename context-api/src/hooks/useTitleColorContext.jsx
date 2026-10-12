import { TitleColorContext } from "../context/titleColorContext/TitleColorContext";
import { useContext } from "react";
export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);
  if (!context) {
    console.log("Context não encontrado");
  }
  return context;
};
