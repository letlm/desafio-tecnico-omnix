import FormCep from "../FormCep";
import Lottie from "react-lottie-player";
import internet from "../../animation/internet.json";

function Home() {
  return (
    <section className="flex items-center flex-col w-10/12 max-w-[1100px] h-[950px] md:h-full mt-2 md:mt-20">
      <h4 className="flex text-black text-2xl md:text-3xl font-serif ">
        Seja bem vindo(a) ao maior site de vendas de planos de internet da
        região!
      </h4>
      <div className="flex flex-col items-center justify-center w-full p-0.5 md:w-10/12 h-[650px] md:h-[350px] border border-blue500  rounded-2xl mt-10">
        <span className="flex font-bold font-serif text-base md:text-lg">
          Os melhores planos de internet você só encontra aqui!
        </span>
        <span className="flex font-serif text-base md:text-lg">
          Para encontrar o melhor plano de internet no seu bairro, insira o dado
          abaixo:
        </span>
        <div className="w-full flex justify-center md:justify-evenly items-center flex-col md:flex-row">
          <FormCep />
          <span>
            <Lottie
              loop
              animationData={internet}
              play
              style={{ width: 250, height: 180 }}
            />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Home;
