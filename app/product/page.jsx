"use client";
import React from "react";
import Link from "next/link";
import AddToCart from "./AddToCart";
import { useGetProductQuery } from "../api/product/productApi";

const ProductList = () => {
  const { data } = useGetProductQuery();
  const products = data || [];
  console.log(products);

  return (
    <div>
      <section className="productlist-section ">
        <div className="productlist-wrapper">
          <div className="2xl:container mx-auto py-10 2xl:px-30 lg:px-15 md:px-6 max-sm:px-6">
            <div className="product-list grid lg:grid-cols-3 gap-10 lg:gap-5 md:grid-cols-2 max-sm:grid-cols-1">
              {products.map((items) => {
                return (
                  <div
                    className="product border-1 rounded-xl border-[#0000001F] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
                    key={items.id}
                  >
                    <div className="card">
                      <div className="card-body h-[540px] p-5 max-sm:h-auto overflow-hidden">
                        <div className="image p-5 mb-5 flex justify-center">
                          {!items.image ? (
                            <div className="text-center mt-[300px]">
                              <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500 mx-auto"></div>
                              {/* <h2 class="text-zinc-900 dark:text-zinc-400 mt-4">Loading...</h2> */}
                              <p className="text-zinc-600 mt-5 dark:text-zinc-400">
                                Your data is loading...
                              </p>
                            </div>
                          ) : (
                            <Link href={`/product/${items.id}`}>
                              <img
                                src={items.image}
                                className="img-fluid h-[260px]"
                                alt=""
                              />
                            </Link>
                          )}
                        </div>
                        <h3 className="card-title text-[24px] font-semibold">
                          {items.title}
                        </h3>
                        <p className="card-text text-[18px]">
                          {items.description}
                        </p>
                      </div>
                      <ul className="flex flex-col mt-2">
                        <li className="list-group-item border-t-1 border-b-1 py-3 px-5 border-[#0000001F]">
                          <h5 className="flex flex-wrap">
                            Price :&nbsp;{" "}
                            <p className="price">${items.price}</p>
                          </h5>
                        </li>
                        <li className="list-group-item border-b-1 py-3 px-5 border-[#0000001F]">
                          Category : {items.category}{" "}
                        </li>
                      </ul>
                      <div className="my-5 flex justify-center gap-5">
                        <AddToCart id={items.id} />
                      </div>
                      {/* <div className="button flex justify-center my-4">
                        <AddToCart cartId={items.id} />
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
