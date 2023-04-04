import React from "react";
import { useState } from "react";
import CallApi from "../services/CallApi";
import Navbar from "../components/Navbar";

function Admin() {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState([]);
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && price && photo && title) {
      CallApi
        .post("api/product", { description,price: parseFloat(price[0]),  photo, title })
        .then(() => {
               
        })
        .catch((err) => console.log(err.response.data));
    } else {
      alert("Please specify a description, a price and a password");
    }
  };

  console.log(price)

  return (  <div className="flex flex-col items-center bg-gray-500 h-full"> <Navbar />
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
        <button type="button"   className=" block w-2/3 rounded-md" onClick={handleSubmit}>Creer</button>
      </form>
    </div>
    </div>
  );
}

export default Admin;
