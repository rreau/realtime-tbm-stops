interface INavbar {
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar = ({ onChangeSearch }: INavbar) => {
  return (
    <nav className="flex flex-row justify-between items-center border-b-2 border-gray-300 mx-5">
      <button className="m-5">
        <i className="fa-solid fa-bars fa-2x"></i>
      </button>
      <i className="fa-solid fa-angles-right fa-2x m-2"></i>
      BIP BIP ET MON TRAM
      <div className="relative flex-auto mx-8 flex items-center">
        <i className="fa-solid fa-magnifying-glass absolute pl-3"></i>
        <input
          className="w-full pl-10 drop-shadow-m bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
          onChange={onChangeSearch}
        />
      </div>
      <a
        className="m-5"
        href="https://github.com/NootNook/realtime-infotbm-stops"
        title="GitHub repository of website"
      >
        <i className="fa-brands fa-github fa-2x"></i>
      </a>
    </nav>
  );
};

export default Navbar;
