import { useEffect, useState } from "react";
import data from './data.json';
import { fetchCarImagesFromAPI } from "./service/api";


const CarPanel = () => {
    const [carsDetail, setCarsdetail] = useState([]);

    const addImgToDetail = (carImages, pageNumber) => {
        const k = pageNumber * 6;
        const carsWithImages = data.slice(0 + k, 6 + k).map((car, index) => ({
            ...car,
            imgSrc: carImages[index % carImages.length]
        }));

        setCarsdetail(carsWithImages);
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
        getCarImages(6, 0);
    }, [])


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {
                carsDetail && carsDetail.map((car, index) => {
                    return (
                        <div className="max-w-md rounded-xl overflow-hidden shadow-lg bg-white" key={index}>
                            <div className="px-3 py-3.5">
                                <img src={car.imgSrc} className="w-full h-48 object-cover rounded-xl" />
                                <div>
                                    <div>{car.name} </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default CarPanel