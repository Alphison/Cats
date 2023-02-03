import { configureStore } from "@reduxjs/toolkit";
import { catsFavoriteReducer } from "../redusers/catsFavoriteReducer";
import { catsReducer } from "../redusers/catsReducer"


const store = configureStore({
    reducer: {
        [catsReducer.reducerPath]: catsReducer.reducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(catsReducer.middleware)
})

export default store