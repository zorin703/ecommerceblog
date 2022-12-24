// @ts-ignore
import {createSlice} from "@reduxjs/toolkit";
import {blogTitleAction} from "../actions/blogTitleAction";
import {isatty} from "tty";
import {blogTitleResponse} from "../../models/blogTitleResponse";

type blogsState = {
    blogTitles: blogTitleResponse[];
    isLoading: boolean;
    error: string | null;
}

const initialState: blogsState = {
    blogTitles: [],
    isLoading: true,
    error: null,
};



// @ts-ignore
const blogTitleSlice = createSlice({
    name: 'blogTitles',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
            .addCase(blogTitleAction.pending, (state)=>{
                state.isLoading = true;
                state.error = null;
            })
            .addCase(blogTitleAction.fulfilled, (state, action) =>{
                // @ts-ignore
                state.blogTitles = action.payload;
                state.isLoading = false;
            })

    }
        // // @ts-ignore
        // [blogTitleAction.pending]: (state: { status: boolean; error: null; }) => {
        //     state.status = false;
        //     state.error = null;
        // },
        // // @ts-ignore
        // [blogTitleAction.fulfilled]: (state: { status: boolean; blogTitles: any; }, action: { payload: any; }) => {
        //     state.status = true;
        //     state.blogTitles = action.payload;
        // },
        // // @ts-ignore
        // [blogTitleAction.rejected]: (state: { status: boolean; error: any; }, action: { payload: any; }, ) => {
        //     state.status = true;
        //     state.error = action.payload;
        // }

});


export default blogTitleSlice.reducer;