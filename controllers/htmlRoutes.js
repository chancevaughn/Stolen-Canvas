const router = require(`express`).Router();

router.get('/', async (req, res) => {
    res.render(`homepage`);//TODO: Homepage View Name
})

router.get('/gallery', async (req, res) => {
    res.render(`gallery`);//TODO: gallery View Name
})

router.get('/gallery/:id', async (req, res) => {
    res.render(`selectedArt`);//TODO: selectedArt View Name
})

router.get('/founders', async (req, res) => {
    res.render(`founders`);//TODO: founders View Name
})

router.get('/story', async (req, res) => {
    res.render(`story`);//TODO: story View Name
})

router.get('/login', async (req, res) => {
    //TODO: redirect to account page if logged in
    res.render(`homepage`);//TODO: Homepage View Name
})

router.get('/create', async (req, res) => {
    //TODO: redirect to account page if logged in
    res.render(`accountCreate`);//TODO: accountCreate View Name
})

router.get('/account', async (req, res) => {
    //TODO: redirect to login page if not logged in
    res.render(`account`);//TODO: account View Name
})

router.get('/cart', async (req, res) => {
    res.render(`cart`);//TODO: cart View Name
})

module.exports = router;