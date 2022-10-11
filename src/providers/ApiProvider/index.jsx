import { createContext, useState } from "react";

import { viaCEP } from "../../services";

export const ApiContext = createContext([]);

function ApiProvider({ children }) {
  const [infos, setInfos] = useState([]);
  const cepInfos = (cepRequest) => {
    viaCEP
      .get(`${cepRequest}/json/`)
      .then((res) => setInfos(res.data))
      .catch((err) => console.log(err));
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
