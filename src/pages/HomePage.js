import BookList from "../components/homepage/BookList"
import HeroSection from "../components/homepage/HeroSection"
import Pagination from "../components/homepage/Pagination"

const HomePage = () => {
    return(
        <>
        <div className="flex flex-col items-center bg-white dark:bg-gray-900">
        <HeroSection />
        <BookList />
        <Pagination />
        </div>
        </>
    )
}

export default HomePage