import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { ApiContext } from "../../providers/ApiProvider";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  const onSubmitCep = () => {
    cepInfos(number);
    setValue("cep", "");
    history.push("/offers");
  };

  return (
    <section className=" bg-blue400 w-[250px] md:w-[300px] h-[200px] mt-10 rounded-md">
      <form
        onSubmit={handleSubmit(onSubmitCep)}
        className="flex flex-col items-center justify-around h-full"
      >
        <span className="flex font-serif text-base md:text-lg text-white">
          Digite seu CEP:
        </span>

        <input
          className="w-11/12 md:w-3/4 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="96075810"
          type="text"
          {...register("cep")}
          onChange={(event) => setNumber(event.target.value)}
        />
        {errors.cep && <span>{errors.cep.message}</span>}
        <button className="bg-blue500 text-white w-48 h-10 rounded-full cursor-pointer focus:outline-none hover:bg-blue400 hover:border border-blue500">
          Pesquisar planos
        </button>
      </form>
    </section>
  );
}

export default FormCep;
