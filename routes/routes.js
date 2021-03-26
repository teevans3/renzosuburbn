const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/postTwitch', controllers.postTwitch);
router.post('/postEmail', controllers.postEmail);

module.exports = router;