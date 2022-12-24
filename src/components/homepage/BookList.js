import { useBookContext } from "../../context/ContextProvider";
import SingleBook from "./SingleBook";

const BookList = () => {
  const { bookList } = useBookContext();
  return (
    <>
      <div className="flex justify-center flex-wrap gap-4 pb-16 bg-white dark:bg-gray-900">
        {bookList.map((currEle) => {
          
          return (
            <SingleBook
              img={
                currEle.volumeInfo.imageLinks &&
                currEle.volumeInfo.imageLinks.thumbnail
              }
              publisher={currEle.volumeInfo?.publisher}
              id={currEle.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default BookList;
