import { createContext, useState } from "react";
import { viaCEP } from "../../services";

export const ApiContext = createContext([]);

function ApiProvider({ children }) {
  const [infos, setInfos] = useState([]);
  const cepInfos = (data) => {
    viaCEP.get(`{data}/json`).then((res) => setInfos(res));
  };
  return (
    <ApiContext.Provider
      value={{
        infos,
        setInfos,
        cepInfos,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
