// Import all the libraries here
import express from "express";
//------------------------------------------------------------------------------
//import all the costom libraries
import ProductRouter from "./src/features/product/product.routers.js";
//------------------------------------------------------------------------------
// create consts
const server = express();
const port = 8080;
//------------------------------------------------------------------------------

//Redirect API paths
server.use("/api/products", ProductRouter);
//------------------------------------------------------------------------------

// Router paths defined here
server.get("/", (req, res) => {
  res.status(200).send("Welcome to E-commerce Webservice!");
});
//------------------------------------------------------------------------------

//Start the server
server.listen(port, (err) => {
  if (err) console.error(`Failed to start server: ${err}`);
  else console.log(`Server is Up on port ${port}`);
});
//------------------------------------------------------------------------------
