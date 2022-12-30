import {createServer} from "miragejs"
import {
    DATE_BLOG,
    TITLE_BLOG_TEXT_0,
    TITLE_BLOG_TEXT_1,
    TITLE_BLOG_TEXT_2,
    TITLE_BLOG_TEXT_3,
    TITLE_BLOG_TEXT_4
} from "./const";
import {BIG_TITLE_BLOG_URL, TITLE_BLOG_URL} from "../api/apiConst";

createServer({
    routes() {
        this.get(TITLE_BLOG_URL, () => {
            return {
                movies: [
                    {id: 1, blogTitleText: TITLE_BLOG_TEXT_1, dateBlog: DATE_BLOG},
                    {id: 2, blogTitleText: TITLE_BLOG_TEXT_2, dateBlog: DATE_BLOG},
                    {id: 3, blogTitleText: TITLE_BLOG_TEXT_3, dateBlog: DATE_BLOG},
                    {id: 4, blogTitleText: TITLE_BLOG_TEXT_4, dateBlog: DATE_BLOG},
                ],
            }
        })
        this.get(BIG_TITLE_BLOG_URL, () => {
            return {
                titles: [
                    {id: 1, blogTitleText: TITLE_BLOG_TEXT_0, dateBlog: DATE_BLOG},
                ],
            }
        })
    },
})