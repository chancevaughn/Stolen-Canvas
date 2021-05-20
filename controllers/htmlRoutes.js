const router = require(`express`).Router();
const { Product } = require('../models');

router.get('/', async (req, res) => {
    res.render(`homepage`);//TODO: Homepage View Name
})

router.get('/gallery', async (req, res) => {
    const productData = await Product.findAll({
        attributes: { exclude: ['name, content, founder, owner'] }
    })
    
    const products = productData.map((product) => product.get({ plain:true }));

    console.log(products)
    res.render(`gallery`, {
        products,
    });//TODO: gallery View Name
})

router.get('/art', async (req, res) => {
    res.render(`art`);//TODO: selectedArt View Name
})

router.get('/founders', async (req, res) => {
    const productData = await Product.findAll({
        where: { 
            founder: true
        }
    });
    
    const products = productData.map((product) => product.get({ plain:true }));

    res.render(`founder's-collection`, {
        products,
    });
})

router.get('/story', async (req, res) => {
    res.render(`story`);//TODO: story View Name
})

router.get('/login', async (req, res) => {
    //TODO: redirect to account page if logged in
    res.render(`login`);//TODO: Homepage View Name
})

router.get('/create', async (req, res) => {
    //TODO: redirect to account page if logged in
    res.render(`create-account`);//TODO: accountCreate View Name
})

router.get('/account', async (req, res) => {
    //TODO: redirect to login page if not logged in
    res.render(`account`);//TODO: account View Name
})

router.get('/cart', async (req, res) => {
    res.render(`cart`);//TODO: cart View Name
})

module.exports = router;