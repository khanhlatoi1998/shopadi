import { createSlice } from "@reduxjs/toolkit";

const reducerPopup = createSlice({
    name: 'addedCartItem',
    initialState: false,
    reducers: {
        hiddenPopupAdded: (state, action) => {
            return state = action.payload;
        },
    },
});

export const addedCartItem = reducerPopup.reducer;
export const {hiddenPopupAdded} = reducerPopup.actions;