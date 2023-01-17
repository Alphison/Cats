import { catsAPI } from "../API/api"

const SET_CATS = "SET_CATS"
// const SET_FAVORITE = "SET_FAVORITE"
const SET_SOME_CATS = "SET_SOME_CATS"

let stateDefault = {
    cats: []
}

const catsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CATS:
            return {
                ...state,
                cats: action.cats
            }
        case SET_SOME_CATS: 
            let stateCopy = {...state}
            stateCopy.cats = [...state.cats]
            action.cats_some.map((cat_some) => {
                stateCopy.cats.push(cat_some)
            })
            return stateCopy
        // case SET_FAVORITE:
        //     return {
        //         ...state,
        //         cats: action.cats
        //     }
        default:
            return state
    }
}

const setCatsAction = (cats) => ({type: SET_CATS, cats})
const setCatsSomeAction = (cats_some) => ({type: SET_SOME_CATS, cats_some})

export const setCatsThunk = () => {
    return (dispatch) => {
        catsAPI.setCats()
        .then(response => {
            dispatch(setCatsAction(response.data))
        })
    }
}

export const setCatsSomeThunk = () => {
    return (dispatch) => {
        catsAPI.setCats()
        .then(response => {
            dispatch(setCatsSomeAction(response.data))
        })
    }
}

export const setFavoriteThunk = (image_id) => {
    return (dispatch) => {
        catsAPI.setFavorite(image_id)
        // .then(response => {
        //     debugger
        //     console.log(response.data)
        // })
    }
}

export default catsReducer