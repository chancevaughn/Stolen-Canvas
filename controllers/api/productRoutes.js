const router = require('express').Router();
const { Product, Order, OrderItem } = require('../../models');

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
//Fix if time, sequelize doesn't use models on Many-to-Many
// router.post('/add', async (req, res) => {
//     if (req.session.logged_in){
//         console.log(req.body);
//         Order.findOne({
//             where: {
//                 user_id: req.session.user_id,
//                 paid: false//FIXME: change to closed
//             }
//         })
//             .then(selectedOrder => {
//                 console.log(selectedOrder);
//                 if(selectedOrder){
//                     OrderItem.create({
//                         order_order_Number: selectedOrder.order_number,
//                         product_product_Id: parseInt(req.body.productID)
//                     })
//                 }
//                 else {
//                     Order.create({
//                         user_id: req.session.user_id,
//                         paid: false
//                     })
//                     .then(newOrder => {
//                         OrderItem.create({
//                             order_order_number: newOrder.order_number,
//                             product_product_Id: parseInt(req.body.productID)
//                         })
//                     })


//                 }

//             })
//             .catch((err) => console.log(err))
//         }
//     else {
//         res.status(403).redirect('/login');
//     }

// });

module.exports = router;