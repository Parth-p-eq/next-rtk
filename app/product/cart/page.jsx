"use client";
import { useEffect, useState } from "react";
import { useGetProductQuery } from "../../api/product/productApi";
import RemoveFromCart from "../RemoveFromCart";

const Cart = () => {
  const { data: allProducts, isLoading } = useGetProductQuery();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

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

  const productsInCart = cartItems.map((item) => {
    const product = allProducts?.find((product) => product.id === item.id);
    return {
      ...product,
    };
  });

  const handleRemoveFromCart = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  return (
    <section className="productlist-section ">
      <div className="productlist-wrapper">
        <div className="2xl:container mx-auto py-10 2xl:px-30 lg:px-15 md:px-6 max-sm:px-6">
          <div className="cart-page">
            {productsInCart.length === 0 ? (
              <div className=" flex justify-center items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg"
                  //   className="w-full h-auto"
                  alt=""
                />
              </div>
            ) : (
              <div className="product-list grid lg:grid-cols-3 gap-10 lg:gap-5 md:grid-cols-2 max-sm:grid-cols-1">
                {productsInCart.map((item, index) => (
                  <div
                    className="product border-1 rounded-xl border-[#0000001F] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
                    key={index}
                  >
                    <div className="card">
                      <div className="card-body h-[540px] p-5 max-sm:h-auto overflow-hidden">
                        <div className="image p-5 mb-5 flex justify-center">
                          {!item.image ? (
                            <div className="text-center mt-[300px]">
                              <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500 mx-auto"></div>
                              {/* <h2 class="text-zinc-900 dark:text-zinc-400 mt-4">Loading...</h2> */}
                              <p className="text-zinc-600 mt-5 dark:text-zinc-400">
                                Your data is loading...
                              </p>
                            </div>
                          ) : (
                            <img
                              src={item.image}
                              className="img-fluid h-[260px]"
                              alt=""
                            />
                          )}
                        </div>
                        <h3 className="card-title text-[24px] font-semibold">
                          {item.title}
                        </h3>
                        <p className="card-text text-[18px]">
                          {item.description}
                        </p>
                      </div>
                      <ul className="flex flex-col mt-2">
                        <li className="list-group-item border-t-1 border-b-1 py-3 px-5 border-[#0000001F]">
                          <h5 className="flex flex-wrap">
                            Price :&nbsp; <p className="price">${item.price}</p>
                          </h5>
                        </li>
                        <li className="list-group-item border-b-1 py-3 px-5 border-[#0000001F]">
                          Category : {item.category}{" "}
                        </li>
                      </ul>
                      <div className="my-5 flex justify-center gap-5">
                        <RemoveFromCart
                          id={item.id}
                          onRemove={handleRemoveFromCart}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
