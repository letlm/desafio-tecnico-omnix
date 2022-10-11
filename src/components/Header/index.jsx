function Header() {
  return (
    <header className="flex flex-col w-full h-24 items-center bg-blue500">
      <section className="flex items-center  w-10/12 h-24 max-w-[1100px]">
        <img
          className="flex w-1/4 h-[50px] text-center text-white"
          src="https://omnixdigital.com.br/logo-negative.svg"
          alt="OMNIX"
        />
        <div className="sm: hidden md:flex w-3/4 justify-end">
          <button className="mr-10 text-white">Login</button>
          <button className="bg-blue400 text-white w-48 h-10 rounded-full cursor-pointer focus:outline-none">
            Sobre
          </button>
        </div>
      </section>
    </header>
  );
}

export default Header;
