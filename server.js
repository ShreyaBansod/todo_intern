const express = require('express');
const dotenv=require("dotenv").config();  //configuring 

const connectDB=require("./config/dbConnection");//IMPORT DB
const app=require("./app");

//Handling Uncaught Exception
//  process.on("uncaughtException",(err)=>{
//     console.log(`Error: ${err.message}`);
//     console.log(`Shutting down the server due to uncaught exception`);
//     process.exit(1);
// });

//Connecting DB
connectDB();

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server working on http://localhost:${process.env.PORT}`);
});

//Unhandled promise rejection
//  process.on("unhandledRejection",(err)=>{
//     console.log(`Error: ${err.message}`);
//     console.log(`Shutting down the server due to unhandled promise rejection`);
 
//     server.close(()=>{
//       process.exit(1);
//     });

// });