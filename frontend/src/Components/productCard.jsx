import React from 'react'

function ProductCard({description,price,photo,title}) {
  return (
    <div className='flex flex-row items-center border-2  border-black-200 bg-gray-100 rounded-md   mt-3 mx-10'>  
    <img className='h-24 max-w-48 rounded-md  'src ={`/images/${photo}`} /> 
   <div className='flex flex-col ml-10 w-1/2 text-center items-right '> <div className="  text-xl pl-5">{title}</div>     
    <div className="bg-red mt-10 pl-5 text-2xl">{price}  €</div></div>
    <div className="bg-red mt-10">{description}</div>
        
    </div>
  )
}

export default ProductCard