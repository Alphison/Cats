import { catsReducer } from "./catsReducer";


export const catsFavoriteReducer = catsReducer.injectEndpoints({
    endpoints: ( builder ) => ({
        getCatsFavorite: builder.query({
            query: () => ({
                url: `favourites`,
                headers: {
                    'content-type': 'application/json',
                    'x-api-key': 'live_ArjR8sim0km9TGTz6bbo0F75lcRPgiq2AoD4i8GNHqEBGzZnGRyfRagos4S5X5jR'
                },
            }),
            providesTags: (result) =>
            result
              ? [
                  ...result.map(({ id }) => ({ type: 'ImagesFavorite', id })),
                  { type: 'ImagesFavorite', id: 'LIST' },
                ]
              : [{ type: 'ImagesFavorite', id: 'LIST' }],
        }),
        deleteCat: builder.mutation({
            query: (image_id) => ({
                url: `favourites/${image_id}`,
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'x-api-key': 'live_ArjR8sim0km9TGTz6bbo0F75lcRPgiq2AoD4i8GNHqEBGzZnGRyfRagos4S5X5jR'
                },
            }),
            invalidatesTags: [{type: 'ImagesFavorite', id: 'LIST'}]
        })
    }),
    overrideExisting: false,
})

export const { useGetCatsFavoriteQuery, useDeleteCatMutation } = catsFavoriteReducer