import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {blogTitleAction} from "../actions/blogTitleAction";
import {blogTitleResponse} from "../../models/blogTitleResponse";

type blogsState = {
    blogTitles: blogTitleResponse[] | null;
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
            })
            .addCase(blogTitleAction.fulfilled, (state, action: PayloadAction<any>) => {
                state.blogTitles = action.payload;
                state.isLoading = false;
            })
            .addCase(blogTitleAction.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});
export default blogTitleSlice.reducer;