import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { userEmail } = useUserContext();
  return (
    <nav className="w-full bg-dark shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
           
              <h2 className="text-2xl font-bold text-white">indie World</h2>
           
           
          </div>
        </div>
        <div>
        
            <nav className=" flex flex-row justify-between space-y-8 md:flex md:space-x-6 md:space-y-0 text-xl text-gray-100">
              <div className=" hover:text-red-500 ">
                <NavLink to="/">Accueil</NavLink>
              </div>
              <div className=" hover:text-red-500 ">
                <NavLink to="/login">Login</NavLink>
              </div>
              <div className=" hover:text-red-500 ">
                <NavLink to="/signup">Inscription</NavLink>
              </div>
              <div className=" hover:text-red-500 ">
                <NavLink to="/panier">Panier</NavLink>
              </div>
              <div className=" hover:text-red-500 ">
                {userEmail === "david.abruzzo@sfr.fr" && (
                  <NavLink to="/admin">Admin</NavLink>
                )}
              </div>
            </nav>
          
        </div>
       
      </div>
    </nav>
  );
}
