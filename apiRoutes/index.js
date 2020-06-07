const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/villagers', require('./villagers'));
router.use('/houses', require('./houses'));
router.use('/islands', require('./islands'));

router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });

module.exports = router;