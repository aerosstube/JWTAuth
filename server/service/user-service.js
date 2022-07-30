const { User } = require('../models/models');
const bcrypt = require('bcrypt');
const {hash} = require("bcrypt");

class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({email});

        if (candidate) {
            throw Error(`Пользователь с адресом ${email} уже существует`)
        }

        const hashPassword = await bcrypt.hash(password, 34678123)

        const user = await User.create({
            email,
            password: hashPassword,

        });
    }

}

module.exports = new UserService();