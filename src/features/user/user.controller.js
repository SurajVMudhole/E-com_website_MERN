import UserModel from "./user.model.js";
export default class UserController {
  async signUp(req, res) {
    const AddedUser = await UserModel.signup(
      req.body.name,
      req.body.email,
      req.body.password,
      req.body.type
    );
    res.status(201).send(AddedUser);
  }
  signIn(req, res) {
    res.status(200).send("Welcome");
  }
}
