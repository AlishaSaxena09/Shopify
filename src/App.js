import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(() => {
    return localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [];
  });
  const [cartItems, setCartItems] = useState(() => {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};
  });

  const addItemToCart = (productId) => {
    const updatedCart = { ...cartItems };
    if (updatedCart[productId]) {
      updatedCart[productId] += 1;
    } else {
      updatedCart[productId] = 1;
    }
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const deleteItemFromCart = (productId) => {
    const updatedCart = { ...cartItems };
    if (updatedCart[productId]) {
      if (updatedCart[productId] === 1) {
        delete updatedCart[productId];
      } else {
        updatedCart[productId] -= 1;
      }
    }
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeEntireItemFromCart = (productId) => {
    const updatedCart = { ...cartItems };
    if (updatedCart[productId]) {
      delete updatedCart[productId];
    }
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/add-product"
          element={<AddProduct setProducts={setProducts} />}
        ></Route>
        <Route
          path="/products"
          element={
            <ProductList
              products={products}
              setProducts={setProducts}
              cartItems={cartItems}
              addItemToCart={addItemToCart}
              deleteItemFromCart={deleteItemFromCart}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              products={products}
              cartItems={cartItems}
              addItemToCart={addItemToCart}
              deleteItemFromCart={deleteItemFromCart}
              removeEntireItemFromCart={removeEntireItemFromCart}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
