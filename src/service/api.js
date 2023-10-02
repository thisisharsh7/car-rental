

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchCarImagesFromAPI = async (numberOfImages, pageNumber) => {
    const url = 'https://api.pexels.com/v1/search';
    const query = 'car';

    try {
        const response = await fetch(`${url}?query=${query}&per_page=${numberOfImages}&page=${pageNumber}`, {
            headers: {
                Authorization: API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const carImages = data.photos.map((photo) => photo.src.large);

        return carImages;
    } catch (error) {
        return error;
    }
};
