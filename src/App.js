import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-product" element={<AddProduct />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
