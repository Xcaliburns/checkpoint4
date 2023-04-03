import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar"
import callApi from "../Services/CallApi";
import { useUserContext } from "../context/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const { setUser,setUserName,setUserId,setUserEmail } = useUserContext();

  const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();

  if (email && password) {
    callApi
      .post("/api/login", { email, password })
      .then((res) => {
        // setUser(res.data);
        setUserName(res.data.name);
        setUserEmail(res.data.email);
        setUserId(res.data.userId);
        // localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("userName", JSON.stringify(res.data.name));       
        localStorage.setItem("userEmail", JSON.stringify(res.data.email));
         localStorage.setItem("userId",JSON.stringify(res.data.userId));
        navigate("/");
      })
      .catch((err) => console.log("OHNOOOOO"));
  } else {
    alert("Please specify email and password");
  }
};


  return (
    <div className="h-full">
    <div className="flex flex-col h-full  bg-slate-500"><Navbar/>
    <form
   
      onSubmit={handleSubmit}
      
      className="flex flex-col text-xl ml-5 text-left items-between mt-12"
    >
      <div className="flex flex-row my-10">
        <label htmlFor="email" className="w-1/2">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          className="rounded mr-10"
          id="email"
        />
      </div>
      <div className="flex flex-row my-10">
        <label htmlFor="password" className="w-1/2">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          className="rounded mr-10"
          id="password"
        />
      </div>
      <button type="submit" className="bg-blue-500 flex ml-36 mt-10 rounded w-36 justify-center )">
        Connexion
      </button>
    </form></div></div>
  );
}

export default Login;