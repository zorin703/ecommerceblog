import React from 'react';
import stylePostBigText from './PostBigText.module.css'

const PostBigText = () => {
    return (
        <div className={stylePostBigText.postBigText}>
            <div className={stylePostBigText.bigText}></div>
            <div className={stylePostBigText.smallText}>text</div>

        </div>
    );
};

export default PostBigText;