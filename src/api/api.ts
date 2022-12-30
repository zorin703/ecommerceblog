import axios, {AxiosResponse} from "axios";
import {BIG_TITLE_BLOG_URL, TITLE_BLOG_URL} from "./apiConst";
import {blogTitleResponse} from "../models/blogTitleResponse";

// const instance = axios.create({
//     baseURL: API_BASE_URL
// })

export const blogTitleAPI = {
    blogTitle(): Promise<AxiosResponse<blogTitleResponse>>{
        return axios.get(TITLE_BLOG_URL)

    },

    blogBigTitle(): Promise<AxiosResponse<blogTitleResponse>> {
        return axios.get<blogTitleResponse>(BIG_TITLE_BLOG_URL)
    },
}


