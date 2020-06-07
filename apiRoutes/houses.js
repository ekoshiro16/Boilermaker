const router = require('express').Router();

// matches GET requests to /api/houses
router.get('/', function (req, res, next) { /* etc */});

// matches POST requests to /api/houses
router.post('/', function (req, res, next) { /* etc */});

// matches PUT requests to /api/houses/:houseId
router.put('/:houseId', function (req, res, next) { /* etc */});

// matches DELETE requests to /api/houses/:houseId
router.delete('/:houseId', function (req, res, next) { /* etc */});

module.exports = router;