function Header() {
  return (
    <header className="flex flex-col w-full h-full items-center bg-blue500">
      <section className="flex items-center  w-10/12 h-24 max-w-[1100px]">
        <span className="flex w-1/4 text-center text-white">LOGO </span>
        <div className="sm: hidden md:flex w-3/4 justify-end">
          <button className="mr-10 text-white">Sign Up</button>
          <button className="bg-blue400 text-white w-48 h-10 rounded-full cursor-pointer focus:outline-none">
            Secondary
          </button>
        </div>
      </section>
    </header>
  );
}

export default Header;
