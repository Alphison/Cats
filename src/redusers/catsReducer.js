import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const catsReducer = createApi({
    reducerPath: 'catsApi',
    tagTypes: ['Images', 'ImagesFavorite'],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.thecatapi.com/v1/"
    }),
    endpoints: ( builder ) => ({
        getCats: builder.query({
            query: () => `images/search?limit=15`,
            providesTags: (result) =>
            result
              ? [
                  ...result.map(({ id }) => ({ type: 'Images', id })),
                  { type: 'Images', id: 'LIST' },
                ]
              : [{ type: 'Images', id: 'LIST' }],
        }),
        moreCats: builder.query({
            query: () => `images/search?limit=15`,
        }),
        addFavorite: builder.mutation({
           query: (image_id) => ({
            url: 'favourites',
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-api-key': 'live_ArjR8sim0km9TGTz6bbo0F75lcRPgiq2AoD4i8GNHqEBGzZnGRyfRagos4S5X5jR'
            },
            body: JSON.stringify({ 
                "image_id": image_id
            })
           }),
           invalidatesTags: [{type: 'ImagesFavorite', id: 'LIST'}]
        })
    })
})

export const { useGetCatsQuery, useLazyMoreCatsQuery, useAddFavoriteMutation } = catsReducer