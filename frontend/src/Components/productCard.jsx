import React from 'react'

function ProductCard({description,price,photo,title}) {
  return (
    <>  
  <div className="bg-red mt-10">{title}</div>       
<img src ={`/images/${photo}`} />     
 <div className="bg-red mt-10">{price}</div>
        <div className="bg-red mt-10">{description}</div>
        
    </>
  )
}

export default ProductCard