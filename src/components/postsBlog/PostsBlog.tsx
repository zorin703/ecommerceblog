import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/reduxHooks";
import blogStyle from "../../pages/Blog.module.css";
import {blogAction} from "../../store/actions/blogAction";
import {BlogResponse} from "../../models/blogResponse";
import img from "../../server/images/Post-Image1.jpg"


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
                        <img src={title.blogImage}/>
                        <h4>{title.blogText}</h4>
                        <h4>{title.dateBlog}</h4>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostsBlog;