import React from "react";
import Dropdown from "../extras/Dropdown";

export default function ProductList(props) {
  const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  console.log(products);

  function handleDelete() {
    localStorage.removeItem();
  }
  return (
    <section className="mt-10">
      <div className="flex justify-end mr-24">
        <Dropdown />
      </div>
      <div className="ml-20 grid grid-cols-2 gap-10">
        {products.map((product, onAddToCart) => {
          return <ProductCard product={product} handleDelete={handleDelete} />;
        })}
      </div>
    </section>
  );
}

const ProductCard = (props) => {
  return (
    <div className="py-6">
      <div className="flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/3 bg-cover">
          <img alt="product" src={props.product.imgUrl}></img>
        </div>
        <div className="w-2/3 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-gray-900 font-bold text-2xl">
              {props.product.name}
            </h1>
            <button>✎</button>
          </div>

          <p className="mt-2 text-gray-600 text-sm">
            {props.product.description}
          </p>
          <h1 className="text-gray-700 font-bold text-xl">Rs 649</h1>
          <p className="mt-2 text-gray-600 text-sm">
            {props.product.ratings} ♡
          </p>
          <div className="flex item-center justify-between mt-3">
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              Add to Wishlist
            </button>
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              Add to Cart
            </button>
            <button
              onClick={props.handleDelete}
              className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
