import {createAsyncThunk} from "@reduxjs/toolkit";
import {blogTitleResponse} from "../../models/blogTitleResponse";
import {blogTitleAPI} from "../../api/api";
import {AxiosResponse} from "axios";

export const blogTitleAction = createAsyncThunk<blogTitleResponse, null, { rejectValue: string }>(
    "blogTitles/blogTitleAction",
    async function (_, {rejectWithValue}) {
        try {
            const response: AxiosResponse<blogTitleResponse> = await blogTitleAPI.blogTitle();
            console.log(response);
            const data = await response.data.;
            return data;
        } catch (e) {
            return rejectWithValue('Server error');
        }
    }
)