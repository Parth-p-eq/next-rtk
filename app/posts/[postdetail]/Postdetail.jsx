"use client";

import { useReadPostsQuery } from "@/app/api/postApi";
import React from "react";

const PostDetail = ({ params }) => {
  const resolvedParams = React.use(params);
  const id = resolvedParams.postdetail;
  // console.log(id);
  const { data, error, isLoading } = useReadPostsQuery(id);
  // console.log(data);
  if (isLoading)
    return (
      <div className=" h-[100vh] flex justify-center items-center">
        <div
          aria-label="Loading..."
          role="status"
          className="flex items-center space-x-2"
        >
          <svg
            className="h-20 w-20 animate-spin stroke-gray-500"
            viewBox="0 0 256 256"
          >
            <line
              x1="128"
              y1="32"
              x2="128"
              y2="64"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="224"
              y1="128"
              x2="192"
              y2="128"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="128"
              y1="224"
              x2="128"
              y2="192"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="32"
              y1="128"
              x2="64"
              y2="128"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
          </svg>
          <span className="text-4xl font-medium text-gray-500">Loading...</span>
        </div>
      </div>
    );
  if (error || !data) return <div>Error loading post or post not found.</div>;

  return (
    <div className="py-5 h-[100vh] flex items-center">
      <div className="h-[220px] w-md max-sm:w-[290px] max-sm:h-[330px] mx-auto border-1 rounded p-5">
        <div className="title mb-2">
          <h2>{data.id}</h2>
        </div>
        <div className="title mb-2">
          <h3>{data.title}</h3>
        </div>
        <div className="body">
          <p>{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

// export const generateStaticParams = async () => {
//   const post = await ServerPosts();
//   return post.map((item) => ({
//     postdetail: item.id.toString(),
//   }));
// };
