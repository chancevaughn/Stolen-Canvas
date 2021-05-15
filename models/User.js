const { Model, DataTypes } = require('sequelize');
const sequelize = require('..');

class User extends Model {}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING
        }
    },
    {
        password: {
            type: DataTypes.STRING
        }
    },
    {
        last_Login: {
            type: DataTypes.STRING
        }
    },
    {
        create_Date: {
            type: DataTypes.STRING
        }
    },
    {
        balance: {
            type: DataTypes.DECIMAL
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
      }
);

module.exports = User;