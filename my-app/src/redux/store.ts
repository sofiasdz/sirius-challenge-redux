import { configureStore , createStore} from '@reduxjs/toolkit'
import reducers from "./reducers/characterReducer";


export default configureStore({
    reducer: reducers
})

