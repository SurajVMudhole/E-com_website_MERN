// Import all the libraries here
import express from "express";
import bodyParser from "body-parser";
//------------------------------------------------------------------------------
//import all the costom libraries
import ProductRouter from "./src/features/product/product.routers.js";
import userRoutes from "./src/features/user/user.routes.js";
import basicAuthorizer from "./src/middlewares/basicAuth.middleware.js";
//------------------------------------------------------------------------------
// create consts
const server = express();
const port = 8080;
//------------------------------------------------------------------------------

//Redirect API paths
server.use(bodyParser.json());
server.use("/api/products", basicAuthorizer, ProductRouter);
server.use("/api/Users", userRoutes);
//------------------------------------------------------------------------------

// Router paths defined here
server.get("/", (req, res) => {
  res.status(200).send("Welcome to E-commerce Webservice!");
});
//------------------------------------------------------------------------------

//Start the server
server.listen(port, (err) => {
  if (err) console.error(`Failed to start server: ${err}`);
  else {
    console.log(`Server is Up on port ${port}`);
    console.log(`http://localhost:${port}`);
  }
});
//------------------------------------------------------------------------------
