const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/user.route");
const bodyParser = require('body-parser');
const router = require("./routes/product.route");
const cors = require('cors');

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce").then(()=>{
    console.log("conneted");
})

const app = express();

app.use(bodyParser.json());
app.use(cors());
const port = 8080;
app.use("/v1",authRouter)
app.use("/v1",router)
app.use(express.json(({limit:"10kb"})));

app.listen(port,(req,res)=>{
    console.log(`server is running on port ${8080}`)
})