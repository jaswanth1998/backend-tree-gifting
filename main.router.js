const router = require("express").Router();

const Hospitals = require("./api/routers/hospitals/hospitals.router");
const Users = require('./api/routers/users/users.router');
const Address = require('./api/routers/users/address.router');
const Products = require('./api/routers/products/products.router');
const Orders = require('./api/routers/users/orders.router');
const Cart = require('./api/routers/users/cart.router');

router.use('/hospitals',Hospitals)
router.use('/users',Users)
router.use('/users', Address)
router.use('/products', Products)
router.use('/orders', Orders)
router.use('/cart', Cart)

module.exports = router;