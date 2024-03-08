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
                `User Created.\n Name: ${req.body.name}\n Email: ${req.body.email}`
            );
    }
    signIn(req, res) {
        const result = UserModel.signin(req.body.email, req.body.password);
        if (!result) res.status(400).send("User login Failed!");
        else res.status(200).send("User login successful    ");
    }
}