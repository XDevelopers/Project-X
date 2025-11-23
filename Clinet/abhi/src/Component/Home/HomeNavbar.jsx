import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const HomeNavbar = () => {
  const [shopCount, setShopCount] = useState(4);
  const [filterShow, setFilterShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);

  return (
    <div className="relative w-full bg-gray-800 p-4">
      {/* Navbar container */}
      <div className="flex items-center justify-between w-full relative">
        {/* Cart */}
        <div className="relative" onClick={() => setCartShow(!cartShow)}>
          <FaShoppingCart className="text-3xl text-white cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-xs font-semibold text-white rounded-full h-5 w-5 flex items-center justify-center">
            {shopCount}
          </span>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search a juice..."
          className="w-1/2 px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />

        {/* Filter */}
        <CiFilter
          className="text-3xl text-white cursor-pointer"
          onClick={() => setFilterShow(!filterShow)}
        />
      </div>

      {/* Filter Dropdown */}
      {filterShow && (
        <div className="absolute top-full right-0 mt-2 z-50 bg-red-700 rounded-md p-4 shadow-lg w-40">
          <ul className="space-y-1 text-gray-200 font-medium">
            <li
              className="text-end cursor-pointer"
              onClick={() => setFilterShow(false)}
            >
              X
            </li>
            <li className="hover:text-amber-400 cursor-pointer">Cold-pressed</li>
            <li className="hover:text-amber-400 cursor-pointer">Smoothie</li>
            <li className="hover:text-amber-400 cursor-pointer">Fruits</li>
            <li className="hover:text-amber-400 cursor-pointer">Juice</li>
          </ul>
        </div>
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-20 right-0 h-screen bg-gray-900 text-white w-[70%] sm:w-[400px] z-9999 
        transform transition-transform duration-500 ease-in-out 
        ${cartShow ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
          <p>Items go here...</p>
          <button
            className="mt-4 px-4 py-2 bg-red-600 rounded"
            onClick={() => setCartShow(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
