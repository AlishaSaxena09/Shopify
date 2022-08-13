import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="shadow-md">
      <nav className="py-1 px-8 flex justify-between items-center">
        <h1 className="text-4xl font-semibold">shopify</h1>
        <ul>
          <NavLink to="/cart">
            <img className="w-16" src="/images/cart.png"></img>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
