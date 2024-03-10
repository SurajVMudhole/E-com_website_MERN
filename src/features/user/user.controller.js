import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
export default class UserController {
  signUp(req, res) {
    UserModel.signup(
      req.body.name,
      req.body.email,
      req.body.password,
      req.body.type
    );
    res
      .status(201)
      .send(
        `User Created.\n Name: ${req.body.name}\n Email: ${req.body.email}`
      );
  }
  signIn(req, res) {
    const result = UserModel.signin(req.body.email, req.body.password);
    console.log(result);
    if (!result) {
      res.status(400).send("User login Failed!");
    } else {
      const token = new jwt.sign(
        { email: result.email },
        "HlpNljWaP1EFVoWpKWLoSAYGnNdC7mYc",
        {
          expiresIn: "1h",
        }
      );
      //2.send token
      console.log(token);
      return res.status(200).send(token);
    }
  }
}
