import { ImSearch } from "react-icons/im";

const HeroSection = () => {
  return (
    <>
    <div className="flex justify-center bg-white dark:bg-gray-900">
      <div className="py-8 px-4 sm:px-16 xl:px-48 max-w-[1200px] text-center lg:py-16 bg-white dark:bg-gray-900 mt-[60px]">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          What should I read next ?
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Here at BookHub you can find your book of choice on Science fiction,
          Spirituality, Horror fiction, Historical Fiction and on many more
          Genres.
        </p>
        <div className="relative mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <ImSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Books"
          />
          <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default HeroSection;
