import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {blogBigTitleAction} from "../actions/blogBigTitleAction";
import {blogTitleResponse} from "../../models/blogTitleResponse";


type blogsState = {
    blogBigTitles: blogTitleResponse[] | null;
    isLoading: boolean;
    error: string | null;
}


const initialState: blogsState = {
    blogBigTitles: null,
    isLoading: true,
    error: null,
};

const blogBigTitleSlice = createSlice({
    name: 'blogBigTitles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(blogBigTitleAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(blogBigTitleAction.fulfilled, (state, action: PayloadAction<any>) => {
                state.blogBigTitles = action.payload;
                state.isLoading = false;
            })
            .addCase(blogBigTitleAction.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});
export default blogBigTitleSlice.reducer;