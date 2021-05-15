const router = require('express').Router();
//const { Product } = require('../../models'); FIXME: Uncomment

router.post('/', async (req, res) => {
    //TODO: Handle adding item to order, check login status before update
    //TODO: Handle finalizing of order(change order status, update ownership, change account value)
});

module.exports = router;