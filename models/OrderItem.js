const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OrderItem extends Model { }

OrderItem.init(
    {
        order_Number: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Order',
                key: 'order_number'
            }

        },

        product_Id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Product',
                key: 'product_id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'orderItem'
    }
);

module.exports = OrderItem;
