const db = require("../database/connectdb");

const getAllProducts = async(req, res) =>{
    try{
          const result = await db.query("SELECT * FROM mallu_product");
          res.send(result);
    } catch(err)
    {
        console.error(err);
        res.send("Error"+err);
    }
};

const addsProduct = async(req, res) =>{
    const {name, price} = req.body;
    try{
         const result = await db.query("INSERT INTO mallu_product(name, price) VALUES ($1,$2) RETURNING", [name, price]);
         res.send(result);
         res.end();

} catch(err){
    console.err(error);
    res.send("Error"+err);
    res.end();

}
};
module.exports = {
    getAllProducts,
    addsProduct,
    getAllProducts
};