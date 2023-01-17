import { catsFavoriteAPI } from "../API/api"

const SET_FAVORITES = "SET_FAVORITES"

let defaultState = {
    catsFavorite: []
}

export const favouriteReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FAVORITES:
            return {
                ...state,
                catsFavorite: action.catsFavorite
            }
        default:
            return state
    }
}

const setCatsFavoriteAction = (catsFavorite) => ({type: SET_FAVORITES, catsFavorite})

export const setCatsFavoriteThunk = () => (dispatch) => {
    catsFavoriteAPI.setCatsFavorite()
    .then(response => {
        dispatch(setCatsFavoriteAction(response.data))
    })
}