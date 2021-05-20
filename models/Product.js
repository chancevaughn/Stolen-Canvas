const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model { }

Product.init(
    {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING

        },

        thumbnail: {
            type: DataTypes.STRING
        },

        name: {
            type: DataTypes.STRING
        },

        content: {
            type: DataTypes.STRING(3000)

        },

        founder: {
            type: DataTypes.BOOLEAN

        },

        owner: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'user_id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product'
    }
);

module.exports = Product;