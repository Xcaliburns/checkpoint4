import React from "react";
import { useState, useEffect } from "react";
import CallApi from "../services/CallApi";
import Navbar from "../components/Navbar";

function Admin() {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState([]);
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [productData, setProductData] = useState([]);
  const [productId, setProductId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductId(product.id);
    if (description && price && photo && title) {
      CallApi.post("api/product", {
        description,
        price: parseFloat(price[0]),
        photo,
        title,
      })
        .then(() => {})
        .catch((err) => console.log(err.response.data));
    } else {
      alert("Please specify a description, a price and a password");
    }
  };

  useEffect(() => {
    CallApi.get("/api/product")
      .then((res) => setProductData(res.data))
      .catch((err) => console.error(err));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    if (description && price && photo && title)
      CallApi.put(`/api/product/${productId}`, {
        description,
        price: parseFloat(price[0]),
        photo,
        title,
      })
        .then(() => {})
        .catch((err) => console.log(err.response.data));
    else {
      alert("Please specify a description, a price  a password and a title");
    }
  };

   
  const handleProductChange=(e)=> {
    setProductId(e.target.value);
  }
  console.log(price);
  console.log(productId);
  return (
    <div className="flex flex-col items-center bg-gray-500 h-full">
      {" "}
      <Navbar />
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-gray-800 shadow-xl border-solid sm:max-w-md sm:rounded-lg">
        <form className="bg-gray-800 " onSubmit={handleSubmit}>
          <div className="bg">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-400 undefined"
            >
              description
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                name="description"
                className="block w-2/3 rounded-md"
                id="description"
                minlength="4"
                maxlength="100"
                size="80"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-400 "
            >
              prix
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                name="Id"
                className=" block w-2/3 rounded-md"
                id="Id"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-400 "
            >
              photo
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={(e) => setPhoto(e.target.value)}
                type="text"
                name="photo"
                className=" block w-2/3 rounded-md"
                id="photo"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-400 "
            >
              titre
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="photo"
                className=" block w-2/3 rounded-md"
                id="photo"
              />
            </div>
          </div>
          <button
            type="button"
            className=" block w-2/3 rounded-md"
            onClick={handleSubmit}
          >
            Creer
          </button>
        </form>
      </div>
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-gray-800 shadow-xl border-solid sm:max-w-md sm:rounded-lg">
        <form className="bg-gray-800 " onSubmit={handleUpdate}>
          <div className="bg">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-400 undefined"
            >
              Description
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                name="description"
                className="block w-2/3 rounded-md"
                id="description"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-400 "
            >
              Price
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="price"
                name="price"
                className=" block w-2/3 rounded-md"
                id="price"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-400 "
            >
              Photo
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={(e) => setPhoto(e.target.value)}
                type="text"
                name="photo"
                className=" block w-2/3 rounded-md"
                id="photo"
              />
            </div>
          </div>

           <div className="mt-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-400 "
            >
              Titre
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="titre"
                className=" block w-2/3 rounded-md"
                id="photo"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="titre"
              className="block text-sm font-medium text-gray-400 "
            >
              titre
            </label>
            <select
             value={productId}
             onChange={handleProductChange}
              className="pl-2 text-black h-10 rounded-lg bg-gray-200 shadow-lg shadow-blue-500/50 "
            >
              {productData.map((product) => (
                <option
                  className="text-black"
                  value={product.id}
                  key={product.id}  
                             
                >
                  {product.title}            
                  
                </option>
              ))}
            </select>
            {/* <option value="">---</option> */}
          </div>
          <button
            type="submit"
            onClick={handleUpdate}
            className="inline-flex items-center px-4 py-2 mt-4 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;