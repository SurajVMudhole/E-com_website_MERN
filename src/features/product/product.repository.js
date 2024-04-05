import { ApplicationError } from "../../ErrorHandler/ApplicationError.js";
import { getDB } from "../../config/mongodb.js";
import { ObjectId } from "mongodb";

class ProductRepository {
  constructor() {
    this.collection = "products";
  }
  async add(newProduct) {
    try {
      //1. get db
      const db = getDB();
      //2.get collections
      const collection = db.collection(this.collection);
      return await collection.insertOne(newProduct);
    } catch (err) {
      throw new ApplicationError(`Failed to add to database\n${err}`, 500);
    }
  }
  async getAll() {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      return await collection.find();
    } catch (err) {
      throw new ApplicationError(`Could not find \n${err}`, 500);
    }
  }
  async get(id) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      return await collection.find({ _id: ObjectId(id) });
    } catch (err) {
      throw new ApplicationError(`Could not find \n${err}`, 500);
    }
  }
}

export default ProductRepository;
