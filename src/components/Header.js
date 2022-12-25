import { NavLink } from "react-router-dom";
import { BiSun, BiMoon } from "react-icons/bi";
import { useState, useEffect } from "react";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav className="flex items-center justify-between h-[60px] bg-white border-b-2 border-solid dark:border-gray-700 px-4 lg:px-32 dark:bg-gray-900 fixed top-0 left-0 w-full z-20">
        <NavLink to="/">
          <div className="flex gap-1 items-center">
            <img src="/images/favicon.png" className="h-12" />

            <h1 className="uppercase font-extrabold tracking-tight leading-none text-gray-900 text-2xl dark:text-white">
              book<span className="text-blue-600 dark:text-blue-500">hub</span>
            </h1>
          </div>
        </NavLink>
        <div className="flex items-center">
          <button onClick={handleTheme}>
            <BiSun
              className={
                theme === "light"
                  ? "text-blue-600 dark:text-white h-6 w-6"
                  : "hidden"
              }
            />
          </button>

          <button onClick={handleTheme}>
            <BiMoon
              className={
                theme === "dark"
                  ? "text-blue-600 dark:text-white h-5 w-5"
                  : "hidden"
              }
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
