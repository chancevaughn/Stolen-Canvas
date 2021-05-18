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

//const res = await axios.put('https://localhost:3001/api/product/', { hello: 'world' });

const updateProductOwner = (user, items) => {
    items.map((x) => {
        {owner: user},
        {where: {product_id: x }}
    })
}

//changes owner of product
router.put('/:userid/:product/', async (req, res) => {
    //Check product ids where order number in order items match
    //update the ownership of all items in order to user_id
    console.log(req);
    Product.update(
        {
        owner: 1//FIXME: hardcoded value
        },
        {
            where: {
                product_id: 2//FIXME: hardcoded value
            }
        }
    )
    .then((updatedProduct) => {
        res.json(updatedProduct)
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
})

router.post('/', async (req, res) => {
    //TODO: Handle adding item to order, check login status before update
    //TODO: Handle finalizing of order(change order status, update ownership, change account value)
});

module.exports = router;