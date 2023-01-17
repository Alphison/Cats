import axios from "axios";
const url = "https://api.thecatapi.com/v1/"

const instanse = axios.create({
    baseURL: url,
    headers: {
        'x-api-key': 'live_ArjR8sim0km9TGTz6bbo0F75lcRPgiq2AoD4i8GNHqEBGzZnGRyfRagos4S5X5jR',
        'content-type': 'application/json'
    }
})

export const catsAPI = {
    setCats(){
        return instanse.get(`images/search?limit=15`)
    },
    async setFavorite(image_id){
       return await fetch(
            "https://api.thecatapi.com/v1/favourites", 
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                         'x-api-key': 'live_ArjR8sim0km9TGTz6bbo0F75lcRPgiq2AoD4i8GNHqEBGzZnGRyfRagos4S5X5jR'
                    },
                    body: JSON.stringify({ 
                        "image_id": image_id
                    })
                }
            )
    }
}

export const catsFavoriteAPI = {
    setCatsFavorite(){
        return instanse.get(`favourites`)
    }
}