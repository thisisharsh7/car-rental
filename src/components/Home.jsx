import { useDispatch, useSelector } from "react-redux";
import CarPanel from "./CarPanel"
import Pagination from "./Pagination"

import SearchBar from "./SearchBar"
import { fetchCarImagesFromAPI } from "../service/api";
import { SETCARS, SETLOADING } from "../state/reducers";
import { useEffect } from "react";


const Home = () => {
    const { loading } = useSelector((state) => state.carReducer);
    const dispatch = useDispatch();

    const getCarDataFromAPI = async () => {
        const cars = await fetchCarImagesFromAPI();
        dispatch(SETCARS(cars));
    }


    useEffect(() => {
        dispatch(SETLOADING(true));
        getCarDataFromAPI();
    }, [])


    return (
        <div className="flex flex-col md:p-6 sm:p-5 p-2 w-full min-h-screen gap-8">
            <SearchBar />
            {loading ? <div className="text-center w-full h-full ">Loading...</div> : <CarPanel />}
            <Pagination />
        </div>
    )
}

export default Home