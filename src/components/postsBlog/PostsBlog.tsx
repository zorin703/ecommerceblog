import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/reduxHooks";
import blogStyle from "../../pages/Blog.module.css";
import {blogAction} from "../../store/actions/blogAction";
import {BlogResponse} from "../../models/blogResponse";

const PostsBlog = () => {

    const {isLoading, error, blogPost} = useAppSelector(state => state.blog)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch((blogAction()))
    }, [dispatch])

    // @ts-ignore
    return (
        <div>
            {error && <h4>{error}</h4>}
            <div className={blogStyle.blogGrid}>
                {blogPost && blogPost.map((title: BlogResponse) => <div>
                        <h4>{title.id}</h4>
                        <img src='https://github.com/zorin703/ecommerceblog/blob/fb006aa91b8ff768df5040b27bb07bd325d191f3/src/server/images/Post-Image1.jpg'/>
                        <h4>{title.blogText}</h4>
                        <h4>{title.dateBlog}</h4>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostsBlog;