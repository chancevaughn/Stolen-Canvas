const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
    {
        order_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            default: 10000
        },
    
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'user_id'
            }
        
    },
    
        created_date: {
            type: DataTypes.DATE
        
    },
    
        grand_total: {
            type: DataTypes.DECIMAL
        
    },
    
        paid: {
            type: DataTypes.BOOLEAN
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'order'
      }
);

module.exports = Order;