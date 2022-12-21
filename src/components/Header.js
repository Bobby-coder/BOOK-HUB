import { NavLink } from "react-router-dom";
import { BiSun, BiMoon } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between h-[60px] bg-white border-b-[1px] border-gray-200 px-4 lg:px-32 dark:bg-gray-900 fixed top-0 left-0 w-full z-20">
        <NavLink to="/">
          <div className="flex gap-1 items-center">
            <img src="/images/favicon.png" className="h-12" />

            <h1 class="uppercase font-extrabold tracking-tight leading-none text-gray-900 text-2xl dark:text-white">
              book<span class="text-blue-600 dark:text-blue-500">hub</span>
            </h1>
          </div>
        </NavLink>
        <div className="flex items-center">
          <button>
            <BiSun className="text-blue-600 dark:text-white h-6 w-6" />
          </button>

          <button className="hidden">
            <BiMoon className="text-blue-600 dark:text-white h-6 w-6" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
