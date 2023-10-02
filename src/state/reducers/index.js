import { createSlice } from "@reduxjs/toolkit";
import data from '../../components/data.json';



export const car = createSlice({
    name: 'car',
    initialState: {
        carsAllDetail: data,
        carsInPage: [],
        pageNumber: 0
    },
    reducers: {
        CARPAGE: (state, action) => {
            return { ...state, carsInPage: action.payload };
        },
        CHANGEPAGE: (state, action) => {
            return { ...state, pageNumber: action.payload }
        }
    }
})
export const { CARPAGE, CHANGEPAGE } = car.actions;
export default car.reducer;