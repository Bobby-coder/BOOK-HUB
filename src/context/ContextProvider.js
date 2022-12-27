import { createContext, useContext, useState } from "react";

const bookContext = createContext();

const ContextProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <bookContext.Provider value={{ bookList, setBookList, page, setPage }}>
      {children}
    </bookContext.Provider>
  );
};

export const useBookContext = () => useContext(bookContext);

export default ContextProvider;
