import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ApiContext } from "../../providers/ApiProvider";
import CardOffers from "../CardOffers";
import { AiOutlineWifi } from "react-icons/ai";

function Infos() {
  const { infos, setInfos } = useContext(ApiContext);

  const history = useHistory();

  const returnDashboard = () => {
    history.push("/");
    setInfos([]);
  };

  return (
    <section className="flex flex-col w-10/12 h-full items-center justify-center">
      <div className=" w-full max-w-[1100px] h-[200px] mb-10 mt-10">
        <h3 className="sm:text-lg md:text-3xl font-serif font-bold text-blue500">
          Informações sobre sua região:
        </h3>
        <div className="flex flex-col border border-blue400 rounded-md p-5">
          <span className="text-blue400 font-bold font-sans sm:text-base md:text-lg">
            CEP: {infos.cep}
          </span>
          <span className="text-blue400 font-sans text-base">
            {infos.logradouro} - {infos.complemento}
          </span>

          <span className="text-blue400 font-sans text-base">
            Bairro: {infos.bairro}
          </span>
          <span className="text-blue400 font-sans text-base">
            {infos.localidade} - {infos.uf}
          </span>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-1 justify-center items-center">
        <CardOffers
          icon={<AiOutlineWifi size={28} />}
          mega="250 Mega"
          description="Assine 250 Mega e leve 350 Mega"
          value="R$ 99,90/mês"
          infos="Ligações ilimitadas(Brasil), WhatsApp + Apps à vontade"
          assinar="Assinar"
        />
        <CardOffers
          icon={<AiOutlineWifi size={28} />}
          mega="450 Mega"
          description="Assine 350 Mega e leve 450 Mega"
          value="R$ 119,90/mês"
          infos="Ligações ilimitadas(Brasil), APPTV e +100 canais"
          assinar="Assinar"
        />
        <CardOffers
          icon={<AiOutlineWifi size={28} />}
          mega="550 Mega"
          description="Assine 450 Mega e leve 550 Mega"
          value="R$ 139,90/mês"
          infos="Ligações ilimitadas(Brasil), WhatsApp + APPTV e +100 canais"
          assinar="Assinar"
        />
      </div>
      <div className="flex w-full max-w-[1100px] justify-end mt-10 mb-20">
        <button
          className="bg-blue500 text-white w-48 h-10 rounded-full cursor-pointer focus:outline-none hover:bg-blue400"
          onClick={() => returnDashboard()}
        >
          Ops, errei meu cep!
        </button>
      </div>
    </section>
  );
}

export default Infos;
