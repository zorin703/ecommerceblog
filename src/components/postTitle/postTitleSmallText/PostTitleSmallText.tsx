import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/reduxHooks";
import {blogTitleAction} from "../../../store/actions/blogTitleAction";
import {blogTitleResponse} from "../../../models/blogTitleResponse";
import titleSmallTextStyle from "./postTitleSmallText.module.css"
import {BiTimeFive} from "react-icons/bi";

const PostTitleSmallText = () => {

    const {isLoading, error, blogTitles} = useAppSelector(state => state.blogTitle)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch((blogTitleAction()));
    }, [dispatch])
    return (
        <div>
            {isLoading && <h1>Loading.......</h1>}
            {error && <h4>{error}</h4>}
            <div className={titleSmallTextStyle.wrapperSmallText}>
                {blogTitles && blogTitles.map((title: blogTitleResponse) => <div>
                        <h1>{title.blogTitleText}</h1>
                    <div>
                        <BiTimeFive/>
                        <span>{title.dateBlog}</span>
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostTitleSmallText;