import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <form
      onSubmit={handleSubmit}
      style={{ width: "18rem" }}
      className="m-auto mt-5"
    >
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          className="form-control"
          id="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          className="form-control"
          id="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Connexion
      </button>
    </form>
  );
}

export default Login;