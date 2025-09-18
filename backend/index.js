const express = require("express")
const connectDB = require("./db")


const app = express();
require("dotenv").config();
connectDB();

const port = process.env.PORT || 5000;

app.listen(port , ()=>{
    console.log(`Server Running On PORT:: ${port}`)
})