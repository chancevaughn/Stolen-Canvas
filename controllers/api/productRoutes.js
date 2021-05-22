const router = require('express').Router();
const { Product, Order, OrderItem, User } = require('../../models');
const helpers = require('../../utils/helpers')

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

router.post('/search', async (req, res) => {
    Product.findOne({
        where: {
            title: req.body.input
        }
    })
        .then((singleProduct) => {
            if (req.session.searchHistory) {
                req.session.save(() => {
                    req.session.searchHistory.push(req.body.input);
                    res.status(200).redirect(`/art/${singleProduct.product_id}`)
                })
            }
            else {
                req.session.save(() => {
                    req.session.searchHistory = [req.body.input];
                    res.status(200).redirect(`/art/${singleProduct.product_id}`)
                })
            }


        })
        .catch((err) => {
            res.status(400).json(err);
        })

})

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

router.put('/add', async (req, res) => {
    if (req.session.logged_in) {
        console.log(req.body);
        Product.update({
            incart: req.session.user_id
        },
            {
                where: {
                    product_id: req.body.productID
                }
            })
            .then((updatedProduct) => {
                res.status(200).json(updatedProduct);
            })
            .catch((err) => {
                res.status(400).json("Failed to add to cart")
            })
    }
    else {
        res.status(403);
    }
})

router.put('/remove', async (req, res) => {
    if (req.session.logged_in) {
        console.log(req.body);
        Product.update({
            incart: null
        },
            {
                where: {
                    product_id: req.body.productID
                }
            })
            .then((updatedProduct) => {
                res.status(200).json(updatedProduct);
            })
            .catch((err) => {
                res.status(400).json("Failed to add to cart")
            })
    }
    else {
        res.status(400)
    }
})

router.put('/checkout', async (req, res) => {
    try {
        if (req.session.logged_in) {
            console.log(req.body);
            const checkoutUser = await User.findOne({
                where: {
                    user_id: req.session.user_id
                },
                attributes: {
                    exclude: ['password, create_date, last_login']
                }
            })
            const dbCartItems = await Product.findAll({
                where: {
                    incart: req.session.user_id
                }
            })
            const cartItems = dbCartItems.map((item) => item.get({plain: true}));
            const grandTotal = helpers.calculateTotal(cartItems)
            if(checkoutUser.balance > grandTotal) {
                User.update({
                    balance : checkoutUser.balance - grandTotal,
                },
                {
                    where: {
                        user_id: checkoutUser.user_id
                    }
                })
                .then(() => {
                    Product.update({
                        incart: null,
                        owner: checkoutUser.user_id,
                    },
                    {
                        where: {
                            incart: checkoutUser.user_id,
                        }
                    })
                })
                .then(() => {
                    res.status(200).redirect('/account');
                })
            }
            else {
                res.status(401).json("Insufficient Funds")
            }
            
        }
        else {
            res.status(400)
        }
    }
    catch (err) {
        res.status(500)
    }
})

router.post('/search', async (req, res) => {
    Product.findOne({
        where: {
            title: req.body.input
        }
    })
        .then((singleProduct) => {
            res.status(200).redirect(`/art/${singleProduct.product_id}`)
        })
        .catch((err) => {
            res.status(400).json(err);
        })

        .then((singleProduct) => {
            if (req.session.searchHistory) {
                req.session.save(() => {
                    req.session.searchHistory.push(req.body.input);
                    res.status(200).redirect(`/art/${singleProduct.product_id}`)
                })
            }
            else {
                req.session.save(() => {
                    req.session.searchHistory = [req.body.input];
                    res.status(200).redirect(`/art/${singleProduct.product_id}`)
                })
            }


        })
        .catch((err) => {
            res.status(400).json(err);
        })

})



module.exports = router;