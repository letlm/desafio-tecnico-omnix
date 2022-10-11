function CardOffers({ icon, mega, description, value, infos, assinar }) {
  return (
    <div className="flex flex-col items-center justify-evenly border border-blue400 bg-black100 rounded-md w-[270px] h-[350px]">
      <span className="text-white w-full flex flex-row items-center justify-start text-xl ml-5 font-mono">
        {icon} {mega}
      </span>
      <span className="text-white font-serif ">{description}</span>
      <span className="flex items-center justify-center bg-blue400 w-full h-20 text-white text-3xl font-bold font-mono">
        {value}
      </span>
      <span className="text-white font-serif w-11/12">{infos}</span>
      <button className="bg-blue500 text-white w-48 h-10 rounded-full cursor-pointer focus:outline-none hover:bg-blue400 ">
        {assinar}
      </button>
    </div>
  );
}

export default CardOffers;
