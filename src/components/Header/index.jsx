function Header() {
  return (
    <header className="flex flex-col w-full h-full items-center bg-blue200">
      <section className="flex items-center  w-10/12 h-24">
        <span className="flex w-1/4 text-center">LOGO </span>
        <div className="sm: hidden md:flex w-3/4 justify-end">
          <button className="mr-10">Sign Up</button>
          <button className="bg-lightgreen w-48 h-10 rounded-full cursor-pointer focus:outline-none">
            Secondary
          </button>
        </div>
      </section>
    </header>
  );
}

export default Header;
