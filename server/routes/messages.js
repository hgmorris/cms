const express = require('express');
const router = express.Router();

// GET /messages
router.get('/', (req, res) => {
  // Handle GET request for messages
  res.send('GET request for messages');
});

// POST /messages
router.post('/', (req, res) => {
  // Handle POST request for messages
  res.send('POST request for messages');
});

// PUT /messages/:id
router.put('/:id', (req, res) => {
  // Handle PUT request for a specific message
  res.send(`PUT request for message ${req.params.id}`);
});

// DELETE /messages/:id
router.delete('/:id', (req, res) => {
  // Handle DELETE request for a specific message
  res.send(`DELETE request for message ${req.params.id}`);
});

module.exports = router;
