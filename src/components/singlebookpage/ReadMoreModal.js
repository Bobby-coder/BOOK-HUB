import parse from "html-react-parser";
import { RxCross1 } from "react-icons/rx";

const ReadMoreModal = ({
  readMoreModal,
  setReadMoreModal,
  description,
  title,
}) => {
  return (
    <>
      <div
        className={
          readMoreModal
            ? "fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-y-auto h-full bg-white dark:bg-gray-900"
            : "hidden"
        }
      >
        <h2 className="mb-4 text-2xl text-center tracking-tight font-extrabold text-blue-600 dark:text-white">
          {title}
        </h2>
        <p className="text-justify text-gray-500 sm:text-lg dark:text-gray-400 md:text-lg">
          {parse(`${description}`)}
        </p>

        <button
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={() => setReadMoreModal(false)}
        >
          <RxCross1 className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default ReadMoreModal;
