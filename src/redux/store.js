import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { favouriteReducer } from "../redusers/catsFavoriteReducer";
import catsReducer from "../redusers/catsReducer";

let reducers = combineReducers({
    catsPage: catsReducer,
    catsFavoritePage: favouriteReducer
})

let store = legacy_createStore(reducers, applyMiddleware(thunk))

export default store