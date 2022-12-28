import { configureStore } from '@reduxjs/toolkit';
import { listCart } from './sliderListCart';
import { cartItem } from './sliderCartItem';
import { dataPosts } from './sliderPost';
import { addedCartItem } from './sliderPopup';

const rootReducer = {
    dataPosts: dataPosts,
    listCart: listCart,
    cartItem: cartItem,
    addedCartItem: addedCartItem
}

const store = configureStore({
    reducer: rootReducer
})

export default store;