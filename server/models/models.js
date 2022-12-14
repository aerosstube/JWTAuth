const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, require: true },
    password: { type: DataTypes.STRING, require: true },
    isActivated: { type: DataTypes.BOOLEAN, default: false },
    activationLink: { type: DataTypes.STRING }
});

const Token = sequelize.define('token', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    refreshToken: { type: DataTypes.STRING, require: true }
});

User.hasOne(Token);
Token.belongsTo(User);

module.exports = {
    User,
    Token
};