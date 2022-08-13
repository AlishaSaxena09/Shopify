import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imgUrl: "",
    price: 0,
    ratings: 0,
  });
  const [errors, setErrors] = useState([]);
  const [successError, setSuccessError] = useState("");

  const updateFormData = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };
  const validateErrors = () => {
    const newErrorsObj = {};
    if (formData.name.length < 3) {
      newErrorsObj.name =
        "Product name shouldn't be greater than 3 characters.";
    }
    if (formData.description.length < 5) {
      newErrorsObj.description =
        "Product description shouldn't be greater than 5 characters.";
    }
    if (formData.imgUrl.length === 0) {
      newErrorsObj.imgUrl = "Product should have a image url.";
    }
    if (formData.price < 1) {
      newErrorsObj.price = "Product price shouldn't be greater than 0 rupess.";
    }
    console.log(newErrorsObj);
    setErrors(newErrorsObj);
    return Object.keys(newErrorsObj).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateErrors() === 0) {
      console.log(formData);
      const products = localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : [];
      console.log(products);
      setSuccessError("Product added successfully!");
      localStorage.setItem(
        "products",
        JSON.stringify(products.concat(formData))
      );
    }
  };
  return (
    <div className="w-full mx-auto max-w-lg px-8 py-4 my-8 bg-white shadow border border-solid border-gray-200 rounded-lg">
      <h2 className="text-3xl font-medium mb-4 text-center">Add Product</h2>
      <form className="" onSubmit={handleSubmit}>
        <label className="flex flex-col">
          <span className="font-medium">Product Name</span>
          {errors.name ? (
            <span className="text-red-600">{errors.name}</span>
          ) : null}
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="text"
            name="title"
            value={formData.name}
            onChange={(e) => updateFormData("name", e.target.value)}
          ></input>
        </label>
        <label className="flex flex-col mt-2">
          <span className="font-medium">Product Description</span>
          {errors.description ? (
            <span className="text-red-600">{errors.description}</span>
          ) : null}
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={formData.description}
            onChange={(e) => updateFormData("description", e.target.value)}
            type="text"
            name="description"
          ></input>
        </label>{" "}
        <label className="flex flex-col mt-2">
          <span className="font-medium">Product Image</span>
          {errors.imgUrl ? (
            <span className="text-red-600">{errors.imgUrl}</span>
          ) : null}
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={formData.imgUrl}
            onChange={(e) => updateFormData("imgUrl", e.target.value)}
            type="text"
            name="description"
          ></input>
        </label>
        <label className="flex flex-col mt-2">
          <span className="font-medium">Price</span>
          {errors.price ? (
            <span className="text-red-600">{errors.price}</span>
          ) : null}
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={formData.price}
            onChange={(e) => updateFormData("price", e.target.value)}
            type="number"
            name="description"
          ></input>
        </label>
        <label className="flex flex-col mt-2">
          <span className="font-medium">Ratings</span>
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={formData.ratings}
            onChange={(e) => updateFormData("ratings", e.target.value)}
            type="number"
            name="ratings"
          ></input>
        </label>
        {successError ? (
          <p className="bg-green-200 text-green-700 py-2 px-4 rounded-lg mt-4">
            {successError}
          </p>
        ) : null}
        <div className="flex flex-col items-end my-4">
          <input
            type="submit"
            value="Add Product"
            className="font-medium border border-gray-300 py-2 px-4 rounded-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
