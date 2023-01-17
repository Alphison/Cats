import { useEffect } from "react"
import { connect } from "react-redux"
import { CatsFavorite } from "./catsFavorite"
import { setCatsFavoriteThunk } from "../../redusers/catsFavoriteReducer"

const CatsFavoriteContainer = (props) => {
    useEffect(() => {
        props.setCatsFavoriteThunk()
    }, [])
    return (
        <CatsFavorite catsFavorite={props.catsFavorite}/>
    )
}

const mapStateToProps = (state) => {
    return {
        catsFavorite: state.catsFavoritePage.catsFavorite
    }
}

export default connect(mapStateToProps, {setCatsFavoriteThunk})(CatsFavoriteContainer)