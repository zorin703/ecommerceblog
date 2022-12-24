import axios, {AxiosResponse} from "axios";
import {API_BASE_URL, TITLE_BLOG_URL} from "./apiConst";
import {blogTitleResponse} from "../models/blogTitleResponse";

const instance = axios.create({
    baseURL: API_BASE_URL
})

export const blogTitleAPI = {
    blogTitle(): Promise<AxiosResponse<blogTitleResponse>>{
        return instance.get<blogTitleResponse>('/'+TITLE_BLOG_URL);
    }
}