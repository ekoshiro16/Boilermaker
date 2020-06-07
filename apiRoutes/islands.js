const router = require('express').Router();

// matches GET requests to /api/islands/
router.get('/', function (req, res, next) { /* etc */});

// matches POST requests to /api/islands/
router.post('/', function (req, res, next) { /* etc */});

// matches PUT requests to /api/islands/:islandId
router.put('/:islandId', function (req, res, next) { /* etc */});

// matches DELETE requests to /api/islands/:islandId
router.delete('/:islandId', function (req, res, next) { /* etc */});

module.exports = router;