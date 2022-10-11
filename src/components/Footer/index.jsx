function Footer() {
  return (
    <footer className="flex flex-col w-full h-14 items-center justify-center bg-blue500 fixed bottom-0">
      <section className="flex items-center justify-around w-10/12 h-24 max-w-[1100px]">
        <span className="text-white">© All rights reserved</span>
        <div className="sm:flex items-center md:hidden">
          <button className=" text-white w-12">Login</button>
          <button className="bg-blue400 text-white w-12 h-8 rounded-full cursor-pointer focus:outline-none">
            Sobre
          </button>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
