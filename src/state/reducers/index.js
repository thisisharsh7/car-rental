import { createSlice } from "@reduxjs/toolkit";



export const car = createSlice({
    name: 'car',
    initialState: {
        allCars: [],
        allCars2: [],
        loading: false,
        pageNumber: 1
    },
    reducers: {
        SETCARS: (state, action) => {
            return { ...state, allCars: action.payload, allCars2: action.payload, loading: false };
        },
        SETFILTER: (state, action) => {
            return { ...state, allCars2: action.payload, loading: false };
        },
        SETLOADING: (state, action) => {
            return { ...state, loading: action.payload };
        },
        SETPAGE: (state, action) => {
            return { ...state, pageNumber: action.payload, loading: false }
        }
    }
})
export const { SETPAGE, SETCARS, SETFILTER, SETLOADING } = car.actions;
export default car.reducer;