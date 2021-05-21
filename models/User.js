const { uniqueId } = require('lodash');
const { Model, DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
    }
 }

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            unique: true

        },

        password: {
            type: DataTypes.STRING,
            validate: {
                len: [8]
            }

        },

        last_Login: {
            type: DataTypes.DATE

        },

        create_Date: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW

        },

        balance: {
            type: DataTypes.DECIMAL,
            defaultValue: 600000.00
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                console.log('bcrypt worked');
                return newUserData;
            },

        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;