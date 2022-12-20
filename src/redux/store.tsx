import { configureStore } from '@reduxjs/toolkit';
import { listCart } from './sliderCart';
import { dataPosts } from './sliderPost';

const rootReducer = {
    dataPosts: dataPosts,
    listCart: listCart
}

const store = configureStore({
    reducer: rootReducer
})

export default store;