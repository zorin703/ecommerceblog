import React, {useEffect} from 'react';
import blogStyle from "../../pages/Blog.module.css";
import {useAppDispatch, useAppSelector} from "../../store/reduxHooks";
import {blogBigTitleAction} from "../../store/actions/blogBigTitleAction";
import {blogTitleResponse} from "../../models/blogTitleResponse";

const PostBigText = () => {

    const {isLoading, error, blogBigTitles} = useAppSelector(state => state.blogBigTitle)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch((blogBigTitleAction()))
    }, [dispatch])

    return (
        <div>
            {error && <h4>{error}</h4>}
            <div className={blogStyle.blogGrid}>
                {blogBigTitles && blogBigTitles.map((title: blogTitleResponse) => <div>
                        <h4>{title.id}</h4>
                        <h1>{title.blogTitleText}</h1>
                        <h4>{title.dateBlog}</h4>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostBigText;