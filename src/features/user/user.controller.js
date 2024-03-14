import UserModel from "./user.model.js";
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
        `User Created.\n Name: ${req.body.name} with Email: ${req.body.email}`
      );
  }
  signIn(req, res) {
    res.status(200).send("Welcome");
  }
}
