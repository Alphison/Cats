import heart from "../../assets/favorite_border2.svg"
import { useDeleteCatMutation, useGetCatsFavoriteQuery } from "../../redusers/catsFavoriteReducer";
import "../cats/cats.css"

export const CatsFavorite = () => {
    const {data: catsFavorite, isLoading} = useGetCatsFavoriteQuery()
    const [fetchDeleteCat, {isError}] = useDeleteCatMutation()

    const onDeleteCatHandle = async (id) => {
        await fetchDeleteCat(id)
    }

    if(isLoading) return <h1>Loading...</h1>

  return (
        <div className="cats__container">
            {
                catsFavorite.map((catFavorite) => {
                    return <div key={catFavorite.id} className="foto__cat">
                        <img
                        src={catFavorite.image.url}
                        alt=""
                        />
                        <img onClick={() => onDeleteCatHandle(catFavorite.id)} src={heart} alt="" />
                    </div>
                })
            }
        </div>
  );
};
