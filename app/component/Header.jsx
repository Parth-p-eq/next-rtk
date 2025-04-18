"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);
//   console.log(cart)
  // console.log(cart.length);

  // Hamburger show and close

  let showMenu = () => {
    setShow((show) => !show);
  };
  let closeMenu = () => {
    setShow((show) => !show);
  };
  return (
    <div>
      <section className="header-section border-b-1 border-[#E5E7EB]">
        <div className="header-section-wrapper">
          <div className=" 2xl:container mx-auto py-5.5 px-30 md:px-6  lg:px-30 max-sm:px-6">
            <div className="header flex justify-between items-center">
              <Link href="/">
                <div className="logo max-sm:hidden">
                  <h1 className="text-[32px] leading-[32px] text-end font-semibold">
                    Nexton
                  </h1>
                  <span className="block text-[14px] text-end font-semibold">
                    eCommerce
                  </span>
                </div>
                <div className="mobile-favicon hidden max-sm:block">
                  <img src="/images/Mobile Logo/logo.png" alt="" />
                </div>
              </Link>
              <div className="search">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-100 max-sm:w-45 p-4 ps-10 text-sm focus:outline-0 text-gray-900 bg-[#F8F8F8] border border-transparent rounded-l-full rounded-r-full"
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="profile max-sm:hidden flex justify-between items-center gap-[30px]">
                  <Link href="/registration">
                    <img src="/images/header img/user-btn.png" alt="Profile" />
                  </Link>
                  <Link href="/product/cart">
                    <img src="/images/header img/svg.png" alt="cart" />
                    {cart.length === 0 ? (
                      ""
                    ) : (
                      <div className="cart-product absolute right-[15.5%] top-[2.1%] 2xl:right-[7%] 2xl:top-[1.8%] w-6 h-6  bg-blue-600 rounded-full block text-center">
                        <p className="text-white m-0">
                          {cart.length === 0 ? " " : cart.length}
                        </p>
                      </div>
                    )}
                  </Link>
                </div>
                <div
                  className="menu-bar hidden max-sm:block"
                  onClick={showMenu}
                >
                  <img src="/images/Mobile Logo/hamburger.png" alt="" />
                </div>
                <div
                  id="mobile-profile"
                  style={{ display: show ? "none" : "block" }}
                >
                  <div className="hambruger  backdrop-blur-[10px] absolute z-[10] left-0 top-0 w-full h-full">
                    <div
                      id="close"
                      className="absolute top-[2%] left-[4%]"
                      onClick={closeMenu}
                    >
                      <img src="/images/Mobile Logo/close.png" alt="" />
                    </div>
                    <div className="profile-img flex flex-wrap justify-center gap-8 absolute z-[10] top-[40%] left-[42%]">
                      <img
                        src="/images/header img/user-btn.png"
                        alt="Profile"
                      />
                      <img src="/images/header img/svg.png" alt="cart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
