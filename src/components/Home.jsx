import CarPanel from "./CarPanel"
import Pagination from "./Pagination"

import SearchBar from "./SearchBar"


const Home = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen  gap-8">
            <SearchBar />
            <CarPanel />
            <Pagination />
        </div>
    )
}

export default Home