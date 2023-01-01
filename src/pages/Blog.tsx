import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../store/reduxHooks";
import {blogTitleAction} from "../store/actions/blogTitleAction";
import blogStyle from "./Blog.module.css"
import {blogTitleResponse} from "../models/blogTitleResponse";
import PostBigText from "../components/postBigText/PostBigText";
import PostsBlog from "../components/postsBlog/PostsBlog";

const Blog = () => {

    const {isLoading, error, blogTitles} = useAppSelector(state => state.blogTitle)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch((blogTitleAction()));
    }, [dispatch])

    return (
        <div>
            {isLoading && <h1>Loading.......</h1>}
            {error && <h4>{error}</h4>}
            <PostBigText/>
            <div className={blogStyle.blogGrid}>
                {blogTitles && blogTitles.map((title: blogTitleResponse) => <div>
                        <h4>{title.id}</h4>
                        <h1>{title.blogTitleText}</h1>
                        <h4>{title.dateBlog}</h4>
                    </div>
                )}
            </div>

            <PostsBlog/>


        </div>
    );

};
export default Blog;