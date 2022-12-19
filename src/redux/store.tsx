import { configureStore } from '@reduxjs/toolkit';
import { dataPosts } from './sliderPost';

const rootReducer = {
    dataPosts: dataPosts
}

const store = configureStore({
    reducer: rootReducer
})

export default store;