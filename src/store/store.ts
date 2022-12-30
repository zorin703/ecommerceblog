import {combineReducers, configureStore} from "@reduxjs/toolkit";
import blogTitleSlice from "./reducers/blogTitleSlice";
import blogBigTitleSlice from "./reducers/blogBigTitleSlice";
import blogSlice from "./reducers/blogSlice";


const rootReducer = combineReducers({
    blog: blogSlice,
    blogTitle: blogTitleSlice,
    blogBigTitle: blogBigTitleSlice,
   })

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore[`dispatch`]
