import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../store/reduxHooks";
import {blogTitleAction} from "../store/actions/blogTitleAction";
import blogStyle from "./Blog.module.css"

const Blog = () => {

    const {isLoading, error, blogTitles} = useAppSelector(state => state.blogTitle)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch((blogTitleAction()))
    }, [dispatch])
    console.log('in tsx', blogTitles)

    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            {isLoading && <h1>Loading.......</h1>}

            <div className={blogStyle.blogGrid}>
                {blogTitles.map((title) => <div>
                        <h4>{title.id}</h4>
                        <h1>{title.blogTitleText}</h1>
                        <h4>{title.dateBlog}</h4>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Blog;