const Order = require('./Order')
const User = require('./User')
const Product = require('./Product')

User.hasMany(Product, {
    foreignKey: 'owner'
});

Product.belongsTo(User, {
    foreignKey: 'owner'
});

User.hasMany(Order, {
    foreignKey: 'User_id'
});

Order.belongsTo(User, {
    foreignKey: 'User_id'
});

Product.belongsToMany(Order, {
    through: 'OrderItem'
});

Order.belongsToMany(Product, {
    through: 'OrderItem'
});

module.exports = {Order, User, Product}