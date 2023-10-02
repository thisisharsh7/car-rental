import { useEffect } from "react";
import { fetchCarImagesFromAPI } from "../service/api";
import { useDispatch, useSelector } from "react-redux";
import { CARPAGE } from "../state/reducers";
import CarCard from "./CarCard";


const CarPanel = () => {
    const { carsAllDetail, carsInPage, pageNumber } = useSelector((state) => state.carReducer)
    const dispatch = useDispatch();

    const addImgToDetail = (carImages, pageNumber) => {
        const k = pageNumber * 6;
        const carsWithImages = carsAllDetail.slice(0 + k, 6 + k).map((car, index) => ({
            ...car,
            imgSrc: carImages[index % carImages.length]
        }));
        dispatch(CARPAGE(carsWithImages));

    }

    const getCarImages = async (numberOfImages, pageNumber) => {
        let carImages = [];
        try {
            carImages = await fetchCarImagesFromAPI(numberOfImages, pageNumber + 1);
            addImgToDetail(carImages, pageNumber);
        } catch (error) {
            console.log(error);
            addImgToDetail(carImages, pageNumber);
        }

    }



    useEffect(() => {
        getCarImages(6, pageNumber);
    }, [pageNumber])


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
                carsInPage && carsInPage.map((car, index) => {
                    return (
                        <CarCard key={index} id={car.id} name={car.name} imgSrc={car.imgSrc} launch={car.launch} seated={car.seated} speed_consumption={car.speed_consumption} system={car.system} type={car.type} rent={car.rent} />
                    )
                })
            }

        </div>
    )
}

export default CarPanel