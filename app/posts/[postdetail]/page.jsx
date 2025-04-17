// app/posts/[postdetail]/page.jsx (Server Component — NO "use client")
import PostDetail from "./Postdetail";

export default function Page({ params }) {
  return <PostDetail params={params} />;
}

// ✅ Allowed here
export async function generateStaticParams() {
  // Example: fetch all post IDs
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return posts.map((post) => ({
    postdetail: post.id.toString(),
  }));
}
