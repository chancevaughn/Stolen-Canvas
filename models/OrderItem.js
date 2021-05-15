const { Model, DataTypes } = require('sequelize');
const sequelize = require('..');

class Order_Item extends Model {}

Order_Item.init(
    {
        order_Number: {
            
        },
    },
    {
        product_Id: {
            
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Order_Item'
      }
);

module.exports = Order_Item;
