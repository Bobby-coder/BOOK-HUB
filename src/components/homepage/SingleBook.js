import { useNavigate } from "react-router-dom";

const SingleBook = ({ img, id }) => {
  let history = useNavigate();

  return (
    <>
      <div>
        <div className="w-[180px] flex flex-col items-center gap-2 py-3 bg-white border border-gray-200 rounded-xs shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="h-[230px]" src={img} alt="book image" />

          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
             <strong></strong>
          </p>
          <p
            onClick={() => history(`/books/${id}`)}
            target="_blank"
            className="cursor-pointer w-[110px] h-[28px] text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-sm text-sm flex justify-center items-center dark:focus:ring-[#1da1f2]/55"
          >
            See More
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
