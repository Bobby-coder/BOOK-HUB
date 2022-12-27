import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookHeroSection from "../components/singlebookpage/BookHeroSection";

const SingleBookPage = () => {
  const [singleBookData, setSingleBookData] = useState({});
  const { id } = useParams();
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyAhGY-2G7H3XoXVn1szey9QjHpIQ9V60ro`
    );
    setSingleBookData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <BookHeroSection
          title={singleBookData.volumeInfo?.title}
          description={singleBookData.volumeInfo?.description}
          img={singleBookData.volumeInfo?.imageLinks?.small}
          buyLink={singleBookData.saleInfo?.buyLink}
        />
      </div>
    </>
  );
};

export default SingleBookPage;
