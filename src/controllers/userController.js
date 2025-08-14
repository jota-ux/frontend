const UserService = require('../services/userService');

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    async createUser(req, res) {
        try {
            const userData = req.body;
            const user = await this.userService.createUser(userData);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAllUsers(req, res) {
        try {
            const users = await this.userService.findAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error:error.message });
        }
    }
}