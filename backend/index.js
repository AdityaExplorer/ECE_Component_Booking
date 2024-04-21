const express = require("express");
const mongoose = require("mongoose");
const {create,login} = require("./controller/auth")
const {create:orderCreate} = require("./controller/order")
const cors = require("cors");
const { connection } = require("./configs/db");
const app = express();

app.use(cors());
app.use(express.json());


app.get("/",async (req,res)=>{
    res.send("This is homepage")
})

app.post("/signup",create)
app.post("/login",login)
app.post("/order",orderCreate)




app.listen(4000, async () => {
    try {
      await connection;
      console.log("Connected with Database");
    } catch (error) {
      console.log(error);
    }
    console.log("Server is Running at PORT 4000");
  });