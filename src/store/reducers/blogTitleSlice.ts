import {createSlice} from "@reduxjs/toolkit";
import {blogTitleAction} from "../actions/blogTitleAction";
import {blogTitleResponse} from "../../models/blogTitleResponse";

type blogsState = {
    blogTitles: blogTitleResponse;
    isLoading: boolean;
    error: string | null;
}


const initialState: blogsState = {
    blogTitles: [],
    isLoading: true,
    error: null,
};

const blogTitleSlice = createSlice({
    name: 'blogTitles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(blogTitleAction.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(blogTitleAction.fulfilled, (state, action) => {
                state.blogTitles = action.payload;
                state.isLoading = false;
            })
            .addCase(blogTitleAction.rejected, (state, action) =>{
            state.isLoading = false;

                // @ts-ignore
                state.error = action.payload;
        })
    }
});

export default blogTitleSlice.reducer;