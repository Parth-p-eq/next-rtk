// app/posts/[postdetail]/page.jsx (Server Component — NO "use client")
import ProductDetail from "./ProductDetail";

export default function Page({ params }) {
  return <ProductDetail params={params} />;
}

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products");
  const product = await res.json();
  const data = product.products;

  return data.map((post) => ({
    productdetail: post.id.toString(),
  }));
}
