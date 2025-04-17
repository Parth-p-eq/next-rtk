"use client";
import React, { useState, useEffect } from "react";
import {
  useGetPostsQuery,
  useCreatePostsMutation,
  useUpdatePostsMutation,
  useDeletePostMutation,
} from "../api/postApi";
import Link from "next/link";

const Product = () => {
  const { data } = useGetPostsQuery();
  const [newPost] = useCreatePostsMutation();
  const [editPostData] = useUpdatePostsMutation();
  const [deletePost] = useDeletePostMutation();
  const [posts, setPosts] = useState({
    title: "",
    body: "",
    id: "",
  });
  // console.log(data);
  const [allPosts, setAllPosts] = useState("");

  useEffect(() => {
    setAllPosts(data);
  }, [data]);

  const editData = (post) => {
    setPosts({ title: post.title, body: post.body, id: post.id });
  };
  const updateData = (data) => {
    // console.log(data);
    editPostData(data);
    setAllPosts((prev) => {
      return prev.map((post) => {
        return post.id === data.id ? data : post;
      });
    });
    setPosts({ title: "", body: "" });
  };

  const deleteData = (id) => {
    deletePost(id);
    setAllPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newPost(posts);
      const newData = response.data;
      setAllPosts([...data, newData]);
      setPosts({ title: "", body: "" });
      // console.log("Post created:", response.data);
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };
  return (
    <div>
      <section className="post-section">
        <div className="post-section-wrapper">
          <div className="2xl:container mx-auto p-10">
            <div className="add-posts p-10 w-[50%] mx-auto">
              <form action="" onSubmit={handleFormSubmit}>
                <div className="mb-5">
                  <input
                    type="text"
                    className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Add Title..."
                    value={posts.title}
                    onChange={(e) =>
                      setPosts((prevPosts) => ({
                        ...prevPosts,
                        title: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Add Title..."
                    value={posts.body}
                    onChange={(e) =>
                      setPosts((prevPosts) => ({
                        ...prevPosts,
                        body: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mb-5 flex justify-center gap-5">
                  <button
                    type="submit"
                    className="before:ease relative h-12 w-30 rounded overflow-hidden border border-blue-500 bg-blue-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-500 hover:before:-translate-x-40"
                  >
                    <span relative="relative z-10">Add Post</span>
                  </button>
                </div>
              </form>
              <div className="mb-5 flex justify-center gap-5">
                <button
                  onClick={() => updateData(posts)}
                  type="submit"
                  className="before:ease relative h-12 w-30 rounded overflow-hidden border border-slate-500 bg-slate-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-slate-500 hover:before:-translate-x-40"
                >
                  <span relative="relative z-10">Update Post</span>
                </button>
              </div>
            </div>
            <div className="all-posts grid lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1 gap-5">
              {allPosts &&
                allPosts.map((post) => (
                  <div key={post.id} className=" border-1 rounded p-5">
                    <Link href={`/posts/${post.id}`}>
                      <div className="h-[230px]">
                        <div className="title mb-2">
                          <h3>{post.title}</h3>
                        </div>
                        <div className="body">
                          <p>{post.body}</p>
                        </div>
                      </div>
                    </Link>
                    <div className="mb-5 flex justify-center gap-4">
                      <button
                        onClick={() => editData(post)}
                        type="submit"
                        className="before:ease relative h-12 w-30 rounded overflow-hidden border border-slate-500 bg-slate-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-slate-500 hover:before:-translate-x-40"
                      >
                        <span relative="relative z-10">Edit Post</span>
                      </button>
                      <button
                        onClick={() => deleteData(post.id)}
                        type="submit"
                        className="before:ease relative h-12 w-30 rounded overflow-hidden border border-red-500 bg-red-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:tranred-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-slate-500 hover:before:-translate-x-40"
                      >
                        <span relative="relative z-10">Delete Post</span>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;

