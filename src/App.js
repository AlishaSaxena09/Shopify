import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import data, { DATA } from "./data";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-product" element={<AddProduct />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
