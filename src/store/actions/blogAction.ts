import {createAsyncThunk} from "@reduxjs/toolkit";
import {blogTitleAPI} from "../../api/api";
import {AxiosResponse} from "axios";
import {blogTitleResponse} from "../../models/blogTitleResponse";
import {BlogResponse} from "../../models/blogResponse";

export const blogAction = createAsyncThunk<AxiosResponse<BlogResponse>, undefined, { rejectValue: string }>(
    "blogTitles/blogAction",
    async function (_, {rejectWithValue}) {
        try {
            const response: AxiosResponse = await blogTitleAPI.blog();
            const data = response.data.blogs;
            return data;
        } catch (e) {
            return rejectWithValue('Server error');
        }
    }
)