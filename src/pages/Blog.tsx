import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../store/reduxHooks";
import {blogTitleAction} from "../store/actions/blogTitleAction";
import {API_BASE_URL, TITLE_BLOG_URL} from "../api/apiConst";
import PostBigText from "../components/postBigText/PostBigText";

const Blog = () => {

    const {isLoading, error, blogTitles} = useAppSelector(state => state.blogTitle)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch((blogTitleAction()))
    }, [dispatch])
    console.log('in tsx',  blogTitles)

    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <PostBigText/>
            {isLoading && <h1>Loading.......</h1>}
            <button>ADD BLOGS</button>
            {blogTitles.map((title)=><div>
                <h4>{title.id}</h4>
                <h1>{title.blogTitleText}</h1>
                <h4>{title.dateBlog}</h4>
                </div>
            )}
            Hello ITS BLOG
        </div>
    );
};

export default Blog;