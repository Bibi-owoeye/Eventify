const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors")

let PORT = process.env.PORT

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }))


app.listen(PORT,()=>{
    console.log("server is working at port:" + PORT);
})