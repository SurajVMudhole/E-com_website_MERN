// Import all the libraries here
import express from "express";
import bodyParser from "body-parser";
import swagger from "swagger-ui-express";
import dotenv from "dotenv";
dotenv.config();
//------------------------------------------------------------------------------
//import all the costom libraries
import ProductRouter from "./src/features/product/product.routers.js";
import userRoutes from "./src/features/user/user.routes.js";
import CartRoutes from "./src/features/cartitems/cartitems.routes.js";
import basicAuthorizer from "./src/middlewares/basicAuth.middleware.js";
import loggerMiddleware from "./src/middlewares/logger.middleware.js";
import { ConnectTOMongoDb } from "./src/config/mongodb.js";
// import apiDoc from "./swagger.json"
// assert type: 'json';
//------------------------------------------------------------------------------
// create consts
const server = express();
const port = process.env.PORT;

//------------------------------------------------------------------------------

//Redirect API paths
server.use(bodyParser.json());
server.use(loggerMiddleware);
server.use("/api/products", basicAuthorizer, ProductRouter);
server.use("/api/Users", userRoutes);
server.use("/api/carts", basicAuthorizer, CartRoutes);
server.use((req, res) => {
  res.status(404).send("Oops!! this is not valid url");
});
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
    ConnectTOMongoDb();
  }
});
//------------------------------------------------------------------------------
