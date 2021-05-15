const router = require('express').Router();
const { Product } = require('../../models');

router.post('/', async (req, res) => {
    //TODO: Handle Ownership Change
    //TODO: Handle adding item to order, check login status before update
    //TODO: Handle finalizing of order(change order status, update ownership, change account value)
});

module.exports = router;