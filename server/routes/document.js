var express = require('express');
var router = express.Router();



// GET /documents
router.get('/', function(req, res, next) {
  res.send('GET request for documents');
});

// POST /documents
router.post('/', function(req, res, next) {
  res.send('POST request for documents');
});

// PUT /documents/:id
router.put('/:id', function(req, res, next) {
  res.send(`PUT request for document ${req.params.id}`);
});

// DELETE /documents/:id
router.delete('/:id', function(req, res, next) {
  res.send(`DELETE request for document ${req.params.id}`);
});

module.exports = router;
