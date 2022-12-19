import { createSlice } from "@reduxjs/toolkit";
import { DataPostsType, PostType } from "../contains/type";

const initialStatePost: DataPostsType = {
    data: [],
    total: 0,
    limit: 0,
    page: 0
};

const reducerListPost = createSlice({
    name: 'dataPosts',
    initialState: initialStatePost,
    reducers: {
        getDataPosts: (state, action) => {
            return state = action?.payload;
        }
    }
});

export const dataPosts = reducerListPost.reducer;
export const { getDataPosts } = reducerListPost.actions;