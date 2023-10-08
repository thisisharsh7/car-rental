import carData from '../components/data.json';

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchCarImagesFromAPI = async () => {
    const url = 'https://api.pexels.com/v1/search';
    const query = 'luxury car';
    try {
        const response = await fetch(`${url}?query=${query}&per_page=20`, {
            headers: {
                Authorization: API_KEY,
            },
        });

        const data = await response.json();
        const carImages = data.photos.map((photo) => photo.src.large);
        const cars = carData.map((car, index) => ({
            ...car,
            imgSrc: carImages[index % carImages.length]
        }));
        return cars;
    } catch (error) {
        console.log('Fetching data from api got reject due to some reason.');
        const cars = carData;
        return cars;
    }
};

