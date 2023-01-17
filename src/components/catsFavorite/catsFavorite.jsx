import heart from "../../assets/favorite_border2.svg"
import "../cats/cats.css"

export const CatsFavorite = (props) => {
  return (
        <div className="cats__container">
            {
                props.catsFavorite.map((catFavorite) => {
                    return <div ket={catFavorite.id} className="foto__cat">
                        <img
                        src={catFavorite.image.url}
                        alt=""
                        />
                        <img src={heart} alt="" />
                    </div>
                })
            }
        </div>
  );
};
