import { useBookContext } from "../../context/ContextProvider";
import { MdFirstPage, MdLastPage } from "react-icons/md";

const Pagination = () => {
  const { bookList, page, setPage } = useBookContext();
  return (
    <>
      <ul className="flex items-center mb-8">
        {bookList.length / 10 > 1 && (
          <li
            onClick={() => page > 1 && setPage(page - 1)}
            className="cursor-pointer block px-3 py-2 ml-0 leading-tight bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
          >
            <MdFirstPage className="w-5 h-5 " />
          </li>
        )}
        {bookList.length / 10 > 1 &&
          [...Array(bookList.length / 10)].map((_, ind) => {
            return (
              <li
                onClick={() => setPage(ind + 1)}
                key={ind}
                className="cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {ind + 1}
              </li>
            );
          })}

        {bookList.length / 10 > 1 && (
          <li
            onClick={() => page < bookList.length / 10 && setPage(page + 1)}
            className="cursor-pointer block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <MdLastPage className="w-5 h-5" />
          </li>
        )}
      </ul>
    </>
  );
};

export default Pagination;
