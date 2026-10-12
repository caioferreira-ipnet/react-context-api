import { TitleColorContext } from "./TitleColorContext.jsx";
import { useMemo, useReducer } from "react";
import { titleColorReducer } from "../../utils/titleColorReducer.jsx";

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  //  Memoriza o valor para evitar re-renderizações desnecessárias
  const contextValue = useMemo(() => ({ ...state, dispatch }), [state]);
  return (
    <TitleColorContext.Provider value={contextValue}>
      {children}
    </TitleColorContext.Provider>
  );
};
