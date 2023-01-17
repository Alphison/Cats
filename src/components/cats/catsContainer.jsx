import { connect } from "react-redux"
import { setFavoriteThunk, setCatsSomeThunk } from "../../redusers/catsReducer"
import { Cats } from "./cats"

const CatsContainer = (props) => {

    return (
        <Cats cats={props.cats} setFavoriteThunk={props.setFavoriteThunk} setCatsSomeThunk={props.setCatsSomeThunk}/>
    )
}

const mapStateToProps = (state) => {

    return {
        cats: state.catsPage.cats
    }
}

export default connect(mapStateToProps, { setFavoriteThunk, setCatsSomeThunk })(CatsContainer)