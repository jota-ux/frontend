const User = require('../models/userModel');

const users = [];

class UserRepository {

    save(userData) {
        const user = new User(userData.ID++, userData.name, userData.email);
        users.push(user);
        return user;
}  
findAll() {
        return users;
    }
}                                                                                                                                                                                                                                        