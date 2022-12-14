import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="shadow-md">
      <nav className="py-1 px-8 flex justify-between items-center">
        <Link to="/">
          <img alt="logo" className="w-20" src="/images/sss-logo.jpeg"></img>
        </Link>
        <div className="ml-20 flex flex-wrap items-center justify-around w-2/5">
          <div class=" flex justify-center">
            <div class="mt-2 xl:w-92">
              <div class="input-group relative flex flex-wrap items-stretch w-full mb-2 rounded">
                <input
                  type="search"
                  class="form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <span
                  class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                  id="basic-addon2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    class="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <Link to="/add-product">
            <button className="px-3 py-2 border-2 border-black text-xs font-bold uppercase rounded hover:bg-black hover:text-white">
              Become A Supplier
            </button>
          </Link>
          <ul>
            <NavLink to="/cart">
              <img alt="cart" className="w-10" src="/images/cart.png"></img>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}
