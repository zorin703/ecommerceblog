import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BlogResponse} from "../../models/blogResponse";
import {blogAction} from "../actions/blogAction";


type blogsState = {
    blogPost: BlogResponse[] | null;
    isLoading: boolean;
    error: string | null;
}


const initialState: blogsState = {
    blogPost: null,
    isLoading: true,
    error: null,
};

const blogSlice = createSlice({
    name: 'blogBigTitles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(blogAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(blogAction.fulfilled, (state, action: PayloadAction<any>) => {
                state.blogPost = action.payload;
                state.isLoading = false;
            })
            .addCase(blogAction.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});
export default blogSlice.reducer;