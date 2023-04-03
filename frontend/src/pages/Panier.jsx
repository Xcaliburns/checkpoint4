import React from 'react'
import {useState,useEffect} from "react";
import { useUserContext } from "../context/UserContext";
import CallApi from "../Services/CallApi"

function panier() {
  const [cart,setCart]=useState([]);
  const [cartproductlist,setCartProductList]=useState([]);
  const { userId } = useUserContext();
  //je veux recuperer le dernier cart du user:
  //----il me faut tout les carts
 useEffect(() => {
  CallApi.get("/api/cart")
    .then((res) => {console.log(res.data)
      const filteredData = res.data.filter(item => item.user_id === parseInt(userId,10));
      setCart(filteredData[filteredData.length-1]);
      // console.log(res.data)
       console.log(userId)
    })
    .catch((err) => console.error(err));
}, []);

   useEffect(() => {
  CallApi.get("/api/cartproduct/")
    .then((res) => {console.log(res.data)
      const filteredData = res.data.filter(item => item.cart_id === cart.id);
      console.log(filteredData);
    setCartProductList(res.data)
      //  console.log(userId)
    })
    .catch((err) => console.error(err));
}, []);


console.log(cartproductlist)

 
  //-----il me faut product cart qui ont le meme id que les cart du user 
  //je veux recuperer les articles du panier (product_cart)
  return (
    <div>
        { cartproductlist.map(
          (product) =><div key="product.id">
            {product.title}
            {product.price}
             <img src ={`/images/${product.photo}`} />        
             </div>)}
    </div>
  )
}

export default panier;