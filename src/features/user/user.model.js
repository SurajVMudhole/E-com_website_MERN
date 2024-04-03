import { getDB } from "../../config/mongodb.js";
import { ApplicationError } from "../../ErrorHandler/ApplicationError.js";
import bcrypt from "bcrypt";
export default class UserModel {
  constructor(name, email, password, type) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
  }
  static async signup(name, email, password, type) {
    const hashedPassword = await bcrypt.hash(password, 12);
    let newUser = new UserModel(name, email, hashedPassword, type);
    try {
      const db = getDB();
      const collection = db.collection("users");
      let result = await collection.insertOne(newUser);
      if (result) return result;
    } catch (err) {
      throw new ApplicationError("Failed to insert user", 500);
    }
  }
  static signin(email, password) {
    const result = Users.find((u) => u.email == email);
    if (!result) return false;
    if (result.password === password) return result;
    else return false;
  }
  static getAll() {
    return Users;
  }
}

let Users = [
  {
    name: "Seller User",
    email: "seller@ecom.com",
    password: "seller@12345",
    type: "seller",
  },
];
