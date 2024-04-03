import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017/ecomDB";
let client;
export function ConnectTOMongoDb() {
  MongoClient.connect(url)
    .then((clientInstance) => {
      client = clientInstance;
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Error connecting to database");
    });
}

export const getDB = () => {
  return client.db();
};
