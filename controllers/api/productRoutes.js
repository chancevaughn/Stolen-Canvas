const router = require('express').Router();
const { Product } = require('../../models');
//gets all products from db
router.get('/', async (req, res) => {
    Product.findAll()
    .then((products) => {
        res.json(products);
    })
})
//gets product by id
router.get('/:id', async (req, res) => {
    Product.findByPk(req.params.id)
    .then((singleProduct) => {
        res.json(singleProduct);
    })
})

router.post('/', async (req, res) => {
    Product.create(req.body)
    .then((newProduct) => {
        res.json(newProduct);
    })
    //TODO: Handle adding item to order, check login status before update
    //TODO: Handle finalizing of order(change order status, update ownership, change account value)
});

module.exports = router;