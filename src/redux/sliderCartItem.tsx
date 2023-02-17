import { createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../contains/type";

const initialStateCartItem: CartItemType = {
    _id: '',
    image: '',
    name: '',
    color: '',
    size: '',
    slug: '',
    price: 0,
    oldPrice: 0,
    quantity: 0,
};

const reducerCartItem = createSlice({
    name: 'cartItem',
    initialState: initialStateCartItem,
    reducers: {
        get: (state, action) => {
            return state;
        }
    }
});

export const cartItem = reducerCartItem.reducer;
export const { get } = reducerCartItem.actions;