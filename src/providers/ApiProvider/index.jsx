import { createContext, useState } from "react";
import { viaCEP } from "../../services";
import { toast } from "react-toastify";

export const ApiContext = createContext([]);

function ApiProvider({ children }) {
  const [infos, setInfos] = useState([]);
  const cepInfos = (cepRequest) => {
    viaCEP
      .get(`${cepRequest}/json/`)
      .then((res) => setInfos(res.data))
      .catch(() =>
        toast("❌ Ocorreu um erro, por favor tente novamente!", {
          className: "toastify-color-progress-error",
        })
      );
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
