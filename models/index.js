const Order = require('./Order')
const User = require('./User')
const Product = require('./Product')
const OrderItem = require('./OrderItem')

User.hasMany(Product, {
    foreignKey: 'owner'
});

Product.belongsTo(User, {
    foreignKey: 'owner'
});

User.hasMany(Product, {
    foreignKey: 'incart'
});

Product.belongsTo(User, {
    foreignKey: 'incart'
});

User.hasMany(Order, {
    foreignKey: 'user_id'
});

Order.belongsTo(User, {
    foreignKey: 'user_id'
});

Product.belongsToMany(Order, {
    through: 'orderItem'
});

Order.belongsToMany(Product, {
    through: 'orderItem'
});

module.exports = {Order, User, Product, OrderItem};