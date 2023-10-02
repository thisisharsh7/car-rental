import { configureStore } from "@reduxjs/toolkit"
import carReducer from './reducers/index';
//from this file we are managing the store
export default configureStore({
    reducer: {
        carReducer,
    }
}, window._REDUX_DEVTOOLS_EXTENSIONS && window._REDUX_DEVTOOLS_EXTENSIONS())