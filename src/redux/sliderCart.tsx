import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../contains/type";

const initaialStateListCart: Array<ProductType> = [];


const reducerCart = createSlice({
    name: 'listCart',
    initialState: initaialStateListCart,
    reducers: {
        addItem: (state, action) => {
            const newState = [...state];
            newState.push(action?.payload);
            state.forEach((item: any) => {
                if (item._id === action.payload._id) 
                    newState.pop();
            })
            return state = [...newState];
        }, 
    }
});

export const listCart = reducerCart.reducer;
export const { addItem } = reducerCart.actions;