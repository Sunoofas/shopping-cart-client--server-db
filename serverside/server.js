const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const productRouter = require('./routes/routeProducts');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({type:"application/json"}));
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api', productRouter);



app.listen(8000, ()=>{
    console.log(`Server is running on port 8000`);
});