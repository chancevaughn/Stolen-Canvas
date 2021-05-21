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
    res.render(`story`);
})

router.get('/login', async (req, res) => {
    if(req.session.logged_in){
        res.redirect('/account');
    }
    res.render(`login`);
})

router.get('/create', async (req, res) => {
    if(req.session.logged_in){
        res.redirect('/account')
    }
    res.render(`create-account`);
})

router.get('/account', async (req, res) => {
    if(!req.session.logged_in){
        res.redirect('/login')
    }
    res.render(`account`);
})

router.get('/cart', async (req, res) => {
    if(!req.session.logged_in){
        res.redirect('/login')
    }
    res.render(`cart`);
})

module.exports = router;