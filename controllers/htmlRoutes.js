const router = require(`express`).Router();
const { Product, User } = require('../models');


router.get('/', async (req, res) => {
    res.render(`homepage`);
})

router.get('/gallery', async (req, res) => {
    const productData = await Product.findAll({
        attributes: { exclude: ['name, content, founder, owner'] }
    })

    const products = productData.map((product) => product.get({ plain: true }));
    console.log(products)
    if (req.session.searchHistory) {
        res.render('gallery', { products, searchHistory: req.session.searchHistory })
    }
    else {
        res.render(`gallery`, {
            products,
        });
    }
})

router.get('/art/:id', async (req, res) => {
    const artData = await Product.findOne({
        where: {
            product_id: req.params.id
        }
    })

    res.render(`art`, artData.get({ plain: true }));
});


router.get('/founders', async (req, res) => {
    const productData = await Product.findAll({
        where: {
            founder: true
        }
    });

    const products = productData.map((product) => product.get({ plain: true }));

    res.render(`founder's-collection`, {
        products,
    });
})

router.get('/story', async (req, res) => {
    res.render(`story`);
})

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/account');
    }
    else {
        res.render(`login`);
    }
})

router.get('/create', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/account')
    }
    else {
        res.render(`create-account`);
    }
})

router.get('/account', async (req, res) => {
    if (!req.session.logged_in || !req.session.user_id) {


        res.redirect('/login')
    }
    else {
        try {
            const dbUserData = await User.findOne({
                where: {
                    user_id: req.session.user_id

                },

                attributes: { exclude: ['password, create_date, last_login'] }
            })
            const dbCollection = await Product.findAll({
                where: {
                    owner: req.session.user_id
                }
            })
            const collection = dbCollection.map((art) => art.get({plain: true}));
            const userData = dbUserData.get({plain: true})
            res.render(`account`, {userData, collection});
        }
        catch {
            req.session.destroy(() => {
                res.status(403).render('/login')
            })

        }
    }
})

router.get('/cart', async (req, res) => {
    try {
        if (!req.session.logged_in) {
            res.redirect('/login')
        }
        else {
            const dbProducts = await Product.findAll({
                where: {
                    incart: req.session.user_id
                }
            })
            const cartProducts = dbProducts.map((art) => art.get({plain: true}));
            console.log(cartProducts);
            res.status(200).render('cart', {cartProducts})
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

})

module.exports = router