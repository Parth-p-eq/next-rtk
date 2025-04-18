import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getProduct: builder.query({ query: () => "products" }),
    addToCartProduct: builder.mutation({
      query: (cartData) => ({
        url: "carts/add",
        method: "POST",
        body: cartData,
      }),
      invalidatesTags: ["Cart"],
    }),
    getCart: builder.query({
      query: () => "carts/1", // dummyjson has cart with id
      providesTags: ["Cart"],
    }),
    detailProduct: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useAddToCartProductMutation,
  useDetailProductQuery,
  useGetCartQuery,
} = productApi;
