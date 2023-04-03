const db =require("./db.js");



const findAll= async ()=> {
    try{
        const [cartproducts] = await db.query("select * from `cart_product`");

        return cartproducts;
    }catch(e){
        console.log(e);
    }
};

const addOne = async (cartProduct) => {
  try {
    const { cartId, productId, quantity } = cartProduct;
    const [result] = await db.query(
      "INSERT INTO cart_product (cart_id, product_id, quantity) VALUES (?, ?, ?)",
      [cartId, productId, quantity]
    );
    if (result.affectedRows !== 1) {
      throw new Error("La requête à échoué");
    }
    const newCartProduct = {id: result.insertId, cartId, productId, quantity };
    return newCartProduct;
  } catch (error) {
    throw new Error(`Impossible de creer la commande: ${error}`);
  }
};

  const findOne= async (id)=> {
    try{
        const [cartproduct] = await db.query("SELECT cp.*, p.description, p.price, p.photo FROM `cart_product` cp INNER JOIN `product` p ON cp.product_id = p.id WHERE cp.id = ? ", [id]);

        return cartproduct;
    }catch(e){
        console.log(e);
    }
};


  module.exports ={addOne, findAll,findOne};