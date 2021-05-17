
const { Product } = require('../models');
const { User } = require('../models');

const userData = [
    {
        email: "stolenCanvas@SC.com",
        password: "IStoleAllOfIt",
        balance: 500000.00
    },
    {
        email: "garrett.fite@gmail.com",
        password: "garrettfite",
        balance: 120000.00
    }
]

const productData = [
    {
        title: "Up the Hudson",
        description: "hudson_desc",
        value: 10251.25,
        owner: 1
    },
    {
        title: "Cape Cod Morning",
        description: "capeCod_desc",
        value: 75320.10,
        owner: 1
    },
    {
        title: "Manhattan",
        description: "manhattan_desc",
        value: 89584.98,
        owner: 2
    }
]
const seedUsers = () => User.bulkCreate(userData);
const seedProduct = () => Product.bulkCreate(productData);
