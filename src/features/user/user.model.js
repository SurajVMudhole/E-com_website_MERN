export default class UserModel {
    constructor(name, email, password, type) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
    }
    static signup(name, email, password, type) {
        const newUser = new UserModel(name, email, password, type);
        Users.push(newUser);
    }
    static signin(email, password) {
        const result = Users.find((u) => u.email == email);
        if (result.password === password) return result;
        else return false;
    }
}

var Users = [{
    name: "Seller User",
    email: "seller@ecom.com",
    password: "seller@12345",
    type: "seller",
}, ];