import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosResponse} from "axios";
import {blogTitleResponse} from "../../models/blogTitleResponse";
import {blogTitleAPI} from "../../api/api";
import {API_BASE_URL, TITLE_BLOG_URL} from "../../api/apiConst";

export const blogTitleAction = createAsyncThunk<blogTitleResponse[], undefined, { rejectValue: string }>(
    "blogTitles/blogTitleAction",
    async function () {
        const response = await fetch(TITLE_BLOG_URL);
        const data = await response.json();
        await console.log(data.movies);
        return data.movies;

    }
)