import Image from "next/image";
import Product from "./posts/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/product">
        <h3 className="p-10 text-center text-xl font-semibold">Go to Product Section </h3>
      </Link>
      <Product />
    </>
  );
}
