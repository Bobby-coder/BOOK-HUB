import { useState } from "react";
import ReadMoreModal from "./ReadMoreModal";
import parse from "html-react-parser";
import { BiPurchaseTagAlt } from "react-icons/bi";

const BookHeroSection = ({ title, description, img, buyLink }) => {
  const [readMoreModal, setReadMoreModal] = useState(false);
  return (
    <>
      <div
        className={
          readMoreModal ? "hidden" : "mt-[60px]"
        }
      >
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {title}
            </h2>
            <p className="mb-4 text-justify">
              {parse(`${description?.toString().slice(0, 300)} `)}
              <button
                className="text-blue-600 dark:text-white"
                onClick={() => setReadMoreModal(true)}
              >
                ...read more
              </button>
            </p>

            <a
              href={buyLink}
              target="_blank"
              className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
            >
              <BiPurchaseTagAlt className="w-5 h-5 mr-1" />
              Buy this Ebook
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src={img} alt="book image 1" />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={img}
              alt="book image 2"
            />
          </div>
        </div>
      </div>

      <ReadMoreModal
        readMoreModal={readMoreModal}
        setReadMoreModal={setReadMoreModal}
        description={description}
        title={title}
      />
    </>
  );
};

export default BookHeroSection;
