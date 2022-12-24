import { configureStore } from '@reduxjs/toolkit';
import { listCart } from './sliderListCart';
import { cartItem } from './sliderCartItem';
import { dataPosts } from './sliderPost';

const rootReducer = {
    dataPosts: dataPosts,
    listCart: listCart,
    cartItem: cartItem
}

const store = configureStore({
    reducer: rootReducer
})

export default store;