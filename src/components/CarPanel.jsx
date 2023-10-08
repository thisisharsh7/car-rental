
import { useSearchParams } from "react-router-dom";
import CarCard from "./CarCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SETFILTER, SETPAGE } from "../state/reducers";


const CarPanel = () => {
    const { allCars, loading, pageNumber } = useSelector((state) => state.carReducer);
    const [getCars, setCars] = useState([]);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('s');

    const fetchData = (query) => {
        if (query) {
            const filterName = allCars.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
            console.log(filterName);
            setCars(filterName);
            dispatch(SETPAGE(1));
            dispatch(SETFILTER(filterName));
        } else {
            setCars(allCars);
        }

    };

    useEffect(() => {
        fetchData(searchQuery);
    }, [searchQuery])




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {
                (!loading && getCars.length) ? getCars.slice((pageNumber - 1) * 6, (pageNumber - 1) * 6 + 6).map((car, index) => {
                    return (
                        <CarCard key={index} id={car.id} name={car.name} imgSrc={car.imgSrc} year={car.year} seated={car.seated} speed_consumption={car.speed_consumption} model={car.model} engine={car.engine} rent={car.rent} />
                    )
                }) : <div className="text-center col-span-full">Data Not Found </div>
            }

        </div>
    )
}

export default CarPanel