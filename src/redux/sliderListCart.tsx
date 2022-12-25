import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../contains/type";

let nameListCartLocalStorage = 'listCart';
let getListCartLocalStorage: any = localStorage.getItem(nameListCartLocalStorage);
if (!getListCartLocalStorage) {
    localStorage.setItem(nameListCartLocalStorage, JSON.stringify([])); // create localStorage
}
const parserListCart = JSON.parse(getListCartLocalStorage);
const initaialStateListCart: Array<ProductType> = parserListCart;


const reducerCart = createSlice({
    name: 'listCart',
    initialState: initaialStateListCart,
    reducers: {
        addItem: (state, action) => {
            const newState = [...state];
            newState.push(action?.payload);
            state.forEach((item: any) => {
                if (item._id === action.payload._id && item.color === action.payload.color && item.size === action.payload.size)
                    newState.pop();
            })
            localStorage.setItem(nameListCartLocalStorage, JSON.stringify([...newState])); // update localStorage
            return state = [...newState];
        },

        removeItemCart: (state, action) => {
            const newState = [...state];
            const idx = newState.findIndex(x => x._id === action.payload._id);
            if (idx !== -1) {
                newState.splice(idx, 1);
            }
            localStorage.setItem(nameListCartLocalStorage, JSON.stringify([...newState])); // update localStorage
            return state = [...newState];
        },

        updateItemCart: (state, action) => {
            const newState: Array<ProductType> = [];
            const payload = action.payload;
            state.forEach((item, idx) => {
                if (item._id === payload._id && item.color === payload.color && item.size === payload.size) {
                    const newItem = { ...item, quantity: payload.quantity };
                    newState.push(newItem);
                } else {
                    newState.push(item);
                }
            })
            localStorage.setItem(nameListCartLocalStorage, JSON.stringify([...newState])); // update localStorage
            return state = [...newState];
        },
    }
});

export const listCart = reducerCart.reducer;
export const {
    addItem,
    updateItemCart,
    removeItemCart
} = reducerCart.actions;