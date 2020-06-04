const router = require('express').Router();
const authMiddleware = require('../middlewares')
const authController = require('../controllers/auth.js')

router.use('/:userId', authMiddleware, authController);

module.exports = router;
