import express from "express";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://navik81254:Barmana@cluster0.mwp78za.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const app=express();

app.listen(3000,()=>{
    console.log("Server is running!!!")
})