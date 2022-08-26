import React from "react";

export default function ProductList(props) {
  // console.log(products);
  const {
    products,
    setProducts,
    cartItems,
    addItemToCart,
    deleteItemFromCart,
  } = props;

  function handleDelete(productId) {
    if (
      window.confirm(
        "Are you sure you want to delete product with productId: " + productId
      )
    ) {
      const updatedProductsList = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProductsList);
      localStorage.setItem("products", JSON.stringify(products));
      // alert("Done");
    }
  }
  return (
    <section className="mt-10">
      {products.length > 0 ? (
        <div className="ml-20 grid grid-cols-2 gap-10">
          {products.map((product) => {
            return (
              <ProductCard
                product={product}
                handleDelete={handleDelete}
                count={cartItems[product.id]}
                addItemToCart={addItemToCart}
                deleteItemFromCart={deleteItemFromCart}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center py-8 w-full">
          <img
            src="/images/undraw_note_list_re_r4u9.svg"
            className="max-w-md"
            alt="No Product Found!"
          />
          <h3 className="font-bold text-3xl mt-8">No Products Found!</h3>
        </div>
      )}
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
            {props.count ? (
              <div className="flex items-center px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                <button
                  className="bg-white rounded text-black py-1 px-2"
                  onClick={() => props.deleteItemFromCart(props.product.id)}
                >
                  -
                </button>
                <p className="px-4">{props.count}</p>
                <button
                  className="bg-white rounded text-black py-1 px-2"
                  onClick={() => props.addItemToCart(props.product.id)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => props.addItemToCart(props.product.id)}
                className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
              >
                Add to Cart
              </button>
            )}
            <button
              onClick={() => props.handleDelete(props.product.id)}
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
