import heart from "../../assets/favorite_border.svg"
import "./cats.css"

export const Cats = (props) => {

    const setCatsSome = () => {
        props.setCatsSomeThunk()
    }

    return (
        <div className="cats_main">
            <div className="cats__container">
                {props.cats.map((cat) => {
                    return <div key={cat.id} className="foto__cat">
                        <img src={cat.url} alt="" />
                        <img src={heart} alt="" onClick={() => {props.setFavoriteThunk(cat.id)}}/>
                    </div>
                })}
            </div>
            <button onClick={() => setCatsSome()}>
                 ... загружаем еще котиков ...
            </button>
        </div>

    )
}