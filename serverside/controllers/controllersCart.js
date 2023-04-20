const db = require("../database/connectdb");

const getCartItem = async (req, res) =>{
    try{
        const result = await db.query(
            `SELECT mallu_cart.quantity, mallu_product.* FROM mallu_cart JOIN mallu_product ON mallu_cart.id = mallu_product.id`);
            res.status(200).json(result); 
    } catch(err){
          console.error(err);
          res.status(500).json({error:"Server error"});

    }
};


const addCartItem = async (req, res) =>{
   const {id} = req.body;
   try{
    const cart = await db.query("SELECT *FROM mallu_cart");
    console.log(cart);
    const existing = cart.find(item=> item.id ===id)
    console.log(existing);
    let result;

    if(!existing){
    let quantity =1;
    result = await db.query("INSERT INTO mallu_cart(id, quantiy) VALUES ($1,$2) RETURNING *",
    [id, quantity]
    );
    console.log(result);
    }
    console.log(req.body);
    console.log(id);
    res.status(200).json(result); 
   } catch (err){
    console.error(err);
    res.status(500).json({error:"Server error"});
   }
};