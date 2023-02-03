import { useEffect, useState } from "react"
import heart from "../../assets/favorite_border.svg"
import { useAddFavoriteMutation, useGetCatsQuery, useLazyMoreCatsQuery } from "../../redusers/catsReducer"
import "./cats.css"

export const Cats = () => {
    const {data: cats, isLoading} = useGetCatsQuery()
    const [fetchAddCat, {isError}] = useAddFavoriteMutation()
    // const [fetchMoreCats, { isLoading: isLoad, data: moreCats }] = useLazyMoreCatsQuery()
    
    // const moreCatsHandle = () => {
    //     fetchMoreCats()
    // }

    // useEffect(() => {

    //     moreCats?.map((moreCat) => {
    //         cats.push(moreCat)
    //     })

    // }, [moreCats, cats])

    const addCatHandle = async (id) => {
        await fetchAddCat(id)
    }

    if(isLoading) return <h1>Loading...</h1>


    return (
        <div className="cats_main">
            <div className="cats__container">
                {cats.map((cat) => {
                    return <div key={cat.id} className="foto__cat">
                        <img src={cat.url} alt="" />
                        <img onClick={() => addCatHandle(cat.id)} src={heart} alt=""/>
                    </div>
                })}
            </div>
            <button onClick={() => moreCatsHandle()}>
                 ... загружаем еще котиков ...
            </button>
        </div>

    )
}