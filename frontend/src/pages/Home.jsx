import React from 'react'
import { useEffect ,useState} from 'react';
import { useUserContext } from "../context/UserContext";
import callApi from " ../Services/CallApi";
import ProductCard from '../Components/productCard';
function home() {

  const [product,setProduct]=useState([]);
  const { userName,user,userEmail,userId } = useUserContext();
  useEffect(() => {
  callApi.get("/api/product")
    .then((res) => setProduct(res.data))
    .catch((err)=>console.error(err));
}, []);
  // console.log(user)
 console.log(userName)
  console.log(userEmail)
   console.log(userId)

//  const handleAdd=(()=>{
//     callApi.post("api/cartproduct",{
//       cartId,productId,quantity
//     })
//   })
 return (
<div className='flex flex-col'>
  <div className='text-xl'>Bienvenue {userName}</div>
  <div>
    { Array.isArray(product) && product.length > 0 ? (
      product.map((product) => (
        <ProductCard
          key={product.id}
          photo={product.photo}
          price={product.price}
          title={product.title} />
        // {/* <button type="button" onClick={handleAdd}>ajouter au panier</button> */}
      ))
    ) : (
      <p>No products found.</p>
    )}
  </div>
</div>

  
)
}

export default home