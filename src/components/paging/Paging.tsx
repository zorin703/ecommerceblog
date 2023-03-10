import React from 'react';
import {useAppSelector} from "../../store/reduxHooks";
import pagingStyle from "./paging.module.css"


const Paging = () => {
    const {maxItems, currentPage} = useAppSelector(state => state.blog);

    // @ts-ignore
    let pagesCount = Math.ceil(maxItems / 6)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let setCurrentPage;
    return (
        <div>
            {pages.map((p) =>
                // @ts-ignore
                <span className={currentPage === p && pagingStyle.selectedPage}
               // onClick={() => setCurrentPage}
                >{p}</span>)}
        </div>
    );
};

export default Paging;