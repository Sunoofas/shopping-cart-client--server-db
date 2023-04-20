const pgp = require("pg-promise")();

const connectUrl = "postgressql://postgres:1234@localhost:5432/mallu_shop";
const db = pgp(connectUrl);

db.any("SELECT * FROM mallu_product")
    .then((data) =>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });

    db.any("SELECT * FROM mallu_cart")
       .then((data) =>{
          console.log(data);
       })
       .catch((error) =>{
           console.log(error);
       });

       module.exports = db;