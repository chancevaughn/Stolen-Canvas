const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order_Item extends Model { }

Order_Item.init(
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
        modelName: 'order_item'
    }
);

module.exports = Order_Item;
