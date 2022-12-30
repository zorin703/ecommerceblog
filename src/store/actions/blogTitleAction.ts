import {createAsyncThunk} from "@reduxjs/toolkit";
import {blogTitleAPI} from "../../api/api";
import {Axios, AxiosResponse} from "axios";
import {blogTitleResponse} from "../../models/blogTitleResponse";

export const blogTitleAction = createAsyncThunk<AxiosResponse<blogTitleResponse>, undefined, { rejectValue: string }>(
    "blogTitles/blogTitleAction",
    async function (_, {rejectWithValue}) {
        try {
            const response: AxiosResponse = await blogTitleAPI.blogTitle();

            const data = response.data.movies;
            return data;
        } catch (e) {
            return rejectWithValue('Server error');
        }
    }
)