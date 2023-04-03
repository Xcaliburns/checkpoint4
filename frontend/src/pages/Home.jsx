import React from 'react';
import CallApi from "../Services/CallApi"
import { useEffect ,useState} from 'react';
import { useUserContext } from "../context/UserContext";
import Navbar from "../Components/Navbar"
import ProductCard from '../Components/productCard';
function home() {

  const [product,setProduct]=useState([]);
  const { userName,user,userEmail,userId } = useUserContext();
  useEffect(() => {
  CallApi.get("/api/product")
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
<div className='flex flex-col bg-slate-500 h-full '>
  <Navbar/>
  <div className='text-3xl mt-24 text-center mb-12'>Willkommen {userName}</div>
  <div className='flex flex-col rounded  '>
    { Array.isArray(product) && product.length > 0 ? (
      product.map((product) => (
        <ProductCard
        className=""
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