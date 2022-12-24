import { createContext, useContext, useState } from "react";

const bookContext = createContext();

const ContextProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);

  return (
    <bookContext.Provider value={{ bookList, setBookList }}>
      {children}
    </bookContext.Provider>
  );
};

export const useBookContext = () => useContext(bookContext);

export default ContextProvider;
