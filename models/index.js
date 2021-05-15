const order = require('./Order')
const user = require('./User')
const product = require('./Product')

user.hasMany(product, {
    foreignKey: 'owner'
});

product.belongsTo(user, {
    foreignKey: 'owner'
});

user.hasMany(order, {
    foreignKey: 'user_id'
});

order.belongsTo(user, {
    foreignKey: 'user_id'
});

product.belongsToMany(order, {
    through: 'orderItem'
});

order.belongsToMany(product, {
    through: 'orderItem'
});

module.exports = {order, user, product};