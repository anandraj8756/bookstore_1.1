var express = require('express')
var app = express()
var router = express.Router()
const { fetchAllWishItems, addWishItems } = require('../controllers/wishItem')
// const WishItem = require('../model/wishItem')
const WishItem = require("../../team4/model/wishlist"); 
const advancedFind = require('../middleware/advancedFind');

router.route('/:id')
    
   .get(fetchAllWishItems)

router.post("/:email", addWishItems);

// .post(addWishItems)

module.exports = router
