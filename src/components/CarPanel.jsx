import { useEffect, useState } from "react";
import { fetchCarImagesFromAPI } from "../service/api";
import CarCard from "./CarCard";


const CarPanel = () => {
    const [getCarsData, setCarsData] = useState([]);
    

    const getCarDataFromAPI = async () => {
        const data = await fetchCarImagesFromAPI();
        setCarsData(data);
    }



    useEffect(() => {
        getCarDataFromAPI();
    }, [])


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
                getCarsData && getCarsData.map((car, index) => {
                    return (
                        <CarCard key={index} id={car.id} name={car.name} imgSrc={car.imgSrc} year={car.year} seated={car.seated} speed_consumption={car.speed_consumption} model={car.model} engine={car.engine} rent={car.rent} />
                    )
                })
            }

        </div>
    )
}

export default CarPanel