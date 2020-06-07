const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/villagers', require('./villagers'));
router.use('/houses', require('./houses'));
router.use('/islands', require('./islands'));

module.exports = router;