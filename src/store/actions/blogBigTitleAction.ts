import {createAsyncThunk} from "@reduxjs/toolkit";
import {blogTitleAPI} from "../../api/api";
import {AxiosResponse} from "axios";
import {blogTitleResponse} from "../../models/blogTitleResponse";

export const blogBigTitleAction = createAsyncThunk<AxiosResponse<blogTitleResponse>, undefined, { rejectValue: string }>(
    "blogTitles/blogBigTitleAction",
    async function (_, {rejectWithValue}) {
        try {
            const response: AxiosResponse = await blogTitleAPI.blogBigTitle();
            console.log(response.data.titles);
            const data = response.data.titles;
            return data;
        } catch (e) {
            return rejectWithValue('Server error');
        }
    }
)