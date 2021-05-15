const { Model, DataTypes } = require('sequelize');
const sequelize = require('..');

class Order extends Model {}

Product.Order(
    {
        order_number: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        }
    },
    {
        user_id: {

        }
    },
    {
        created_date: {
            type: DataTypes.DATE
        }
    },
    {
        grand_total: {
            type: DataTypes.INTEGER
        }
    },
    {
        paid: {
            type: DataTypes.BOOLEAN
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