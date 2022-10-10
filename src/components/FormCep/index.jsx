import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { ApiContext } from "../../providers/ApiProvider";
import Input from "../Input";

function FormCep() {
  const [number, setNumber] = useState("");
  const { cepInfos } = useContext(ApiContext);

  const schema = yup.object().shape({
    cep: yup
      .number("Valor precisa ser um número")
      .typeError("Obrigatório")
      .required("Campo obrigatório"),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitCep = () => {
    cepInfos(number);
    setValue("cep", "");
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmitCep)}>
        <span>Digite seu CEP!</span>
        <input
          type="text"
          {...register("cep")}
          onChange={(event) => setNumber(event.target.value)}
        />
        {errors.cep && <span>{errors.cep.message}</span>}
        <button>Pesquisar planos</button>
      </form>
    </section>
  );
}

export default FormCep;
