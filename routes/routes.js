const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.post('/postTwitch', controllers.postTwitch);
router.post('/postEmail', controllers.postEmail);

module.exports = router;