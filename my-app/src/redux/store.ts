import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers";
import middlewares from "./middleware"



export default configureStore({
    reducer: rootReducer,
    // @ts-ignore
    middleware: middlewares
})

