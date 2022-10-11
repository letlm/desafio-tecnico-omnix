import FormCep from "../FormCep";

function Home() {
  return (
    <section className="flex items-center flex-col w-10/12 h-full  mt-20">
      <h4 className="flex text-black text-2xl md:text-3xl font-serif">
        Seja bem vindo(a) ao maior site de vendas de planos de internet da
        região!
      </h4>
      <div className="flex flex-col items-center w-10/12 h-[350px] border border-blue500  rounded-2xl mt-10 md:mt-20">
        <span className="flex font-serif text-base md:text-lg">
          Os melhores planos de internet você só encontra aqui!
        </span>
        <span className="flex font-serif text-base md:text-lg">
          Para encontrar o melhor plano de internet no seu bairro, insira o dado
          abaixo:
        </span>
        <FormCep />
      </div>
    </section>
  );
}

export default Home;
