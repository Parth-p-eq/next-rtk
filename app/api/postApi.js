import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => "posts" }),
    createPosts: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),
    updatePosts: builder.mutation({
      query: (data) => ({
        url: `posts/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),
    readPosts: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostsMutation,
  useUpdatePostsMutation,
  useDeletePostMutation,
  useReadPostsQuery,
} = postApi;
