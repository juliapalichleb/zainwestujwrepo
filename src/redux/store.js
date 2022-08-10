import { configureStore } from "@reduxjs/toolkit";
import repoReducer  from '../redux/repoSlice'

export default configureStore({
    reducer: {
        repoData: repoReducer,
    },
})