import UserModel from "../features/user/user.model.js";
const basicAuthorizer = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader)
        return res.status(401).send("Unauthorized, No User Credentials found!!  ");
    const base64Credentials = authHeader.replace("Basic", "");
    const decodeCreds = Buffer.from(base64Credentials, "base64").toString("utf8");
    const Creds = decodeCreds.split(":");
    const user = UserModel.getAll().find(
        (u) => u.email == Creds[0] && u.password == Creds[1]
    );
    if (!user) return res.status(401).send("Invalid username or password");
    else next();
};
export default basicAuthorizer;