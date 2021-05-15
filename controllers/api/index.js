const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');//TODO: Change name to match SQL setup

router.use('/users', userRoutes);
router.use('/product', productRoutes);

module.exports = router;