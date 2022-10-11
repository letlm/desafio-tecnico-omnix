import { createContext, useState } from "react";
import { viaCEP } from "../../services";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const ApiContext = createContext([]);

function ApiProvider({ children }) {
  const [infos, setInfos] = useState([]);

  const history = useHistory();
  const cepInfos = (cepRequest) => {
    viaCEP
      .get(`${cepRequest}/json/`)
      .then((res) => {
        if (res.data.erro) {
          toast.error("CEP não encontrado, por favor digitar um cep válido!");
        } else {
          setInfos(res.data);
          history.push("/offers");
        }
      })
      .catch(() => toast.error("Ocorreu um erro, por favor tente novamente!"));
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
