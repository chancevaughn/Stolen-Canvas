const { Model, DataTypes } = require('sequelize');
const sequelize = require('..');

class Product extends Model {}

Product.init(
    {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        }
    },
    {
        description: {
            type: DataTypes.STRING
        }
    },
    {
        value: {
            type: DataTypes.DECIMAL
        }
    },
    {
        owner: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'user_id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Product'
      }
);

module.exports = Product;