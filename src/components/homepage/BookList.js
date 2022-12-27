import { useBookContext } from "../../context/ContextProvider";
import SingleBook from "./SingleBook";
import { useEffect } from "react";
import axios from "axios";

const BookList = () => {
  const { bookList, setBookList, page } = useBookContext();

  const defaultSearch = async () => {
    try {
      let { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=7&filter=ebooks&key=AIzaSyAhGY-2G7H3XoXVn1szey9QjHpIQ9V60ro`
      );
      setBookList(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    defaultSearch();
  }, []);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-4 pb-10">
        {bookList.slice(page * 10 - 10, page * 10).map((currEle) => {
          return (
            <div key={currEle.id}>
              <SingleBook
                img={
                  currEle.volumeInfo.imageLinks &&
                  currEle.volumeInfo.imageLinks.thumbnail
                }
                id={currEle.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BookList;
